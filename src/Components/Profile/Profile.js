import React from 'react'
import maleAvatar from '../../SVG/male_avatar.svg'
import femaleAvatar from '../../SVG/female_avatar.svg'
import './Profile.css';

const Profile = (props) => {
    return (
        props.avatar === "maleAvatar" ? 
            <div id="profile">
                <img className="maleImg" src={maleAvatar} alt=""/>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.position}</p>
                </div>
            </div>
                : 
            <div className="profile">
                <img className="femaleImg" src={femaleAvatar} alt=""/>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.position}</p>
                </div>
            </div>
        
    )
}

export default Profile
