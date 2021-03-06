import React, { useState } from 'react';
import loginImg from '../../../image/loginImg.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Login/Loading/Loading';
import './Register.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading />
    }


    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('updated profile');
        navigate('/home');
    }


    return (
        <div className='container register-bg' >
            <div className='login'>
                <div>
                    <img src={loginImg} height='200px' width='428px' alt='' />
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
                            <div className=''>
                                <input
                                    onClick={() => setAgree(!agree)}
                                    type='checkbox' name='terms' id='terms'></input>
                                {/*  <label className={agree ? 'text-primary' : 'text-danger'}
                                htmlFor='terms'>Accept terms and conditions</label> */}
                                <label className={`ps-2 ${agree ? '' : 'text-danger'}`}
                                    htmlFor='terms'>Accept terms and conditions</label>
                            </div>
                            <input
                                disabled={!agree}
                                className='login-btn2' type='submit'
                                value='Register' />

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