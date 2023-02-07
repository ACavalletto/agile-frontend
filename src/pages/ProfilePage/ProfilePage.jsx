import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom"


function ProfilePage (){

    const navigate = useNavigate()

    const [profileInfo, setProfileInfo] = useState(
        {
            name:"",
            username:"",
            bday:"",
            skills:"",
            profilePhoto:"",
            coverPhoto:"",
            preferedRole:"",
            experience:"",
            bio:"",
            socials:"",
            pastProjects:""

        })

    const handleChange =({ currentTarget: input}) => {
        setProfileInfo({...profileInfo,[input.name]:input.value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        console.log( "Sending Profile Data to save here")
        console.log(profileInfo)
        navigate("/")

    }

    const toggleEdit =(target) =>{
        console.log(target.nativeEvent.target.parentElement)
    }

    return (
    <div className="Profile-Page">
        <Link to="/">Home</Link>
        <form onSubmit={handleSubmit} className="Profile-info">
            <div id="profileName">
                Name : {profileInfo.name} 
                <input       
                    type="text" 
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    value={profileInfo.name}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileUserName">
                Username : {profileInfo.username}
                <input
                    type="text" 
                    placeholder="username"
                    name="username"
                    onChange={handleChange}
                    value={profileInfo.username}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileBirthday">
                Birthday : {profileInfo.bday} 
                <input          
                    type="date" 
                    placeholder="Birthday"
                    name="bday"
                    onChange={handleChange}
                    value={profileInfo.bday}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileSkills">
                Skills : {profileInfo.skills} 
                <input       
                    type="text" 
                    placeholder="Skills"
                    name="skills"
                    onChange={handleChange}
                    value={profileInfo.skills[profileInfo.skills.length-1]}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profilePhoto">
                Profile Photo : {profileInfo.profilePhoto} 
                <input
                    type="text" 
                    placeholder="Name"
                    name="profilePhoto"
                    onChange={handleChange}
                    value={profileInfo.profilePhoto}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileCover">
                Cover Photo : {profileInfo.coverPhoto} 
                <input    
                    type="text" 
                    placeholder="Cover Photo Link"
                    name="coverPhoto"
                    onChange={handleChange}
                    value={profileInfo.coverPhoto}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileRoles">
                Roles : {profileInfo.preferedRole} 
                <input   
                    type="text" 
                    placeholder="Role"
                    name="preferedRole"
                    onChange={handleChange}
                    value={profileInfo.preferedRole}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileExperience">
                Experience : {profileInfo.experience} 
                <input
                    type="text" 
                    placeholder="Experience"
                    name="experience"
                    onChange={handleChange}
                    value={profileInfo.experience}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileBio">
                Bio : {profileInfo.bio} 
                <input
                    type="text" 
                    placeholder="Short Bio"
                    name="bio"
                    onChange={handleChange}
                    value={profileInfo.bio}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileSocials">
                Socials : {profileInfo.socials} 
                <input
                    type="text" 
                    placeholder="Social Link"
                    name="socials"
                    onChange={handleChange}
                    value={profileInfo.socials}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileProjects">
                Skills : {profileInfo.pastProjects} 
                <input
                    type="text" 
                    placeholder="Project Title"
                    name="pastProjects"
                    onChange={handleChange}
                    value={profileInfo.pastProjects}
                    required   
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <button type="submit">Update Profile</button>
        </form>
    </div>)
}

export default ProfilePage;
