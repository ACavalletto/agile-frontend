import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';


function ProfilePage (){

    const navigate = useNavigate()

    const [profileInfo, setProfileInfo] = useState(
        {
            name:"",
            username:"",
            bday:"",
            skills:[],
            profilePhoto:"",
            coverPhoto:"",
            preferredRoles:[],
            experience:[],
            bio:"",
            gitHubURL:"",
            linkedInURL:"",
            twitterURL: "",
            portfolioURL:"",
            pastProjects:""
        })

    // Options for React-Select dropdown menus
    const animatedComponents = makeAnimated();
    const skillsOptions = [
        { name: "skills", value: "adobe", label: "Adobe Design Suite"},
        { name: "skills", value: "angular", label: "Angular"},
        { name: "skills", value: "css", label: "CSS"},
        { name: "skills", value: "django", label: "Django"},
        { name: "skills", value: "express", label: "Express"},
        { name: "skills", value: "figma", label: "Figma"},
        { name: "skills", value: "html", label: "HTML"},
        { name: "skills", value: "javascript", label: "JavaScript"},
        { name: "skills", value: "mongodb", label: "MongoDB"},
        { name: "skills", value: "mongoose", label: "Mongoose"},
        { name: "skills", value: "node", label: "Node"},
        { name: "skills", value: "postgresql", label: "PostgreSQL"},
        { name: "skills", value: "python", label: "Python"},
        { name: "skills", value: "react", label: "React"},
        { name: "skills", value: "ruby", label: "Ruby"},
        { name: "skills", value: "ruby-rails", label: "Ruby on Rails"},
        { name: "skills", value: "vue", label: "Vue"},
    ]
    const roleOptions = [
        { name: "preferredRoles", value: "ux", label: "UX"},
        { name: "preferredRoles", value: "design", label: "Design"},
        { name: "preferredRoles", value: "front-end", label: "Front-end"},
        { name: "preferredRoles", value: "back-end", label: "Back-end"},
        { name: "preferredRoles", value: "full-stack", label: "Full-stack"},
        { name: "preferredRoles", value: "pm", label: "Project Manager"},
    ]
    const experienceOptions = [
        { name: "experience", value: "self-taught", label: "Self-taught"},
        { name: "experience", value: "bootcamp", label: "Bootcamp"},
        { name: "experience", value: "cs-degree", label: "CS Degree"},
        { name: "experience", value: "industry-experience", label: "Professional Industry Experience"},
    ]

    // Handle form change functions
    const handleChange =({ currentTarget: input}) => {
        setProfileInfo({...profileInfo,[input.name]:input.value})
    }
    const handleSelectChange = (choices) => {
        const tempProfileInfo = {...profileInfo};
        tempProfileInfo[choices[choices.length-1].name] = choices.map(c => c.value);
        setProfileInfo(tempProfileInfo);
    }
    const handleCreateSelectChange = (choices) => {
        const tempProfileInfo = {...profileInfo};
        tempProfileInfo.skills = choices.map(c => c.value.toLowerCase())
        setProfileInfo(tempProfileInfo);
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
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileSkills">
                Skills : {profileInfo.skills} 
                <CreatableSelect
                    className="basic-multi-select" 
                    classNamePrefix="select" 
                    name="skills"
                    isMulti
                    components={animatedComponents}
                    options={skillsOptions}
                    onChange={handleCreateSelectChange}
                />

                {/* <input       
                    type="text" 
                    placeholder="Skills"
                    name="skills"
                    onChange={handleChange}
                    value={profileInfo.skills[profileInfo.skills.length-1]}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span> */}
            </div>
            <div id="profilePhoto">
                Profile Photo : {profileInfo.profilePhoto} 
                <input
                    type="text" 
                    placeholder="Name"
                    name="profilePhoto"
                    onChange={handleChange}
                    value={profileInfo.profilePhoto}
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
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileRoles">
                Preferred Roles : {profileInfo.preferredRoles} 
                <Select
                    name="preferredRoles"
                    isMulti
                    components={animatedComponents}
                    options={roleOptions}
                    onChange={handleSelectChange}
                />
                {/* <input   
                    type="text" 
                    placeholder="Role"
                    name="preferedRoles"
                    onChange={handleChange}
                    value={profileInfo.preferredRoles}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span> */}
            </div>
            <div id="profileExperience">
                Experience : {profileInfo.experience} 
                <Select 
                    name="experience"
                    isMulti
                    components={animatedComponents}
                    options={experienceOptions}
                    onChange={handleSelectChange}
                />
                {/* <input
                    type="text" 
                    placeholder="Experience"
                    name="experience"
                    onChange={handleChange}
                    value={profileInfo.experience}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span> */}
            </div>
            <div id="profileBio">
                Bio : {profileInfo.bio} 
                <textarea
                    placeholder="Short Bio"
                    name="bio"
                    onChange={handleChange}
                    value={profileInfo.bio}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileGitHub">
                GitHub : {profileInfo.gitHubURL} 
                <input
                    type="text" 
                    placeholder="https://github.com/youraccount"
                    name="gitHubURL"
                    onChange={handleChange}
                    value={profileInfo.gitHubURL}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileLinkedIn">
                LinkedIn : {profileInfo.linkedInURL} 
                <input
                    type="text" 
                    placeholder="https://www.linkedin.com/in/yourname/"
                    name="linkedInURL"
                    onChange={handleChange}
                    value={profileInfo.linkedInURL}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileTwitter">
                Twitter : {profileInfo.twitterURL} 
                <input
                    type="text" 
                    placeholder="@tweety"
                    name="twitterURL"
                    onChange={handleChange}
                    value={profileInfo.twitterURL}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profilePortfolio">
                Portfolio : {profileInfo.portfolioURL} 
                <input
                    type="text" 
                    placeholder="https://www.myportfolio.com/"
                    name="portfolioURL"
                    onChange={handleChange}
                    value={profileInfo.portfolioURL}
                    required
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span>
            </div>
            <div id="profileProjects">
                Projects : {profileInfo.pastProjects} 

                {/* Presumably this will be auto-filled with db content rather than being an editable field as below */}

                {/* <input
                    type="text" 
                    placeholder="Project Title"
                    name="pastProjects"
                    onChange={handleChange}
                    value={profileInfo.pastProjects}
                    required   
                />
                <span className="edit-button" onClick={toggleEdit}>edit</span> */}
            </div>
            <button type="submit">Update Profile</button>
        </form>
    </div>)
}

export default ProfilePage;
