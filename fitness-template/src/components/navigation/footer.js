import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Instagram, Twitter, Youtube} from '../svgs';

import '../../assets/stylesheets/footer.css';

const Footer = () => {
    const footer = useRef();
    const url = useLocation();
    
    useEffect(()=> {
        url.pathname === '/admin' ?
        footer.current.style.display = 'none' :
        footer.current.style.display = 'flex'
    }, [])
    return(
        <footer className="container bg-dark" ref={footer}>
            <div className="footer-content">
                <div className="footer-logo-div">
                    <div>
                        <h2><Link to="/"> Logo </Link></h2>
                        <h4>Brand Motto Goes Here</h4>
                    </div>
        
                    <div className="footer-socials-div">
                        <Instagram />
                        <Twitter />
                        <Youtube />
                    </div>
                </div>

                <div className="footer-links explore">
                    <h3>Explore</h3> 
                    <ul> 
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/about"> About </Link></li>
                        <li><Link to="/programs"> Programs </Link></li>
                        <li><Link to="/blogs"> Blogs </Link></li>
                    </ul>
                </div>

                <div className="footer-links contact">
                    <h3>Contact</h3>  
                    <ul>
                        <li>youremailaddress@gmail.com</li>
                        <li>+1 123 - 456 - 789</li>
                    </ul>
                </div>

                <div className="footer-links follow">
                    <h3>Follow</h3>  
                    <ul> 
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Youtube</li>
                    </ul>
                </div>

                <div className="footer-links legal">
                    <h3>Legal</h3>  
                    <ul>  
                        <li><Link to="/"> Terms </Link></li>
                        <li><Link to="/"> Privacy </Link></li>
                    </ul>
                </div>

                <div className="footer-links" id="back-to-top">
                    <h3>Back To Top</h3>
                </div>

            </div>

            <div className="copyright">
                    <p>2021 Brand Name. All Rights Reserved.</p>
            </div>
        </footer>
    )
}



export default Footer;