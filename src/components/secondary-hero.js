import React, {useState} from 'react';
import '../assets/stylesheets/about.css'


const SecondaryHero = ({thePage}) => {

    const [page, setPage] = useState(thePage);

    return(
    <section className="container">
        <div className="hero-img" id={`${page}-hero`}>
            <div className="img-overlay-dark"></div>
            <h1>{page}</h1>
        </div>
    </section>
    )
}





export default SecondaryHero;