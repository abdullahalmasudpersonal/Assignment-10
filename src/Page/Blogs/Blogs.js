import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container blogs'>
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            What is difference between authorization and authentication ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div class="accordion-body">
                            <p><strong>Difference between authorization and authentication : </strong>
                                Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas. whereas it’s true that they’re usually employed in an equivalent context with an equivalent tool, they’re utterly distinct from one another.
                            </p>
                            <p>
                                <strong>Authorization:</strong>
                                <ul>
                                    <li>Authorization determines what resources a user can access.</li>
                                    <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                                    <li>Authorization isn’t visible to or changeable by the user.</li>
                                    <li>While it needs user’s privilege or security levels.</li>
                                    <li>Authorization always takes place after authentication.</li>
                                </ul>

                            </p>
                            <p>
                                <strong>Authentication:</strong>
                                <ul>
                                    <li>authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to.</li>
                                    <li>Authentication verifies who the user is.</li>
                                    <li>Authentication is the first step of a good identity and access management process.</li>
                                    <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                                    <li>Authentication is visible to and partially changeable by the user.</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                            Why are you using firebase? What other options do you have to implement authentication?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div class="accordion-body">
                            <p>
                                <strong>The reasons I use Firebase are : </strong>
                                Google may use Firebase for the following: Firebase manages all data in the database in real-time. Thus, exchanging data from database is easy and fast. So, I want to create mobile apps like live streaming, chat messaging, etc. That's why I use Firebase.
                            </p>
                            <p><strong>I have other options for implementing authentication : </strong></p>
                            <p><strong>Best Open Source Firebase Alternatives : </strong>
                            <ul>
                                <li>Parse</li>
                                <li>AWS Amplify</li>
                                <li> Couchbase</li>
                                <li>Kuzzle</li>
                                <li>SashiDo</li>
                                <li>NativeScript</li>
                                <li>Flutter</li>
                                <li> RxDB</li>
                                <li>Back4App</li>
                                <li>LoopBack</li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            What other services does firebase provide other than authentication ?
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                        <div class="accordion-body">
                            <strong>Firebase:</strong> Firebase is a Backend-as-a-Service BaaS that started as a YC11 startup and grew up into a next-generation app-development platform on Google Cloud Platform.
                            <p><strong>Firebase provides services other than authentication: </strong></p>
                            <ul>
                                <li><strong>Cloud Messaging:</strong> Everyone needs notifications in their mobile applications in one way or another, for enhanced engagement with their users.

                                    Firebase is a great tool to implement notifications, irrespective of the platform because it is fast, reliable, and scalable to handle your requests. Moreover, you won’t be charged a penny for using this service as it’s free of charge.

                                    You can use the below link to set up the Firebase Cloud Messaging to your project.
                                    https://firebase.google.com/docs/cloud-messaging

                                    It includes iOS, Android, Web, C++, and Unity setup.</li> <br />
                                <li><strong>Firebase Hosting: </strong>Firebase includes an easy-to-use hosting service for all of your static files. It serves them from a global CDN with HTTP/2.

                                    And to make your development particularly painless, Firebase hosting utilizes Superstatic, which you can run locally for all of your testing. I run Superstatic as BrowserSync middleware. The following implementation uses Gulp, but Gulp is purely optional.</li> <br />
                                <li><strong>Google Analytics: </strong>Yet another service that helps in growing and managing your business. It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.

                                    The service provides visualization of all this information on just a single tap. Many of you might be used to this service, as it is widely used in web applications as well. This one is free too.</li> <br />
                                <li><strong>Firebase File Storage: </strong>
                                    Firebase Storage provides a simple way to save binary files — most often images, but it could be anything — to Google Cloud Storage directly from the client!!!

                                    Firebase Storage has it’s own system of security rules to protect your GCloud bucket from the masses, while granting detailed write privileges to your authenticated clients.</li>
                            </ul>
                            <p>Firebase also provides several other services.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;