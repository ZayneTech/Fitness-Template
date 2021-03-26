import React from 'react';
import sunset from '../assets/images/sunset-girl.jpg';
import fitWomen from '../assets/images/fit-women.jpg';
import ringPull from '../assets/images/ring-pullup.jpg';
import manFlex from '../assets/images/arm-flex.jpg';
import fitGirl from '../assets/images/fit-girl.jpg';
import Ellipse from './ellipse-svg';


const HomepageGallery = () => {
    return (
        <section className="container">
            <div className="gallery flex">

                <Ellipse />

                <div className="main-gallery">
                    <img src={sunset}/>
                    <div className="view-gallery-div">
                        <h2>View Gallery</h2>
                    </div>
                </div>

                <div className="side-gallery flex">
                
                        <img src={fitWomen} />
                    
                        <img src={fitGirl} />
                   
                        <img src={ringPull} />
                    
                        <img src={manFlex} />
                    
                </div>
            </div>
        </section>
    )
}


export default HomepageGallery;