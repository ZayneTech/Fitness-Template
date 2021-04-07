import React from 'react';
import SecondaryHero from '../components/secondary-hero';
import gym from '../assets/images/squat-racks-opt.jpg'
import partnerPushup from '../assets/images/partner-pushup-opt.jpg'
import yoga from '../assets/images/outdoor-yoga.jpg'
import powerSnatch from '../assets/images/dumbbell-power-snatch-opt.jpg';
import search from '../assets/svgs/search.svg';
import '../assets/stylesheets/blog.css';



const BlogArchive = () => {
    return(
        <div className="container">
            <main>
                <SecondaryHero thePage='Blogs' />
                <section className="flex flex-content"> {/*Make into a global class*/}

                    <seciton className="blogs-section">
                        <div className="blog-post">
                            <img src={gym}/>
                            <header>
                                <h3>Gym's During COVID-19</h3>
                                <p>March 27th, 2021</p>
                            </header>

                            <div className="blog-content">
                                <p>Brief description of what your blog post talks about. 
                                Excite potential readers here. Can probably fit about 25 words here.
                                </p>
                            </div>
                            <button className="button">Read More</button>
                        </div>

                        <div className="blog-post">
                            <img  src={partnerPushup}/>
                            <header>
                                <h3>Benefits of a Training Partner</h3>
                                <p>March 27th, 2021</p>
                            </header>

                            <div>
                                <p>Brief description of what your blog post talks about. 
                                Excite potential readers here. Can probably fit about 25 words here.
                                </p>
                            </div>
                            <button className="button">Read More</button>
                        </div>

                        <div className="blog-post">
                            <img  src={yoga}/>
                            <header>
                                <h3>Yoga for Health</h3>
                                <p>March 27th, 2021</p>
                            </header>

                            <div>
                                <p>Brief description of what your blog post talks about. 
                                Excite potential readers here. Can probably fit about 25 words here.
                                </p>
                            </div>
                            <button className="button">Read More</button>
                        </div>

                        <div className="blog-post">
                            <img  src={powerSnatch}/>
                            <header>
                                <h3>Why Women Should do BodyBuilding</h3>
                                <p>March 27th, 2021</p>
                            </header>

                            <div>
                                <p>
                                Brief description of what your blog post talks about. 
                                Excite potential readers here. Can probably fit about 25 words here.
                                </p>
                            </div>
                            <button className="button">Read More</button>
                        </div>

                    </seciton>

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



export default BlogArchive;