import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./ProfilePage.css"

function NewProfilePage (){
    const [profile, setProfile] = useState ({user:{
        collaborators:["user1","user2"]
    }
    })
    const [socials, setSocials] = useState(["linkedin","instagram","twitter"])


    return (
    <div>
        <div className="closediv"><div className="ProfilePic">image</div></div>
        <div className="ProfileBio">Biography</div>
        <div className="PortfolioButton">Portfolio</div>
        <div className="Socials"> {socials}</div>
        <div className="Collaborators">{profile.user.collaborators}</div>
        <div className="CurrentProject">
            <div className="ProjectStatus"></div>
            <div className="ProjectInfo">
                <div className="ProjectCollaborators"></div>
                <div className="ProjectBio"></div>
                <div className="ProjectTools"></div>
            </div>
        </div>



    </div>
    )
}

export default NewProfilePage;