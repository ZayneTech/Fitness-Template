import React, { useContext, useEffect } from 'react';
import { locationContext } from '../context/location-context';
import { useLocation } from 'react-router-dom';
import HomepageAbout from '../components/homepage-about';
import Community from '../components/homepage-community';
import HomepageGallery from '../components/homepage-gallery';
import HomepageHero from '../components/homepage-hero';
import HomepagePosts from '../components/homepage-posts';
import HomepagePrograms from '../components/homepage-programs';




const Homepage = () => {

    const [location, setLocation] = useContext(locationContext);

    const locationObj = useLocation();
    useEffect(() => {
        setLocation(locationObj.pathname)
    }, [])

    return(
        <div className="container homepage">
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