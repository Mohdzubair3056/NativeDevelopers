import React from 'react'
import './blogsCard.css'

const BlogsCard = ({img, heading, desc}) => {
    return (
        <div className="blogsCard">
            <img className="img" src={img} alt="icon"/>
            <div className="body">
                <h3>{heading}</h3>
                <p className="desc">{desc}<br/><span className="arrow">→</span></p>
            </div>
        </div>
    )
}

export default BlogsCard
