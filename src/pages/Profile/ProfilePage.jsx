import React from "react";
import { useState } from "react";

function ProfilePage (){

    const [profileInfo, setProfileInfo] = useState({name:"",username:"",bday:"",skills:["skill1","skill2"]})

    const handleChange =({ currentTarget: input}) => {
        setProfileInfo({...profileInfo,[input.name]:input.value})
    }

    const toggleEdit =(target) =>{
        console.log(target.nativeEvent.target.parentElement)
    }

    return (
    <div className="Profile-Page">
        <div className="Profile-info">
            <div id="profileName">Name : {profileInfo.name} <input
            
            type="text" 
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={profileInfo.name}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>
                        <div id="profileName">Username : {profileInfo.username} <input
            
            type="text" 
            placeholder="username"
            name="username"
            onChange={handleChange}
            value={profileInfo.username}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>
                        <div id="profileName">Birthday : {profileInfo.bday} <input
            
            type="text" 
            placeholder="Birthday"
            name="bday"
            onChange={handleChange}
            value={profileInfo.bday}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>
                        <div id="profileName">Skills : {profileInfo.skills} <input
            
            type="text" 
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={profileInfo.skills[profileInfo.skills.length-1]}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>


        </div>


    </div>)

}

export default ProfilePage;
