import React from 'react'
import Cards from '../Cards/Cards'
import blobSVG from '../../SVG/blob-3.svg';
import SocialMediaAdvertising from '../../Icons/seo.png';
import web from '../../Icons/web-programming.png';
import launch from '../../Icons/launch.png';
import analysis from '../../Icons/analysis.png'
import remarketing from '../../Icons/recycle.png';
import SEO from '../../Icons/seo-2.png';
import './Services.css';

const Services = () => {
    return (
        <div className="services">

            <img className="blobSVG" src={blobSVG} alt="Alt"/>

            <div className="services_body">
                <div className="container containerSpe">
                    <h1>What We DO</h1>
                    <Cards className="card" heading="Search Engine Optimisation (SEO)" desc="Hey lead is a team of dedicated and proactive SEO experts that can increae your search engine.." logo={SEO}/>
                </div>

                <div className="container">
                    <Cards className="card" heading="Search Engine Marketing (SEM)" desc="There were 3.5 Billion searches on google today. Did your advertisements reached the lights.." logo={analysis}/>

                    <Cards className="card" heading="Remarketing" desc="There were 3.5 Billion searches on google today. Did your advertisements reached the lights.." logo={remarketing}/>
                </div>

                <div className="container">
                    <Cards className="card" heading="Social Media Advertising" desc="Social Media is a critical way to earn and retain customers. HeyLead make sure your..." logo={SocialMediaAdvertising}/>

                    <Cards className="card" heading="Website Development & Optimisation" desc="We mix creativity with strategy to develop search engine optimiszed and user-friendly websites that..." logo={web}/>

                    <Cards className="card" heading="Reporting" desc="If you can't measure you can't improve. Mesurement and analytics will reveal the overall success of your.." logo={launch}/>
                </div>
            </div>

        </div>
    )
}

export default Services
