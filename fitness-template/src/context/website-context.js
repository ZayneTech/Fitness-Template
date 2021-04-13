import { buildQueries } from '@testing-library/dom';
import React, {useState, createContext} from 'react';



export const websiteContext = createContext();



export const WebsiteProvider = (props) => {

    /*customize homepage */
    const [homePageBuild, setHomePageBuild] = useState({
        programs: {default: true, v2: false},
        gallery: {default: true, v2: false},
        posts: {default: true, v2: false},
        about: {default: true, v2: false}
    })

    return(
        <websiteContext.Provider value={[homePageBuild, setHomePageBuild]}>
            {props.children}
        </websiteContext.Provider>
    )
}