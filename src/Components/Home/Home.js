import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css';
import homeSVG from '../../SVG/1.svg'
const Home = () => {
    return (
        <div className="home">
            <div className="homeContainer">
                <div className="left_container">
                    <h1>Smart Ideas For Your Brand Are Here.</h1>
                    <p>HeyLead is all about leading generation and helping small businesses grow through digital marketing services and technologies.</p>
                    <NavLink className="button" to="/getStarted">Get Started</NavLink>
                </div>
                <div className="right_container">
                    <img src={homeSVG} alt="SVG"/>
                </div>
            </div>

            <div className="bottom">
                <div className="bottom_headerContainer">

                    <img src="https://katteand.co/wp-content/uploads/2019/05/Accreds-website-FB-Marketing-Partner.png" alt="logo"/>

                    <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2017/04/bing-ads.png" alt="logo"/>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztYRu52LhGGjcSuUTLNQf3pRr945A0hTX3N6rOdI50H22b9cDvynepkmprrQEDNefQg&usqp=CAU" alt="logo"/>


                    <img src="https://logosrated.net/wp-content/uploads/parser/Yahoo-Search-Marketing-Logo-1.png" alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default Home
