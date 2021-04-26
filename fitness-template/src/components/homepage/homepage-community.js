import React from 'react';
import instagram from '../../assets/svgs/InstagramLogo.svg';
import twitter from '../../assets/svgs/twitter.svg';
import youtube from '../../assets/svgs/youtube.svg';


const Community = () => {
    return (
        <section className="container" id="community">
            <div className="flex community-container">
                <h2>Join Our Community</h2>

                    <div className="social-stats flex">
                        <img src={instagram} /> 
                        <h2>100k</h2>
                    </div>

                    <div className="social-stats flex">
                        <img src={twitter} />
                        <h2>98k</h2> 
                    </div>

                    <div className="social-stats flex">
                        <img src={youtube} /> 
                        <h2>98k</h2>
                    </div>
                </div>
        </section>
    )
}

export default Community;