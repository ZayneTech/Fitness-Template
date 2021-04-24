import React, {useState} from 'react';
import { Plus } from '../svgs.js';
import NewProgram from './add-new-program';


const AddPage = () => {

    const [programform, setProgramForm] = useState(false);
    const [blogForm, setblogForm] = useState(false);
    const [adminForm, setAdminForm] = useState(false);

    const openModal = () => {
        setProgramForm(prev => !prev)
        document.body.style.overflow = 'hidden';
    }

    return(
        <section className="admin-page" >
            {programform ? <NewProgram setProgramForm={setProgramForm}/> : ''}

            <div className="admin-add light" tabIndex="0" onClick={() => openModal()}>
                <Plus />
                <p>Add New Program</p>
            </div>

            <div className="admin-add light" tabIndex="0">
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