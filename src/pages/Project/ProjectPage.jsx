import React from "react";
import { useState } from "react";

function ProjectPage (){

    const [projectInfo, setProjectInfo] = useState(
        {
        title:"",
        projMembers:[""],
        description:"",
        technologies:["skill1","skill2"],
        timeline:"",
        roles:[""],
        categories:[""],
        links:[""]
    
    })

    const handleChange =({ currentTarget: input}) => {
        setProjectInfo({...projectInfo,[input.name]:input.value})
    }

    const toggleEdit =(target) =>{
        console.log(target.nativeEvent.target.parentElement)
    }

    return (
    <div className="Profile-Page">
        <div className="Project-info">
            <div id="projectName">Name : {projectInfo.name} <input
            
            type="text" 
            placeholder="title"
            name="name"
            onChange={handleChange}
            value={projectInfo.name}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>
                        <div id="profileName">Username : {projectInfo.username} <input
            
            type="text" 
            placeholder="username"
            name="username"
            onChange={handleChange}
            value={projectInfo.username}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>
                        <div id="profileName">Birthday : {projectInfo.bday} <input
            
            type="text" 
            placeholder="Birthday"
            name="bday"
            onChange={handleChange}
            value={projectInfo.bday}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>
                        <div id="profileName">Skills : {projectInfo.skills} <input
            
            type="text" 
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={projectInfo.skills[projectInfo.skills.length-1]}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>


        </div>


    </div>)

}

export default ProjectPage;
