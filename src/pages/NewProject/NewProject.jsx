import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';

function NewProject (user){
  const [projectInfo, setProjectInfo] = useState({
    title:"",
    projMembers:[""],
    description:"",
    tech:[""],
    timeline:"",
    roles:[""],
    categories:[""],
    gitHubLink: "",
    zoomLink: "",
    figmaLink: "",
    otherLink: "",
  })

  // Options for React-Select dropdown menus
  const [isClearable, setIsClearable] = useState(true);
  const animatedComponents = makeAnimated();
  const techOptions = [
    { name: "tech", value: "angular", label: "Angular"},
    { name: "tech", value: "css", label: "CSS"},
    { name: "tech", value: "django", label: "Django"},
    { name: "tech", value: "express", label: "Express"},
    { name: "tech", value: "html", label: "HTML"},
    { name: "tech", value: "javascript", label: "JavaScript"},
    { name: "tech", value: "mongodb", label: "MongoDB"},
    { name: "tech", value: "mongoose", label: "Mongoose"},
    { name: "tech", value: "node", label: "Node"},
    { name: "tech", value: "postgresql", label: "PostgreSQL"},
    { name: "tech", value: "python", label: "Python"},
    { name: "tech", value: "react", label: "React"},
    { name: "tech", value: "ruby", label: "Ruby"},
    { name: "tech", value: "ruby-rails", label: "Ruby on Rails"},
    { name: "tech", value: "vue", label: "Vue"},
  ]
  const categoryOptions = [
    { name: "categories", value: "art", label: "Art"},
    { name: "categories", value: "travel", label: "Travel"},
    { name: "categories", value: "social", label: "Social"},
    { name: "categories", value: "religion", label: "Religion"},
    { name: "categories", value: "media", label: "Media"},
    { name: "categories", value: "finance", label: "Finance"},
    { name: "categories", value: "sports", label: "Sports"},
    { name: "categories", value: "education", label: "Education"},
    { name: "categories", value: "medical", label: "Medical"},
    { name: "categories", value: "culture", label: "Culture"},
    { name: "categories", value: "career", label: "Career"},
    { name: "categories", value: "social-justice", label: "Social Justice"},
    { name: "categories", value: "tech", label: "Tech"},
    { name: "categories", value: "environment", label: "Environment"},
  ]
  const roleOptions = [
    { name: "roles", value: "ux", label: "UX"},
    { name: "roles", value: "design", label: "Design"},
    { name: "roles", value: "front-end", label: "Front-end"},
    { name: "roles", value: "back-end", label: "Back-end"},
    { name: "roles", value: "full-stack", label: "Full-stack"},
    { name: "roles", value: "pm", label: "Project Manager"},
  ]

  const handleChange =({ currentTarget: input}) => {
    setProjectInfo({...projectInfo,[input.name]:input.value})
  }
  const handleSelectChange = (choices) => {
    const tempProjectInfo = {...projectInfo};
    tempProjectInfo[choices[choices.length-1].name] = choices.map(c => c.value);
    setProjectInfo(tempProjectInfo);
  }
  const handleCreateSelectChange = (choices) => {
    const tempProjectInfo = {...projectInfo};
    tempProjectInfo.skills = choices.map(c => c.value.toLowerCase())
    setProjectInfo(tempProjectInfo);
  }

  return (
    <div className="profile-Page">
      {console.log(user)}
      <Link to="/">Home</Link>
      <div className="project-info">
        <div id="projectName">
          <h6>Project Title:</h6>
          <input
            display="none"
            type="text" 
            placeholder="Title"
            name="title"
            onChange={handleChange}
            value={projectInfo.title}
            required
            />
        </div>
        <div id="projDescription">
          <h6>Project Description:</h6>
          <textarea
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={projectInfo.description}
            required
          />
        </div>
        <div id="projectTechnologies">
          <h6>Technologies:</h6>
          <CreatableSelect
            className="basic-multi-select" 
            classNamePrefix="select" 
            name="skills"
            isMulti
            components={animatedComponents}
            options={techOptions}
            onChange={handleCreateSelectChange}
          />
        </div>
        {/* This still doesn't clear properly */}
        <div id="projectRoles">
          <h6>Roles:</h6>
          <Select
            name="roles"
            isMulti
            isClearable={isClearable}
            components={animatedComponents}
            options={roleOptions}
            onChange={handleSelectChange}
          />
        </div>
        {/* This still doesn't clear properly */}
        <div id="projectCategories">
          <h6>Categories:</h6>
          <Select
            name="categories"
            isMulti
            components={animatedComponents}
            options={categoryOptions}
            onChange={handleSelectChange}
          />
        </div>
        <div id="projectLinks">
          <h6>Project Resource Links:</h6>
          <p>GitHub</p>
          <input
            type="text" 
            placeholder="http://www.github.com/"
            name="gitHubLink"
            onChange={handleChange}
            value={projectInfo.gitHubLink}
          />
          <p>Zoom</p>
          <input
            type="text" 
            placeholder="http://www.zoom.com/"
            name="zoomLink"
            onChange={handleChange}
            value={projectInfo.zoomLink}
          />
          <p>Figma</p>
          <input
            type="text" 
            placeholder="http://www.figma.com/"
            name="figmaLink"
            onChange={handleChange}
            value={projectInfo.figmaLink}
          />
          <p>Other</p>
          <input
            type="text" 
            placeholder="http://www.anything.com/"
            name="otherLink"
            onChange={handleChange}
            value={projectInfo.otherLink}
          />
        </div>
      </div>
    </div>
  )
}

export default NewProject;
