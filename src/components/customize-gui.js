import React, { useContext, useEffect, useState } from 'react';
import { websiteContext } from '../context/website-context';
import '../assets/stylesheets/gui.css'



const GUI = () => {

    /* gui open and closed */
    const [gui, setGui] = useState(false);

    useEffect(() => {
        guiToggle()
    }, [gui])

    const guiToggle = () => {
        const guicontainer = document.querySelector('.gui-container'); 

        if (window.innerWidth < 768) {
            if (gui === true) {
                guicontainer.style.width = '250px'
                guicontainer.style.height = '425px'
                guicontainer.style.borderRadius = '5px';
                guicontainer.style.flexDirection = "column-reverse"
                guicontainer.style.background = "#1a1a1a"
            } else {
                guicontainer.style.width = '45px'
                guicontainer.style.height = '45px'
                guicontainer.style.borderRadius = '50%';
                guicontainer.style.flexDirection = "column"
                guicontainer.style.background = "var(--clr-accent)"
            }
        } else {
            if (gui === true) {
                guicontainer.style.height = '450px'
                guicontainer.style.borderRadius = '5px';
                guicontainer.style.flexDirection = "column-reverse"
                guicontainer.style.background = "#1a1a1a"
            } else {
                guicontainer.style.height = '40px'
                guicontainer.style.borderRadius = '5px';
                guicontainer.style.flexDirection = "column"
                guicontainer.style.background = "var(--clr-accent)"
            }
    }
    }

    /*HomePage Builder */
    const [homePageBuild, setHomePageBuild] = useContext(websiteContext);


    useEffect(() => {
        console.log(homePageBuild)
    }, [homePageBuild])

    return(

        <div className="gui-container" >
            {window.innerWidth > 768 ? 
                <div className="gui-toggle" onClick={() => setGui(prev => !prev)}> <p>{gui ? 'Close' : 'Customize' }</p> </div>
                : <div className="gui-toggle" onClick={() => setGui(prev => !prev)}> <p>{gui ? 'Close' : 'Open' }</p> </div>
            }

            {gui ? 
                <div className="gui-fields"> 
                    <div className="gui-field"> 
                        <p>Programs</p>
                        <div className="gui-options">
                            <button className="active-button" onClick={() => setHomePageBuild(prev => ({...prev, programs: {default: true, v2: false }}))}>Default</button>
                            <button onClick={() => setHomePageBuild(prev => ({...prev, programs: {default: false, v2: true }}))}>V2</button>
                        </div> 
                    </div>

                    <div className="gui-field"> 
                        <p>Gallery</p>
                        <div className="gui-options">
                            <button className="active-button" onClick={() => setHomePageBuild(prev => ({...prev, gallery: {default: true, v2: false }}))}>Default</button>
                            <button onClick={() => setHomePageBuild(prev => ({...prev, gallery: {default: false, v2: true }}))}>V2</button>
                        </div> 
                    </div>

                    <div className="gui-field">
                        <p>Posts</p>
                        <div className="gui-options">
                            <button className="active-button" onClick={() => setHomePageBuild(prev => ({...prev, posts: {default: true, v2: false }}))}>Default</button>
                            <button onClick={() => setHomePageBuild(prev => ({...prev, posts: {default: false, v2: true }}))}>V2</button>
                        </div> 
                    </div>

                    <div className="gui-field">
                        <p> About </p>
                        <div className="gui-options">
                            <button className="active-button" onClick={() => setHomePageBuild(prev => ({...prev, about: {default: true, v2: false }}))}>Default</button>
                            <button onClick={() => setHomePageBuild(prev => ({...prev, about: {default: false, v2: true }}))}>V2</button>
                        </div> 
                    </div>
                </div>
                 : ''
            }
        </div>
    )
}


export default GUI;


