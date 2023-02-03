import React from "react";
import { useState } from "react";

function ProjectPage (user){

    const [projectInfo, setProjectInfo] = useState(
        {
        title:"",
        projMembers:[""],
        description:"",
        technologies:[""],
        timeline:"",
        roles:[""],
        categories:[""],
        links:[""]
    })



    const handleChange =({ currentTarget: input}) => {

        
        setProjectInfo({...projectInfo,[input.name]:input.value})
    }

    const toggleEdit =(target) =>{
        console.log(target.nativeEvent.target.previousSibling)
        // target.nativeEvent.target.parentElement.style.display === "none" ? 
        // target.nativeEvent.target.parentElement.style.display = "block" : target.nativeEvent.target.parentElement.style.display = "none" ;
        target.nativeEvent.target.previousSibling.style.display === "none" ? 
         target.nativeEvent.target.previousSibling.style.display = "inline" : target.nativeEvent.target.previousSibling.style.display = "none" ;


    }

    return (

    <div className="Profile-Page">
        {console.log(user)}
        <div className="Project-info">
            <div id="projectName">Project Title : {projectInfo.title} <input
            display="none"
            
            type="text" 
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={projectInfo.name}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>

            <div id="projDescription">Project Description : {projectInfo.username} <input
            type="text" 
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={projectInfo.username}
            required
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>

            <div id="projectTechnologies">Technologies : {projectInfo.technologies} <input
            type="text" 
            placeholder="New Technology"
            name="technologies"
            onChange={handleChange}
            value={projectInfo.bday}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>

            <div id="projectMembers">Skills : {projectInfo.skills} <input
            type="text" 
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={projectInfo.technologies }
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span></div>


        </div>


    </div>)

}

export default ProjectPage;
