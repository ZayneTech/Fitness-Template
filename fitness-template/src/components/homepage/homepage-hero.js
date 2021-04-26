import React from 'react';
import '../../assets/stylesheets/homepage.css';

const HomepageHero = () => {

    const motivationalBoxStyle = {
        backgroundColor: 'rgba(0, 0, 0, .35)',
        color: '#FFF'
    }

    const heroTextStyle = {
        color: '#BA1B1B'
    }

    return(
        <section className="container">
            <div className="homepage-hero bg-dark">
                <div className="img-overlay-light"></div>
                <div className="hero-text content text-center">
                    <h1>Your Brand Text <span style={heroTextStyle}>Here </span></h1>
                </div>
                <div className="container hero-motivational-box text-center flex" style={motivationalBoxStyle}>
                    <h2>Challenge Your Limits</h2>
                </div>
            </div>
        </section>
    )
}


export default HomepageHero;