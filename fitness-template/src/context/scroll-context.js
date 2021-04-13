import React, {createContext, useState} from 'react';


export const scrollContext = createContext();


export const ScrollProvider = (props) => {
    const [scrollPos, setScrollPos] = useState(0);

    window.onscroll = () => {
        setScrollPos(window.pageYOffset);
    }

    return(
        <scrollContext.Provider value={[scrollPos]}>
            {props.children}
        </scrollContext.Provider>
    )
}
