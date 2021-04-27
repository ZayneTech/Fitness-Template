import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AddPage from '../components/admin/admin-home-page';
import AdminStatistics from '../components/admin/admin-statistics-page';

const Admin = () => {


const [currentPos, setCurrentPos] = useState(0);


/*fix scroll position on screen resize */
window.onresize = () => {
    const adminContainer = document.querySelector('.admin-container');
    let verticalScroll = adminContainer.clientHeight * currentPos;
    let horizontalScroll = adminContainer.clientWidth * currentPos;
    adminContainer.scroll({
        left: horizontalScroll,
        top: verticalScroll,
        behavior: 'smooth'
    ,})
}

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

        /*current position */
        setCurrentPos(int);
   }

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

                        <div className="admin-details text-center" id="admin-account">
                                <h3>Your Account</h3> 

                                <div className="admin-info">
                                    <h4>Username</h4>
                                    <h4>Dylan Moreau</h4>
                                </div>

                                <div className="admin-info">
                                    <h4>Email</h4>
                                    <h4>zaynetechnologies@gmail.com</h4>
                                </div>
                                <div className="admin-info">
                                    <h4>Password</h4>
                                    <button className="button">Change Password</button>
                                </div>
                                <div className="admin-info">
                                    <h4 id="other">Other Settings</h4>
                                </div>
                        </div> 

                        <div className="table-container">
                        <div className="admin-details text-center">
                            <h3> The Team </h3>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Role</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Dylan Moreau</td>
                                        <td>Super Admin</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Other Admin</td>
                                        <td> Admin </td>
                                        <td><button  className="button">Remove</button></td>
                                    </tr>
                                    <tr>
                                        <td>Other Admin</td>
                                        <td> Admin </td>
                                        <td><button className="button">Remove</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="admin-details text-center">
                                <h3>Discount codes</h3>

                                <table>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Discount</th>
                                            <th>Expires</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>batman</td>
                                            <td>20%</td>
                                            <td>12/26/25</td>
                                        </tr>
                                        <tr>
                                            <td>flash</td>
                                            <td>15%</td>
                                            <td>12/26/22</td>
                                        </tr>
                                        <tr>
                                            <td>superman</td>
                                            <td>10%</td>
                                            <td>12/26/28</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </section>
                  
                </section>
                
            </main>
            
        </div>
)}

export default Admin;