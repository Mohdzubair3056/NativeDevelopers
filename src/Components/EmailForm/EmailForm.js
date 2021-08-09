import React from 'react'
import { NavLink } from 'react-router-dom';
import './EmailForm.css';

const EmailForm = () => {
    return (
        <div className="emailForm">
            <div className="emailFormTop">
                <h1>Subscribe To Get The Latest News About Us</h1>
                <p>We recommend you to subscribe to our newspaper, drop your email below to get daily update about us</p>
            </div>
            <div className="emailFormBottom">
                <div className="email">
                    <input type="email" placeholder="Enter Your Email"/>
                    <NavLink className="button" to='#'>Subcribe</NavLink>
                </div>
            </div>
        </div>
    )
}

export default EmailForm
