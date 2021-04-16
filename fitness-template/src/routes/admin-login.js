import React from 'react';
import '../assets/stylesheets/admin.css';



const AdminLogin = () => {


    return(
    <div className="container">
        <main className="login-panel">
            <form className="login-form">
                <label name="username"> Username </label>
                <input type="text" name="username" placeholder="Username..."/>

                <label name="password" > Password </label>
                <input type="password" name="password" placeholder="Password..."/>

                <button className="login-button" type="submit" > Login </button>
            </form>
        </main>
    </div>
)}

export default AdminLogin;