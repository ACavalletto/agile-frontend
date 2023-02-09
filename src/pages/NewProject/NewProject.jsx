import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
function NewProject (user){

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

    // Options for React-Select dropdown menus
    const animatedComponents = makeAnimated();
    const skillsOptions = [
        { name: "skills", value: "angular", label: "Angular"},
        { name: "skills", value: "css", label: "CSS"},
        { name: "skills", value: "django", label: "Django"},
        { name: "skills", value: "express", label: "Express"},
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


    const handleChange =({ currentTarget: input}) => {

        
        setProjectInfo({...projectInfo,[input.name]:input.value})
    }

    const handleCreateSelectChange = (choices) => {
        const tempProjectInfo = {...projectInfo};
        tempProjectInfo.skills = choices.map(c => c.value.toLowerCase())
        setProjectInfo(tempProjectInfo);
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
        <Link to="/">Home</Link>

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

            <div id="projectTechnologies">Technologies : {projectInfo.technologies} 
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
            placeholder="New Technology"
            name="technologies"
            onChange={handleChange}
            value={projectInfo.bday}
            required
            
            ></input><span className="edit-button" onClick={toggleEdit}>edit</span> */}
            </div>

            {/* What is "Skills" for a project? */}
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

export default NewProject;
