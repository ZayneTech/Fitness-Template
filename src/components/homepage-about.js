import React, { useState } from 'react';
import turkish from '../assets/images/turkish-get-up-opt.jpg'



const HomepageAbout = () => {

    const [version, setVersion] = useState('version-2');


    if(version === 'default'){
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
    else { 
        return(
            <section className="container about-version-2">
                <div className="spacer"></div>

                <div className="experience-stats bg-dark">
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

                <div className="about-v2-div">
                    <div className="about-v2-imgs">
                        <img src={turkish} id='img-1'/>
                        <img src={turkish} id='img-2'/>
                        <img src={turkish} id='img-3'/>
                    </div>

                    <div className="about-v2-info">
                        <h2>My Experience</h2>
                        <p>
                            Talk a lot about yourself, and make yourself feel important. 
                            Even though you aren't. Your just really fit and can make other 
                            people fit too. That's as far as your importance goes. 
                        </p>

                        <p>
                            Talk a lot about yourself, and make yourself feel important. 
                            Even though you aren't. Your just really fit and can make other 
                            people fit too. That's as far as your importance goes. 
                        </p>

                        <button className="button">Read More</button>
                    </div>

                </div>
                <div className="spacer"></div>
            </section>
    )}
}



export default HomepageAbout;