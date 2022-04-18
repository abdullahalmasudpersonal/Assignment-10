import React from 'react';
import './About.css';
import myPic from '../../image/Abdullah al masud (2).jpg';

const About = () => {
    return (
        <div className=' container about mt-5'>
            <div className='about-detail'>
                    <img src={myPic} alt='' />
                    <h2>ABDULLAH AL MASUD</h2>
            </div>
            <div className='about-aim'>
                <p>
                    <strong>Aim in life: </strong>
                    Alhamdulillah, I got off to a great start with the 2022 Salta Programming Hero. Despite some obstacles I am trying my best to finish this course smoothly. If I can continue my hard work I will be able to achieve something good inshaAllah. My efforts to become a skilled programmer will continue, InshaAllah. I have chosen programming as my career. Hopefully, your prayers and cooperation will continue.
                </p>

            </div>
        </div>
    );
};

export default About;