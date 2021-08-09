import React from 'react'
import './Blogs.css'
import BlogsCard from './BlogsCard/BlogsCard'
import { blogsData } from '../../Data Files/Data';



const Blogs = () => {
    return (
        <div className="blogs">
            <h1>Latest Blogs</h1>
            <div className="blog">
                {blogsData.map((data) => {
                    return <BlogsCard img={data.img} heading={data.heading} desc={data.desc}/>
                })}
            </div>
        </div>
    )
}

export default Blogs
