import React, { useContext, useEffect, useRef, useState} from 'react';
import { scrollContext} from '../context/scroll-context';
import { Link } from 'react-router-dom';
import {Instagram, Twitter, Youtube, Cart, Hamburger, Exit} from '../components/svgs';
import '../assets/stylesheets/navbar.css';
import { locationContext } from '../context/location-context';
import Homepage from '../routes/homepage';

const Navbar = () => {
    /* scroll context and states*/
    const [scrollPos] = useContext(scrollContext);
    const [prevScrollPos, setPrevScrollPos] = useState(scrollPos);

    /* navbar ref */
    const navbar = useRef();

    /* hide navbar on scroll down. reveal on scroll up */
    useEffect(() => {
        if(prevScrollPos >= scrollPos) {
            navbar.current.style.top = '0'
        } else {
            navbar.current.style.top = '-70px'
        }
        setPrevScrollPos(scrollPos)

     }, [scrollPos])

    /* change color of active link */
     const changeActiveLink = ({target}) => {

        /* Get navbar ul to check if click target equals ul.
        prevents all ul links from being active */
        const ul = document.querySelector('ul');

        /* get current active and new active links*/
        const currActive = document.querySelector('.active');
        const newActive = target;
        
        /* Check if target is already active or not an individual link */
        if (currActive === newActive || newActive == ul) return

        currActive.classList.remove('active');
        newActive.classList.add('active')
    }
   
    return(
        <header className="bg-dark flex navbar" ref={navbar}>
            
                <div className="logo-div">
                    <Hamburger />
                    
                    <Link to="/">
                        <h2>Logo</h2>
                    </Link>
                </div>
            

            <nav className="flex">
                <Exit color="#FFF"/>
                <h2><Link to="/">Logo</Link></h2>

                <ul className="navbar-links" onClick={(e) => changeActiveLink(e)}>
                    <li><Link to="/" className="home-link active"> Home </Link></li>
                    <li><Link to="/about" className="about-link">About</Link> </li>
                    <li><Link to="/programs" className="programs-link">Programs</Link> </li>
                    <li><Link to="/blogs" className="blogs-link">Blog</Link> </li>
                    <li><Link to="contact" className="contact-link">Contact</Link> </li>
                </ul>
            </nav>

            <div className="nav-socials">
                <div className="flex">
                    <Instagram />
                    <Twitter />
                    <Youtube />
                </div>

                <Cart/>
            </div>
        </header>
    )
}



export default Navbar;