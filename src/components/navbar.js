import React from 'react';
import { Link } from 'react-router-dom';
import {Instagram, Twitter, Youtube, Cart, Hamburger, Exit} from '../components/svgs';
import '../assets/stylesheets/navbar.css';

const Navbar = () => {
    return(
        <header className="bg-dark flex navbar">
            
                <div className="logo-div">
                    <Hamburger />
                    
                    <Link to="/">
                        <h2>Logo</h2>
                    </Link>
                </div>
            

            <nav className="flex">
                <Exit />
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

                <Cart />
            </div>
        </header>
    )
}



export default Navbar;