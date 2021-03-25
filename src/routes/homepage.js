import React from 'react';
import Community from '../components/homepage-community';
import HomepageHero from '../components/homepage-hero';
import HomepagePrograms from '../components/homepage-programs';




const Homepage = () => {

    return(
        <div className="container homepage">
           <HomepageHero />
           <HomepagePrograms />
           <Community />
        </div>
    )
}



export default Homepage;