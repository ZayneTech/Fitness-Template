import React, {useState} from 'react';
import { Plus } from '../svgs.js';
import NewBlog from './add-new-blog.js';
import NewProgram from './add-new-program';
import AdminProgramsList from './programs-list'


const AddPage = () => {

    const [programform, setProgramForm] = useState(false);
    const [editProgram, setEditProgram] = useState(false);
    const [blogForm, setBlogForm] = useState(false);
    const [adminForm, setAdminForm] = useState(false);

    const openModal = (form) => {
        form(prev => !prev)
    }

    return(
        <section className="admin-page" >
            {programform ? <NewProgram setProgramForm={setProgramForm}/> : '' }
            { editProgram ? <AdminProgramsList /> : ''  }

            {blogForm ? <NewBlog setBlogForm={setBlogForm} /> : '' }


            {/* <div className="adminHome adminHome--programs">

            </div>

            <div className="adminHome adminHome--blogs">
                
            </div>

            <div className="adminHome adminHome--admins">
                
            </div> */}
            

            <div className="admin-add light" tabIndex="0" onClick={() => openModal(setProgramForm)}>
                <Plus />
                <p>Add New Program</p>
            </div>

            <div className="admin-add light" tabIndex="0" onClick={() => openModal(setBlogForm)}>
                <Plus />
                <p>Add New Blog</p>
            </div>

            <div className="admin-add light" tabIndex="0">
                <Plus />
                <p>Add New Admin</p>
            </div>
        </section>
    )
}


export default AddPage;