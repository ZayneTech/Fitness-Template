import React, {useState, createContext } from 'react';


export const locationContext = createContext();


export const LocationProvider = (props) => {

    const [location, setLocation] = useState('/');

    return (
        <locationContext.Provider value={[location, setLocation]}>
            {props.children}
        </locationContext.Provider>
    )
}
