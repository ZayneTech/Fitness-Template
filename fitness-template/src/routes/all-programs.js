import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import { locationContext} from '../context/location-context';
import SecondaryHero from '../components/secondary-hero';
import deadlift from '../assets/images/dark-deadlift-opt.jpg';
import pushup from '../assets/images/dumbbell-pushups-opt.jpg';
import core from '../assets/images/core-girl-opt.jpg';
import squat from '../assets/images/girl-squat-light-opt.jpg';
import '../assets/stylesheets/programs.css';





const AllPrograms = () => {

    const locationObject = useLocation();
    const newLocation = locationObject.pathname.split('/')[1]

    useEffect(() => {
        axios.get(`http://localhost:5000/${newLocation}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))        
    }, [])

    return(
        <div className="container">
            <main>
                <SecondaryHero thePage='Programs'/>

                <section className="bg-light flex programs-motivation">
                   <h2> Motivational Text Here </h2>
                </section>

                <section className="flex all-programs">
                    <div className="programs">
                        <img src={deadlift}/>
                        <div className="img-overlay-dark"></div>

                        <div className="program-info">
                            <h2>Full Body Split</h2>
                            <div className="underline"></div>

                            <div className="program-price">
                                <p>$99.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="programs">
                        <img src={pushup}/>
                        <div className="img-overlay-dark"></div>
                        <div className="img-overlay-dark"></div>

                        <div className="program-info">
                            <h2>Calisthenics</h2>
                            <div className="underline"></div>

                            <div className="program-price">
                                <p>$99.99</p>
                            </div>
                        </div>
                    </div> 

                    <div className="programs">
                        <img src={core}/>
                        <div className="img-overlay-dark"></div>
                        <div className="img-overlay-dark"></div>

                        <div className="program-info">
                            <h2>Core Strength</h2>
                            <div className="underline"></div>

                            <div className="program-price">
                                <p>$99.99</p>
                            </div>
                        </div>
                    </div>

                    <div className="programs">
                        <img src={squat}/>
                        <div className="img-overlay-dark"></div>
                        <div className="img-overlay-dark"></div>

                        <div className="program-info">
                            <h2>Strength & Conditioning</h2>
                            <div className="underline"></div>

                            <div className="program-price">
                                <p>$99.99</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}



export default AllPrograms;