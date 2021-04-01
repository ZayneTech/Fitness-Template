import React from 'react';
import Navbar from '../components/navbar';
import SecondaryHero from '../components/secondary-hero';
import Footer from '../components/footer';
import turkish from '../assets/images/turkish-get-up.jpg';
import Ellipse from '../components/ellipse-svg';



const About = () => {
    return(
        <div className="container">
            <Navbar />

            <main>
                <SecondaryHero thePage='About' />

                <section className="flex about-section">
                    <div className="about">
                        <section className="about-intro">
                            <h2>About Me</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
                                aute irure dolor in reprehenderit in voluptate velit esse 
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                                anim id est laborum.
                            </p>
                        </section>

                        <section className="goals-section flex">
                            <div className="my-img">
                                <img src={turkish}/>
                            </div>

                            <div className="goals">
                                <h2>Goals</h2>

                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                </p>
                            </div>
                        </section>
                    </div>

                    <aside className="experience-info">
                        <section className="experience">
                            <h2>Experience</h2>
                            <ul>
                                <li>Years: 9</li>
                                <li>Trainees: 102</li>
                                <li>Awards: 12</li>
                                <li>Certificates: 4</li>
                            </ul>
                        </section>
                        
                        <section className="knowledge">
                            <h2>Knowledge</h2>

                            <div className="tags">
                                <button className="button"> BodyBuilding</button>
                                <button className="button"> Calisthenics</button>
                                <button className="button"> Yoga </button>
                                <button className="button"> Martial Arts</button>
                            </div>
                        </section>
                    </aside>
                </section>

                <section className="testimonials">
                    <h2>Client Testimonials</h2>
                    <div>
                        <div className="circle-img"></div>
                        <div>
                            <h3>Batman</h3>
                            <p>Wouldn't have learned to fight crime without his training 
                                techniques. Would recommend you follow his guidance.
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="circle-img"></div>
                        <div>
                            <h3>The Flash</h3>
                            <p> He taught me how to run faster. Now I can break the speed of 
                                light and time travel at will.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}



export default About;