import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddPage from '../components/admin/admin-add-page';
import AdminStatistics from '../components/admin/admin-statistics-page';

const Admin = () => {

   const adminScroll = (int, link) => {
        const adminContainer = document.querySelector('.admin-container');
        /* Initialize links to change color */
        const activeLink = document.querySelector('.active-link');
        const newActiveLink = document.querySelector(`#${link}`);

        /* Vertical and Horizontal Scroll */
        let verticalScroll = adminContainer.clientHeight * int;
        let horizontalScroll = adminContainer.clientWidth * int;

        adminContainer.scroll({
            top: verticalScroll,
            left: horizontalScroll,
            behavior: 'smooth'
        })

        /*set active link color */
        activeLink.classList.remove('active-link')
        newActiveLink.classList.add('active-link');
   }

   const style = {
        position: 'fixed',
        top: '7.5%',
        left: '2.5vw',
        width: '95vw',
        height: '30%',
        background: 'white',
   }
  
   const [isOpen, setIsOpen] = useState({
       line: false,
       doughnut: false
   })

    return(
        <div className="container">

            <main className="admin-main">
                <section className="admin-sidenav">
                    <ul>
                       <li> <Link to="#" id="admin-home" onClick={() => adminScroll(0, "admin-home")} className="active-link">  Home </Link> </li>
                       <li> <Link to="#Statistics"  id="admin-statistics" onClick={() => adminScroll(1, "admin-statistics")} className=""> Statistics  </Link></li>
                       <li> <Link to="#settings" id="admin-settings" onClick={() => adminScroll(2, "admin-settings")} className=""> Settings </Link> </li>
                    </ul>
                </section>

                <section className="admin-container">

                    {/*Admin Home Section */}

                    <AddPage />

                    {/*Admin Statistics Section */}

                   <AdminStatistics />

                    {/*Admin Settings Section */}

                    <section className="admin-page">
                        <div className="admin-settings"> 
                                <div className="admin-details">
                                    <h4>Username:</h4>
                                    <h3>Dylan Moreau</h3>
                                </div>

                                <div className="admin-details">
                                    <h4>Email:</h4>
                                    <h3>zaynetechnologies@gmail.com</h3>
                                </div>

                                <div className="admin-details">
                                    <h4>Password:</h4>
                                    <button className="button">Change Password</button>
                                </div>

                                <div className="admin-details">
                                <h3>Change Info </h3>
                                        {/* Make a multi-step form
                                            1. password confirmation
                                            2. fields with edit button
                                            3. reveal input field?
                                        
                                        */}

                                        {/* filler form */}
                                <form>
                                    <input type="text" name="username" placeholder="Username"/>
                                    <input type="email" name="email" placeholder="Email"/>
                                    <button className="button">Submit</button>
                                </form>
                              </div>
                            </div>
                        

                            <div className="admin-settings">
                            
                                <div className="admin-details">
                                    <h3>Admins</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Admin</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Dylan Moreau</td>
                                                <td>Super Admin</td>
                                            </tr>
                                            <tr>
                                                <td>Other Admin</td>
                                                <td><button className="button">Remove</button></td>
                                            </tr>
                                            <tr>
                                                <td>Other Admin</td>
                                                <td><button className="button">Remove</button></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                
                                </div>
                            </div>

                            {/* <div className="admin-settings">
                                <div className="admin-details">
                                    <h3>Active Codes</h3>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Code</th>
                                                <th>Discount</th>
                                                <th className="until-column">Until</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>Batman</td>
                                                <td>20%</td>
                                                <td className="until-column">12/26/25</td>
                                            </tr>
                                            <tr>
                                                <td>Batman</td>
                                                <td>20%</td>
                                                <td className="until-column">12/26/25</td>
                                            </tr>
                                            <tr>
                                                <td>Batman</td>
                                                <td>20%</td>
                                                <td className="until-column">12/26/25</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> */}

                        

                    </section>
                  
                </section>
                
            </main>
            
        </div>
)}

export default Admin;