import React, { useContext, useEffect } from 'react';
import SecondaryHero from '../components/secondary-hero';
import armFlex from '../assets/images/arm-flex-opt.jpg';
import fitWomen from '../assets/images/fit-women-opt.jpg';
import femaleSquat from '../assets/images/girl-squat-light-opt.jpg';
import deadlift from '../assets/images/dark-deadlift-opt.jpg';
import { locationContext } from '../context/location-context';
import { useLocation } from 'react-router';



const Program = () => {

    const [location, setLocation] = useContext(locationContext);

    const locationObj = useLocation();

    useEffect(() => {
        setLocation(locationObj.pathname)
    }, [])

    return(
        <div className="container">
            <main>
                <SecondaryHero thePage="Calisthenics"/>

                <section className="flex flex-content">
                    <section className="programs-section">
                        <div className="program-container"> 
                            <div className="about-program">
                               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. </p>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. </p> 
                            </div>

                            <div className="about-program">
                                <h2>Sub Heading</h2>
                               <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. </p>
                            </div> 
                        </div>
                    </section>

                    <aside className="aside-content">
                        <div>
                            <div className="buy-button">
                                <button className="button">Buy Now</button>
                                <button className="button"> Add to Cart </button>
                            </div>
                            <h2>More Informaiton</h2>
                                <div className="">   
                                    <h4>Experience: </h4>                                 
                                    <div className="measure-container">
                                        <p>Beginner</p>
                                        <div className="measure">
                                            <div className="measure-level" style={{width: '70%'}}></div>
                                        </div>
                                        <p>Advanced</p>
                                    </div>  

                                    <h4>Goal: </h4>                                 
                                    <div className="measure-container">
                                        <p>Strength</p>
                                        <div className="measure">
                                            <div className="measure-level" style={{width: '50%'}}></div>
                                        </div>
                                        <p>Muscle</p>
                                    </div>                                                                        
                                </div>
                        </div>

                        <div className="tags">
                            <h2>Tags</h2>
                            <button className="button">BodyBuilding</button>
                            <button className="button">Calisthenics</button>
                            <button className="button">Nutrition</button>
                            <button className="button">Yoga</button>
                            <button className="button">Gym Etiquette</button>
                            <button className="button">Covid-19</button>
                            <button className="button">Core</button>
                            <button className="button">Partner</button>
                        </div>
                    </aside>
                </section>
            </main>
        </div>
    )
}



export default Program;