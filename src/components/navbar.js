import React from 'react';
import { Link } from 'react-router-dom';
import {Instagram, Twitter, Youtube, Cart, Hamburger, Exit} from '../components/svgs';
import '../assets/stylesheets/navbar.css';

const Navbar = () => {
    return(
        <header className="bg-dark flex navbar">
            <div className="logo-div">
                <Hamburger />
                <h2>Logo</h2>
            </div>

            <nav className="flex">
                <Exit />
                <h2>Logo</h2>

                <ul>
                    <li className="active">Home</li>
                    <li>About</li>
                    <li>Programs</li>
                    <li>Blog</li>
                    <li>Contact</li>
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