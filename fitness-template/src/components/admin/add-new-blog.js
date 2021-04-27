import React, {useState} from 'react';
import axios from 'axios';



const NewBlog = ({setBlogForm}) => {

    const [blog, setBlog] = useState({
        title: '',
        summary: '',
        content: '',
        thumbnail: {}
    })


    /* handle input changes: text fields */
    const handleChange = ({target}) => {
        const {name, value} = target;

        setBlog(prev => ({...prev, [name]: value}))
    }

    /* handle input changes: file fields */
    const handleFiles = ({target}) => {
        setBlog(prev => ({...prev, thumbnail: target.files[0]}))
    }

    /* handle form submit */
    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append('title', blog.title)
        formData.append('summary', blog.summary)
        formData.append('content', blog.content)
        formData.append('thumbnail', blog.thumbnail)

        axios.post('http://localhost:5000/blogs/add', formData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))


        setBlog({
            title: '',
            summary: '',
            content: '',
            thumbnail: {}
        })

    }

    /* close blog form modal */
    const closeModal = ({target}) => {
        const formBackground = document.querySelector('.form-wrapper');

        if(target !== formBackground) { return }

        setBlogForm(false)
    }

    return(
        <div className="form-wrapper" onClick={(e) => closeModal(e)}>
            <form className="add-new-form" onSubmit={(e) => handleSubmit(e)}>
                <div className="form-header">
                    <h3>Add New Blog</h3>
                </div>

                <button className="close-modal-button" onClick={() => setBlogForm(false)}> 
                    Close 
                </button>

                <div className="input-field">
                    <label name="title">Blog Title</label>
                    <input 
                        id="title"
                        type="text" 
                        name="title" 
                        value={blog.title} 
                        onChange={(e) => handleChange(e)}
                        required
                    />
                </div>

                <div className="input-field">
                    <label name="summary">Summary</label>
                    <textarea
                        id="summary"
                        name="summary" 
                        maxLength="120"
                        value={blog.summary} 
                        onChange={(e) => handleChange(e)}
                        required
                    /> 
                </div>

                <div className="input-field">
                    <label name="content">Content</label>
                    <textarea
                        id="content"
                        name="content" 
                        value={blog.content} 
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
                            { !blog.thumbnail.name ? 
                              'Upload Thumbnail Image' :
                               blog.thumbnail.name 
                            }
                        </span>
                    </label>
                </div>

                <div className="input-field">
                    <button type="submit" className="button">Submit </button>
                </div>

            </form>
        </div>
    )
}

export default NewBlog;