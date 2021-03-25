import React from 'react';
import HomepageHero from '../components/homepage-hero';
import HomepagePrograms from '../components/homepage-programs';




const Homepage = () => {

    return(
        <div className="container homepage">
           <HomepageHero />
           <HomepagePrograms />
        </div>
    )
}



export default Homepage;