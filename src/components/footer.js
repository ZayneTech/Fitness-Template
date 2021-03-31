import React from 'react';
import { Link } from 'react-router-dom';
import {Instagram, Twitter, Youtube} from '../components/svgs';
import '../assets/stylesheets/footer.css';

const Footer = () => {


    return(
        <footer className="container bg-dark">
            <div className="footer-content">
                <div className="footer-logo-div">
                    <div>
                        <h2>Logo</h2>
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
                        <li>Home</li>
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Contact</li>
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
                        <li>Terms</li>
                        <li>Privacy</li>
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