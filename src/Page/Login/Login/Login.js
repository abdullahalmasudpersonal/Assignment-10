import React, { useRef } from 'react';
import './Login.css';
import loginImg from '../../../image/loginImg.jpg';
import google from '../../../image/google.png';
import fb from '../../../image/facebook.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [ 
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if(user){
        navigate('/');
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

    return (
        <div className='body'>
            <div className='login'>
                <div>
                    <img src={loginImg} height='220px' width='398px' alt='' />
                </div>
                <div className='login-bg'>
                    <div className='login-div'>
                        <div className='login-btn'>
                            <h2>Login</h2>
                            <div>
                                <button>
                                    <img src={google} height='40px' width='40px' alt='' />
                                </button>
                                <button>
                                    <img src={fb} height='40px' width='40px' alt='' />
                                </button>
                            </div>
                        </div>
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
                            <p className='forgot-pass'>Forgot Password</p>
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