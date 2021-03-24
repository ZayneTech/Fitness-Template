import React, {createContext, useState} from 'react';


export const scrollContext = createContext();


export const ScrollProvider = (props) => {
    const [scrollPos, setScrollPos] = useState(0);

    window.addEventListener('scroll', () => {
        setScrollPos(window.scrollY);
    })

    return(
        <scrollContext.Provider value={scrollPos}>
            {props.children}
        </scrollContext.Provider>
    )
}
