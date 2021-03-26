import React from 'react';
import Community from '../components/homepage-community';
import HomepageGallery from '../components/homepage-gallery';
import HomepageHero from '../components/homepage-hero';
import HomepagePrograms from '../components/homepage-programs';




const Homepage = () => {

    return(
        <div className="container homepage">
           <HomepageHero />
           <HomepagePrograms />
           <Community />
           <HomepageGallery />
        </div>
    )
}



export default Homepage;