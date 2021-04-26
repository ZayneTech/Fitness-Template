import React, { useState } from 'react';
import turkish from '../../assets/images/turkish-get-up-opt.jpg'



const HomepageAbout = () => {
        return (
            <section className="container" id="homepage-about-container">
                <div className="spacer"></div>

                <div className="about-background-img homepage-about">
                    <div className="img-overlay-light"> </div>
                        <header>
                            <h2>My Experience</h2>
                            <p>
                                Brief summary to talk about yourself and you experiences as a fitness guru 
                                and personal trainer. Another sentence about your journey in the industry.
                                sdsdfdssdksdkfjndfjkd skjdnfsdf skdjfnsdf sdkjfndsf sdkjfdsf dskjfds fkj
                                jsdnfsjdkfnsjdf skdjfsd fkjsdfsd kj
                            </p>
                        </header>


                        <div className="experience-stats">
                            <div className="stat">
                                    <p>9</p>
                                    <p> years</p>
                            </div>

                            <div className="stat">
                                    <p>102</p>
                                    <p> Trainees </p>
                            </div>

                            <div className="stat">
                                    <p>12</p>
                                    <p> Awards </p>
                            </div>
                            <div className="stat">
                                <button> Read More</button>
                            </div>
                        </div>
                </div>
            </section>
    )}



export default HomepageAbout;