import React from 'react';
import './Login.css';
import loginImg from '../../../image/loginImg.jpg';
import google from '../../../image/google.png';
import fb from '../../../image/facebook.png';
import { Link } from 'react-router-dom';


const Login = () => {
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
                        <input type='email' name='email' placeholder='Enter email' required />
                        <input type='password' name='password' placeholder='Enter password' required />
                        <button className='login-btn2'>
                            Login
                        </button>
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
                            <p style={{ textAlign: 'center' }}>New to Fstoppers?<span> <Link style={{ textDecoration: 'none' }} to='/register'>Sign up</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;