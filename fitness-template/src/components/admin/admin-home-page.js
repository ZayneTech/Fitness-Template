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


            <div className="adminHome adminHome--programs">
               <h2 className="adminHome__h2 text-center">Programs</h2>
                <div className="adminHome__contentContainer">

                    <div className="adminHome__content adminHome__content--padding">
                            <p><span className="adminHome__contentSpan">Programs Uploaded:</span> 2</p>
                    </div>

                    <div className="adminHome__content adminHome__content--padding">
                        <p><span className="adminHome__contentSpan">Total Sales: </span> 243</p>
                        <p><span className="adminHome__contentSpan">Total Profits: </span> $8230</p>
                        <p>
                            <span className="adminHome__contentSpan">Top Selling Program: </span> 

                            <ul className="indent">
                                <li><span className="adminHome__contentSpan">Name: </span> Calisthenics</li>
                                <li><span className="adminHome__contentSpan">Copies Sold: </span> 173</li>
                                <li><span className="adminHome__contentSpan">Profit: </span> $6740</li>
                            </ul>
                        </p>
                    </div>
               </div>
               
                <div className="adminHome__content adminHome__container">
                        <div className="adminHome__actions">
                            <Plus />
                            <p>Add Program</p>
                        </div>
                        <div className="adminHome__actions">
                            <Plus />
                            <p>Edit Program</p>
                        </div>
                    </div>
               </div>
            

            <div className="adminHome adminHome--blogs ">
                <h2 className="adminHome__h2 text-center">Blogs</h2>


                <div className="adminHome__contentContainer">
                    <div className="adminHome__content adminHome__content--padding">
                        <p><span className="adminHome__contentSpan">Blogs Uploaded</span>: 9</p>
                    </div>

                    <div className="adminHome__content adminHome__content--padding">
                        <p><span className="adminHome__contentSpan">Most Viewed:</span> Gym's During Covid-19</p>
                        <p><span className="adminHome__contentSpan">Number of Views:</span> 512</p>
                    </div>

               </div>
            
            
                    <div className="adminHome__content adminHome__container">
                        <div className="adminHome__actions">
                            <Plus />
                            <p>Add Blog</p>
                        </div>
                        <div className="adminHome__actions">
                            <Plus />
                            <p>Edit Blog</p>
                        </div>
                    </div>
            </div>

            <div className="adminHome adminHome--admins">
                <h2 className=" adminHome__h2 text-center">Admins</h2>

                <div className="adminHome__contentContainer">
                    <div className="adminHome__content adminHome__content--padding">
                        <p><span className="adminHome__contentSpan">Super Admin:</span> Dylan Moreau</p>
                    </div>

                    <div className="adminHome__content adminHome__content--padding">
                        <p><span className="adminHome__contentSpan">Number of Admins:</span> 4</p>
                    </div>
                </div>

                    <div className="adminHome__content adminHome__container">
                        <div className="adminHome__actions">
                            <Plus />
                            <p>Add Admin</p>
                        </div>
                    </div>
                
            </div>
            

            {/* <div className="admin-add light" tabIndex="0" onClick={() => openModal(setProgramForm)}>
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
            </div> */}
        </section>
    )
}


export default AddPage;