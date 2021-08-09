import React from 'react'
import './Cards.css';


const Cards = ({heading, desc, logo}) => {
    return (
        <div className="card">
            <img className="icon" src={logo} alt="icon"/>
            <div className="body">
                <h3>{heading}</h3>
                <p className="desc">{desc}<br/><span className="arrow">→</span></p>
            </div>
        </div>
    )
}

export default Cards
