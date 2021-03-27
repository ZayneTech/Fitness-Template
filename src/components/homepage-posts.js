import React from 'react';
import gym from '../assets/images/squat-racks.jpg';
import partnerPushup from '../assets/images/partner-pushup.jpg';



const HomepagePosts = () => {

    return (
    <section className="container" id="homepage-recent-posts">
        <h2>Recent Posts</h2>

        <div className="recent-posts-container flex">

            <div className="recent-post overflow-mode">
                <img src={gym}/>
                <div className="post-info">
                    <header className="post-header">
                        <h3 className="post-title">Gym's During COVID-19</h3>
                        <p className="post-date"> March 27th, 2019</p>
                    </header>
                    <p>Brief description of what your blog post talks about. 
                        Excite potential readers here. Can probably fit about 25 words here.
                    </p>

                    <button className="button">Read More</button>
                </div>
            </div>
            

            <div className="recent-post overflow-mode">
                <img src={partnerPushup}/>
                <div className="post-info">
                    <header className="post-header">
                        <h3 className="post-title">Benefits of a Training Partner</h3>
                        <p className="post-date"> March 27th, 2019</p>
                    </header>
                    <p>Brief description of what your blog post talks about. 
                        Excite potential readers here. Can probably fit about 25 words here. Maybe a bit more, we'll check later.
                    </p>

                    <button className="button">Read More</button>
                </div>
            </div>
           
        </div>
    </section>
    )
}





export default HomepagePosts;