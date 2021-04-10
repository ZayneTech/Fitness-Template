import React, { useContext, useEffect, useRef, useState} from 'react';
import { scrollContext} from '../context/scroll-context';
import { Link } from 'react-router-dom';
import {Instagram, Twitter, Youtube, Cart, Hamburger, Exit} from '../components/svgs';
import '../assets/stylesheets/navbar.css';

const Navbar = () => {
    /* scroll context and states */
    const [scrollPos] = useContext(scrollContext);
    const [prevScrollPos, setPrevScrollPos] = useState(scrollPos);

    const navbar = useRef();

    useEffect(() => {
        if(prevScrollPos >= scrollPos) {
            navbar.current.style.top = '0'
        } else {
            navbar.current.style.top = '-70px'
        }
        setPrevScrollPos(scrollPos)
     }, [scrollPos])
   

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

                <ul>
                    <li className="active"><Link to="/"> Home </Link></li>
                    <li> <Link to="/about">About</Link> </li>
                    <li> <Link to="/programs">Programs</Link> </li>
                    <li> <Link to="/blogs">Blog</Link> </li>
                    <li> <Link to="contact">Contact</Link> </li>
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