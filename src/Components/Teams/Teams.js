import React from 'react'
import Profile from '../Profile/Profile'
import blobSVG from '../../SVG/blob-2.svg';
import './Teams.css'

const Teams = () => {
    return (
        <div className="teams">

            <img className="blobSVG" src={blobSVG} alt="Alt"/>

            <div className="teamsBody">
                <div className="container1">
                    <h1>Our Team</h1>
                    <Profile avatar="maleAvatar" name="Martin" position="Co-Founder and Partner"/>
                    <Profile avatar="maleAvatar" name="Sean" position="Senior Developer"/>
                </div>

                <div className="container2">
                    <Profile id="profiles" avatar="femaleAvatar" name="Milena" position="Co-Founder and Partner"/>
                    <Profile id="profiles2" avatar="maleAvatar" name="Azeem" position="Web Developer"/>
                </div>

                <div className="container3">
                    <Profile avatar="maleAvatar" name="Ryan" position="Business Development"/>
                    <Profile avatar="femaleAvatar" name="Kathryn" position="Copywriter"/>
                </div>

                <div className="container4">
                    <Profile avatar="maleAvatar" name="Vaslil Savitski" position="Product Designer"/>
                    <Profile avatar="femaleAvatar" name="Julia" position="Senior Designer"/>
                    <Profile avatar="maleAvatar" name="Nani" position="Front End Web Developer"/>
                </div>
            </div>

        </div>
    )
}

export default Teams
