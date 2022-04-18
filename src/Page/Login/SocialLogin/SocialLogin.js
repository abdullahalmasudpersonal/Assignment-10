import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../../firebase.init';
import google from '../../../image/google.png';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = 
            <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div className='social-login'>
            <div>
                {errorElement}
            </div>
            <div className='social-login-btn'>
                <button onClick={() => signInWithGoogle()}>
                    <img src={google} height='40px' width='40px' alt='' />
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;