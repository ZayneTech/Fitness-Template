import React, { useContext, useEffect } from 'react';
import '../assets/stylesheets/blog.css';
import SecondaryHero from '../components/secondary-hero';
import search from '../assets/svgs/search.svg';
import powerSnatch from '../assets/images/dumbbell-power-snatch-opt.jpg';
import { locationContext } from '../context/location-context';
import { useLocation } from 'react-router';



const Blog = () => {

    const [location, setLocation] = useContext(locationContext);

    const locationObj = useLocation();

    useEffect(() => {
        setLocation(locationObj.pathname)
    }, [])

    return(

        <div className="container">
            <main className="">
                <SecondaryHero thePage="Blog Name"/>

                <section className="flex flex-content">
                    <section className="blogs-section">
                        <div className="blog-container">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna 
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit 
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                                occaecat cupidatat non proident, sunt in culpa qui officia 
                                deserunt mollit anim id est laborum.
                            </p>

                            <img src={powerSnatch} className="secondary-blog-imgs"/>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. 
                            </p>

                            <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </section>

                    <aside className="aside-content">
                        <div className="search-div">
                            <h2>Search</h2>
                            <div className="search">
                                <input type="text" placeholder="Search Here..."/>
                                <button className="button"><img src={search}/></button>
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



export default Blog;