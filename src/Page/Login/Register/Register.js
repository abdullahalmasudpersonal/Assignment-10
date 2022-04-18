import React from 'react';
import loginImg from '../../../image/loginImg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }



    return (
        <div className='body'>
            <div className='login'>
                <div>
                    <img src={loginImg} height='220px' width='398px' alt='' />
                </div>
                <div className='login-bg'>
                    <div className='login-div'>
                        <div className='login-btn'>
                            <h2>Register</h2>
                        </div>
                        <form onSubmit={handleRegister} className='login-div'>
                            <input type='text' name='name' placeholder='Enter name' />
                            <input type='email' name='email' placeholder='Enter email' required />
                            <input type='password' name='password' placeholder='Enter password' required />
                            <input className='login-btn2' type='submit' value='Register' />
                        </form>
                        <div className='remember-forgot'>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Remember Me
                                </label>
                            </div>
                            <p className='forgot-pass'>Forgot Password</p>
                        </div>
                        <div>
                            <SocialLogin />
                        </div>
                        <div className='new-user'>
                            <p style={{ textAlign: 'center' }}>Alrady have an account?<span> <Link style={{ textDecoration: 'none' }} to='/login' onClick={navigateLogin}>Login</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;