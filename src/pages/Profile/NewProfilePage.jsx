import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./ProfilePage.css"

function NewProfilePage (){
    const [profile, setProfile] = useState ({user:{
        collaborators:["user1","user2","user3","user2","user3","user2","user3","user2","user3","user2","user3","user2","user3"]
    }
    })
    const [socials, setSocials] = useState([{site:"linkedin"},{site:"instagram"},{site:"twitter"}])
    const [currProj, setCurrProj] = useState({
        projName:"Cool Project",
        collabs: ["user1","user1","user1","user1","user1","user1","user1","user1","user1","user1","user1","user1"],
        tools:["tool1","tool1","tool1","tool1","tool1","tool1","tool1","tool1","tool1","tool1","tool1","tool1","tool1","tool1"],
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate tellus quis tortor mollis, ut lacinia velit pellentesque. Morbi posuere turpis at dolor volutpat, nec finibus eros tristique. Aenean id metus id ipsum pharetra cursus ac vitae mi. Suspendisse potenti. Morbi eget risus nulla. Curabitur euismod convallis tristique. Pellentesque rutrum libero aliquam, aliquam massa id, consequat erat. Quisque ante metus, imperdiet nec mauris in, semper mollis nulla."
    })


    return (
    <div>
        <div className="closediv"><div className="ProfilePic">image</div></div>
        <div className="ProfileBio">Biography</div>
        <div className="PortfolioButton">Portfolio</div>
        <div className="Socials"> {socials.map((item, i)=>(
            <div className={item.site} ></div>
        ))}</div>
        <div>I have worked with</div>
        <div className="Collaborators">
            
            {profile.user.collaborators.map((users,itr)=>(
            <div className="collab_user">{users}</div>
            )
        )}</div>

        <div className="BottomProfPage">
            <div className="ProjectStatus">
                <div className="ProjectStatusSub">Rating</div>
                <div className="ProjectStatusSub">Live Project</div>
                <div className="ProjectStatusSub">Super Level</div>
                <div className="ProjectStatusSub">Projects Complete</div>
                
            </div>
            <div className="CurrentProject">
                Current Project
                <div className="ProjectInfo">
                    <div className="ProjectCollaborators">{currProj.collabs.map((coll,itr)=>(<div className="Project_collab_user">
                        {coll}
                    </div>))}</div>
                    <div className="ProjectBio">{currProj.description}</div>
                    Tools and Skills
                    <div className="ProjectTools">{currProj.tools.map((tool,itr)=>(<div className="ProjectTools_tool">{tool}</div>))}</div>
                </div>
            </div>
        </div>



    </div>
    )
}

export default NewProfilePage;