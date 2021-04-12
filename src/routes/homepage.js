import React, { useContext, useEffect } from 'react';
import { locationContext } from '../context/location-context';
import { useLocation } from 'react-router-dom';
import HomepageAbout from '../components/homepage-about';
import Community from '../components/homepage-community';
import HomepageGallery from '../components/homepage-gallery';
import HomepageHero from '../components/homepage-hero';
import HomepagePosts from '../components/homepage-posts';
import HomepagePrograms from '../components/homepage-programs';
import { websiteContext } from '../context/website-context';
import HomepageProgramsv2 from '../components/homepage-programsv2';
import HomepagePostsv2 from '../components/homepage-postsv2';
import HomepageAboutv2 from '../components/homepage-aboutv2';




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