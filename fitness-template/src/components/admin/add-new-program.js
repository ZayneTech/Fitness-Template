import React, {useState} from 'react'
import acios from 'axios';
import axios from 'axios';


const NewProgram = ({setProgramForm}) => {

    const [program, setProgram] = useState({
        name: '',
        description: '',
        about: '',
        difficulty: '50',
        thumbnail: {}
    })

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setProgram(prev => ({...prev, [name]: value}))
    }

    const handleFiles = (e) => {
        setProgram(prev => ({...prev, thumbnail: e.target.files[0]}))
    }

    const rangeValue = ({target}) => {
        const {name, value} = target;
        const rangeValue = document.querySelector('.range-value');
    
        setProgram(prev => ({...prev, [name]: value}))

        rangeValue.innerHTML = `${value}`
        rangeValue.style.width = `calc(${value}% + 5.5px)`
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();

        formData.append('name', program.name);
        formData.append('description', program.description);
        formData.append('about', program.about);
        formData.append('difficulty', program.difficulty);
        formData.append('thumbnail', program.thumbnail);

        axios.post('http://localhost:5000/programs/add', formData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

        setProgram({
            name: '',
            description: '',
            about: '',
            difficulty: '50',
            thumbnail: {}
        })
    }

    const closeModal = ({target}) => {
        const formBackground = document.querySelector('.form-wrapper');

        if(target !== formBackground) { return }

        document.body.style.overflow = 'auto';
        setProgramForm(false)
    }

    return(
        <div className="form-wrapper" onClick={(e) => closeModal(e)}>
            <form className="add-new-form" onSubmit={(e) => handleSubmit(e)} encType="multipart/form-data">

                <div className="form-header">
                    <h3>Add New Program</h3>
                </div>
                
                <div className="input-field">
                    <label name="name">Program Name</label>
                    <input
                        id="name"
                        type="text" 
                        name="name" 
                        value={program.name} 
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label name="description">Short Description</label>
                    <textarea
                        id="description"
                        name="description" 
                        maxLength="120"
                        value={program.description} 
                        onChange={(e) => handleChange(e)}
                        required
                    /> 
                </div>
                
                <div className="input-field">
                    <label name="about">About</label>
                    <textarea  
                        id="about"
                        name="about"
                        value={program.about} 
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label className="thumbnail">
                        <input 
                            name="thumbnail" 
                            id="thumbnail" 
                            type="file" 
                            onChange={(e) => handleFiles(e)}
                            required
                        />
                        <span className="thumbnail-custom">
                            { !program.thumbnail.name ? 
                              'Upload Thumbnail Image' :
                               program.thumbnail.name 
                            }
                        </span>
                    </label>
                </div>

                <div className="input-field difficulty" >
                    <label name="difficulty" >Diffculty Level</label>
                    <div className="range-value" style={{}}>
                        {program.difficulty}
                    </div>
                    <input 
                        id="difficulty"
                        name="difficulty"
                        type="range"
                        value={program.difficulty}
                        onChange={(e) => rangeValue(e)}
                    /> 
                </div>
                
                <div className="input-field">
                    <button type="submit" className="button">Submit </button>
                </div>

            </form>
        </div>
    )
}



export default NewProgram;