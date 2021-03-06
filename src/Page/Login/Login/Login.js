import React, { useRef } from 'react';
import './Login.css';
import loginImg from '../../../image/loginImg.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (error) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}</p>
    }

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email adderss');
        }
    }

/*     const resetPassword = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email');
    } */

    return (
        <div className='body'>
            <div className='login'>
                <div>
                    <img src={loginImg} height='220px' width='398px' alt='' />
                </div>
                <div className='login-bg'>
                    <div className='login-div'>
                        <h2>Login</h2>
                        <form className='login-div' onSubmit={handleSubmit}>
                            <input ref={emailRef} type='email' name='email' placeholder='Enter email' required />
                            <input ref={passwordRef} type='password' name='password' placeholder='Enter password' required />
                            <button type='submit' className='login-btn2'>
                                Login
                            </button>
                        </form>
                        <div className='remember-forgot'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Remember Me
                                </label>
                            </div>
                            <p
                            onClick={resetPassword}
                             className='forgot-pass'>Forgot Password</p>
                        </div>
                        {errorElement}
                        <div>
                            <SocialLogin />
                        </div>
                        <div className='new-user'>
                            <p style={{ textAlign: 'center' }}>New to Fstoppers?<span> <Link style={{ textDecoration: 'none' }} to='/register' onClick={navigateRegister}>Register</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;