import React from 'react';
import HomepageAbout from '../components/homepage-about';
import Community from '../components/homepage-community';
import HomepageGallery from '../components/homepage-gallery';
import HomepageHero from '../components/homepage-hero';
import HomepagePosts from '../components/homepage-posts';
import HomepagePrograms from '../components/homepage-programs';
import Navbar from '../components/navbar';




const Homepage = () => {

    return(
        <div className="container homepage">
            <Navbar />
           <HomepageHero />
           <HomepagePrograms />
           <Community />
           <HomepageGallery />
           <HomepagePosts />
           <HomepageAbout />
        </div>
    )
}



export default Homepage;