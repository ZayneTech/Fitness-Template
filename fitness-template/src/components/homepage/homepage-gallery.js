import React from 'react';
import sunset from '../../assets/images/sunset-girl-opt.jpg';
import fitWomen from '../../assets/images/fit-women-opt.jpg';
import ringPull from '../../assets/images/ring-pullup-opt.jpg';
import manFlex from '../../assets/images/arm-flex-opt.jpg';
import fitGirl from '../../assets/images/fit-girl-opt.jpg';
import Ellipse from '../ellipse-svg';


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