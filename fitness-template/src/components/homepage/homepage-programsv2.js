import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/images/dark-deadlift-opt.jpg';
import Img2 from '../../assets/images/dumbbell-pushups-opt.jpg';
import Img3 from '../../assets/images/core-girl-opt.jpg';
import Img4 from '../../assets/images/girl-squat-light-opt.jpg';



const HomepageProgramsv2 = () => {


    return(
        <section className="container flex homepage-programs">
            <div className="homepage-programs-background">
                <div className="img-overlay-dark"> 
                <div className="homepage-programs-cta flex"> 
                    <div className="programs-cta-info">
                        <h3>Information About Programs</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit</p>
                    </div>
                 <h3><Link to="/programs">All Programs</Link></h3>
                </div>
                </div>
            </div>

            <div className="top-programs">
                <div className="program flex">
                   
                    <img className="full-width-img" src={Img1}/>
                    <div className="img-overlay-dark"></div>

                    <div className="full-width-mode homepage-program-info flex">
                        <h2>Full Body Split</h2>
                        <p> Short program description to excite 
                            customers into buying your program.
                        </p>
                       <a> View Program </a> 
                    </div>
                </div>

                <div className="program flex">
                    <img className="full-width-img" src={Img2} />
                    <div className="img-overlay-dark"></div>

                    <div className=" full-width-mode homepage-program-info flex">
                        <h2>Calisthenics</h2>
                        <p> Short program description to excite 
                            customers into buying your program.
                        </p>
                       <a> View Program </a>
                    </div>
                </div>

                <div className="program flex">
                    <img className="full-width-img" src={Img3} />
                    <div className="img-overlay-dark"></div>

                    <div className="full-width-mode homepage-program-info flex">
                        <h2>Core Strength</h2>
                        <p> Short program description to excite 
                            customers into buying your program.
                        </p>
                       <a> View Program </a>
                    </div>
                </div>

                <div className="program flex">
                    <img className="full-width-img" src={Img4}/>
                    <div className="img-overlay-dark"></div>
                 
                    <div className="full-width-mode homepage-program-info flex">
                        <h2>Strength & Conditioning</h2>
                        <p> Short program description to excite 
                            customers into buying your program.
                        </p>
                       <a> View Program </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HomepageProgramsv2;