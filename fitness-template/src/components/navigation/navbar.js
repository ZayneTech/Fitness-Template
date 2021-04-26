import React, { useContext, useEffect, useRef, useState} from 'react';
import { scrollContext} from '../../context/scroll-context';
import { NavLink } from 'react-router-dom';
import {Instagram, Twitter, Youtube, Cart, Hamburger, Exit} from '../svgs';
import '../../assets/stylesheets/navbar.css';
import Homepage from '../../routes/homepage';

const Navbar = () => {
    /* scroll context and states*/
    const [scrollPos] = useContext(scrollContext);
    const [prevScrollPos, setPrevScrollPos] = useState(scrollPos);

    /* navbar ref */
    const navbar = useRef();
    
    /* hide navbar on scroll down. reveal on scroll up*/
    /*Accessibility on Focus:  (document.activeElement.nodeName === "A" && document.activeElement.parentElement.parentElement.parentElement.nodeName === 'NAV') */

    useEffect(() => {
        if(prevScrollPos >= scrollPos) {
            navbar.current.style.top = '0'
        } else {
            navbar.current.style.top = '-70px'
        }
        setPrevScrollPos(scrollPos)
     }, [scrollPos, document.activeElement.nodeName])


     const revealSideNav = () => {
         const sideNav = document.querySelector('.nav');
         sideNav.style.left = '0'
     }

     const hideSideNav = () => {
        const sideNav = document.querySelector('.nav');
        sideNav.style.left = '-70%'
      }
   
    
    return(
        <header className="bg-dark flex navbar" ref={navbar}>
            
            <div className="logo-div" >
                <Hamburger reveal={revealSideNav}/>
                    
                <NavLink to="/" exact activeClassName="">
                    <h2>Logo</h2>
                </NavLink>
            </div>
            

            <nav className="flex nav" >
                <Exit color="#FFF" hide={hideSideNav}/>

                <h2>
                    <NavLink to="/" exact activeClassName="" onClick={() => hideSideNav()}> Logo </NavLink>
                </h2>

                <ul className="navbar-links" onClick={() => hideSideNav()}>
                    <li>
                        <NavLink to="/" exact activeClassName="active" className="home-link"> Home </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" activeClassName="active" className="about-link"> About </NavLink> 
                    </li>

                    <li>
                        <NavLink to="/programs" activeClassName="active" className="programs-link"> Programs </NavLink> 
                    </li>

                    <li>
                        <NavLink to="/blogs"  activeClassName="active" className="blogs-link"> Blog </NavLink> 
                    </li>

                    <li>
                        <NavLink to="/contact"  activeClassName="active" className="contact-link"> Contact </NavLink> 
                    </li>
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