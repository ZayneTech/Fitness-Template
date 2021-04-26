import React, { useContext, useEffect } from 'react';
import { locationContext } from '../context/location-context';
import { useLocation } from 'react-router-dom';
import { websiteContext } from '../context/website-context';
import HomepageAbout from '../components/homepage/homepage-about';
import Community from '../components/homepage/homepage-community';
import HomepageGallery from '../components/homepage/homepage-gallery';
import HomepageHero from '../components/homepage/homepage-hero';
import HomepagePosts from '../components/homepage/homepage-posts';
import HomepagePrograms from '../components/homepage/homepage-programs';
import HomepageProgramsv2 from '../components/homepage//homepage-programsv2';
import HomepagePostsv2 from '../components/homepage/homepage-postsv2';
import HomepageAboutv2 from '../components/homepage/homepage-aboutv2';




const Homepage = () => {

    const [location, setLocation] = useContext(locationContext);

    const [homePageBuild, setHomePageBuild] = useContext(websiteContext);

    const locationObj = useLocation();
    useEffect(() => {
        setLocation(locationObj.pathname)
    }, [])

    useEffect(() => {

    }, [homePageBuild])

    return(
        <div className="container homepage">

                <HomepageHero />

                { homePageBuild.programs.default ? <HomepagePrograms /> : <HomepageProgramsv2 />}

                <Community />

                { homePageBuild.gallery.default ? <HomepageGallery /> : <HomepageGallery />}

                { homePageBuild.posts.default ? <HomepagePosts /> : <HomepagePostsv2 />} {/* posts margin bottom remove margin top of about */}

                { homePageBuild.about.default ? <HomepageAbout /> : <HomepageAboutv2 />}
        
        </div>
    )
}



export default Homepage;