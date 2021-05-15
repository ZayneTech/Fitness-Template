import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import loader from '../../assets/svgs/loader.svg';
import edit from '../../assets/svgs/edit.svg'
import { Edit, Loader } from '../svgs';



const AdminProgramsList = () => {

    /* Set States */
    const [programs, setPrograms] = useState([]);
    const [images, setImages] = useState([])
    const [loaded, setLoaded] = useState(false);


    /* Step 4: Map Over Programs to GET images */
    const fetchThumbnails = async (programsArray) => {
        try {
            programsArray.map(async (program) => {
                const url = `http://localhost:5000/uploads/${program.thumbnail}`;

                const getData = await axios.get(url, {responseType: 'blob'});

                setImages(prev => ({...prev, [program.name]: getData.data}))
            })

        } catch (err) {
            console.log(err)
        }
    }

   /* Step 3: -- Get Program Data */
   const fetchPrograms = async () => {
        try{

            const url = 'http://localhost:5000/programs';
            const getPrograms = await axios.get(url);

            setPrograms(getPrograms.data)
            return getPrograms.data
        } catch (err) {
            console.log(err)
        }
    }

    /* Step 2: Call Async Functions to GET data and set Loaded State once finished */
    const fetchData = async () => {
        try {
        const getProgramData = await fetchPrograms();
        const getThumbnailData = await fetchThumbnails(getProgramData);
        setLoaded(true)
        } catch (err) {
            console.log(err)
        }
    }

    /* Step 1: Call Function to Start Fetching Process */ 
    useEffect(() => {
      fetchData()
    }, [])

    return(
        // change form-wrapper class to something less specific
         <div className="form-wrapper"> 
            <button className="close-modal-button" > 
                    Close 
            </button> 
            <main className="programs-container">
                {loaded === false 
                    ? 
                    <div className="text-center">
                        <h1> Data Loading </h1>
                        <div className="programCard__loader">
                            <Loader color="#000"/>
                        </div>
                    </div>
                    : 
                    <div className="programList">
                        <h1 className="text-center">Choose a Program </h1>
                        {programs.length === 0 
                            ? <h2>No Programs Available</h2> 
                            : <div className="programWrapper" >
                                {programs.map(program => (
                                    
                                    <div key={program._id} className="programCard programCard--light">
                                        <Link to={`/programs/${program._id}`} >
                                        <div className="programCard__overlay img-overlay-darkest"> </div>
                                        {!images[program.name] || images.length === 0 
                                            ? <div className="programCard__loader">
                                                <Loader color="#000"/>
                                            </div>
                                            
                                            : 
                                            <img 
                                                className="programCard__img" 
                                                src={URL.createObjectURL(images[program.name])} 
                                            />
                                            
                                        }
                                    <header className="programCard__header flex">
                                        <h2 className="programCard__name">{program.name}</h2>
                                        <p className="programCard__created">Last Updated: <span>{program.updatedAt.split('T')[0]}</span></p>
                                    </header>
                                    {/* 
                                    <div className="programCard__content">
                                        <p className="programCard__description">{program.description}</p>
                                        <button className="button programCard__button"> Edit </button>
                                    </div> */}
                                        </Link>
                                    </div>
                                    
                                ))}
                        </div>
}

                    </div>
                        
                }

            </main>
            
        </div>
    )
}





export default AdminProgramsList;