import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DoughnutChart from '../components/doughnut-chart';
import LineChart from '../components/line-chart';
import { Plus } from '../components/svgs';
import TopSelling from '../components/top-selling-chart';

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
        top: '10%',
        left: '5%',
        width: '90%',
        height: '35%',
        background: 'white'
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
                       <li> <Link to="#program"  id="admin-programs" onClick={() => adminScroll(1, "admin-programs")} className=""> Programs  </Link></li>
                       <li> <Link to="#blogs" id="admin-blogs" onClick={() => adminScroll(2, "admin-blogs")} className=""> Blogs </Link> </li>
                       <li> <Link to="#settings" id="admin-settings" onClick={() => adminScroll(3, "admin-settings")} className=""> Admin </Link> </li>
                    </ul>
                </section>

                <section className="admin-container">

                    {/*Admin Home Section */}

                    <section className="admin-page" >
                        <div className="admin-add light" tabIndex="0">
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

                    {/*Admin Programs Section */}

                    <section className="admin-page">
                        <div className="admin-programs">
                            <div className="program-stats">
                                <div className="program-chart" 
                                    // style={window.innerWidth < 768 && isOpen.line ? style : {}} 
                                    // onClick={() => setIsOpen(prev => ({...prev, line: !prev.line})  )}
                                >
                                    <LineChart/>
                                </div>

                                <div className="program-chart"
                                    // style={window.innerWidth < 768 && isOpen.doughnut ? style : {}} 
                                    // onClick={() => setIsOpen(prev => ({...prev, doughnut: !prev.doughnut})  )}
                                    >
                                    <DoughnutChart />
                                </div>
                            </div>

                            <div className="top-selling">
                                <h3>Top Selling Program</h3>

                                <div className="top-selling-stats">
                                    <div className="top-stat" id="top-program-name">
                                        <h4>Program Name: </h4>
                                        <h3>Full Body Split</h3>
                                    </div>
                                    <div className="top-stat">
                                        <h4> Amount Sold: </h4>
                                        <h3> 1,000 </h3>
                                        <div className="stat-chart">
                                            <TopSelling />
                                        </div>
                                    </div>
                                    <div className="top-stat">
                                        <h4>Profits Earned: </h4>
                                        <h3>$10,000</h3>
                                    </div>
                                    <div className="top-stat">
                                        <h4> Monthly Earnings </h4>
                                        <h3> $250</h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    {/*Admin Blogs Section */}

                    <section className="admin-page">
                        <div className="admin-add light" >
                            <Plus />
                            <p>Add New Program</p>
                        </div>
                        <div className="admin-add light" >
                            <Plus />
                            <p>Add New Blog</p>
                        </div>
                        <div className="admin-add light" >
                            <Plus />
                            <p>Add New Admin</p>
                        </div>
                    </section>

                    {/*Admin Settings Section */}

                    <section className="admin-page">
                        <div className="admin-add light" >
                            <Plus />
                            <p>Add New Program</p>
                        </div>
                        <div className="admin-add light" >
                            <Plus />
                            <p>Add New Blog</p>
                        </div>
                        <div className="admin-add light" >
                            <Plus />
                            <p>Add New Admin</p>
                        </div>
                    </section>
                  
                </section>
                
            </main>
            
        </div>
)}

export default Admin;