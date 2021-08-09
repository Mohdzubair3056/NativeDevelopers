import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import fb from '../../Images/fb.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLeft">
                <div>
                    <div className="heyLead">
                        <h1>Hey<span className="highlight">Lead</span></h1>
                        <p>HeyLead is all about leading generation and helping small businesses grow through digital marketing services and technologies.</p>
                        <div className="boxHor">
                            <NavLink to='#'>
                                <img className="fb" src={fb} alt=""/>
                            </NavLink>
                            <NavLink to='#'>
                                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt=""/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerRight">
                <div className="footerAbout">
                    <h2>About</h2>
                    <NavLink className="aboutLinks" to="#">Who are we?</NavLink>
                    <NavLink className="aboutLinks" to="#">Terms and conditions</NavLink>
                    <NavLink className="aboutLinks" to="#">Privacy Policy</NavLink>
                    <NavLink className="aboutLinks" to="#">Sitemap</NavLink>
                </div>
                <div className="footerContact">
                    <h2>Contact</h2>
                    <div className="box">
                        <img src="https://www.freeiconspng.com/thumbs/location-icon-png/location-icon-map-png--1.png" alt=""/>
                        <p>3729 Southern Avenue <br/>Des Moines, IA 50309</p>
                    </div>
                    <div className="box">
                        <img src="http://assets.stickpng.com/images/584856b4e0bb315b0f7675ac.png" alt=""/>
                        <p>imfo@heylead.com</p>
                    </div>
                    <div className="box">
                        <img src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png" alt=""/>
                        <p>(415) 857-5323</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
