import { useState } from "react";
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import "./ProjectForm.css";

function ProjectForm( {projectInfo, setProjectInfo, handleChange} ) {
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
    { name: "categories", value: "ART", label: "Art"},
    { name: "categories", value: "CAR", label: "Career"},
    { name: "categories", value: "COM", label: "Community"},
    { name: "categories", value: "CUL", label: "Culture"},
    { name: "categories", value: "ECO", label: "Environment"},
    { name: "categories", value: "EDU", label: "Education"},
    { name: "categories", value: "FNC", label: "Finance"},
    { name: "categories", value: "FOD", label: "Food"},
    { name: "categories", value: "MED", label: "Media/Pop Culture"},
    { name: "categories", value: "MD", label: "Medical"},
    { name: "categories", value: "REL", label: "Religion"},
    { name: "categories", value: "SOC", label: "Social"},
    { name: "categories", value: "SJ", label: "Social Justice"},
    { name: "categories", value: "SPT", label: "Sports"},
    { name: "categories", value: "IT", label: "Technology"},
    { name: "categories", value: "TRV", label: "Travel"},
  ]
  const roleOptions = [
    { name: "roles", value: "UX", label: "UX/UI Designer"},
    { name: "roles", value: "FE", label: "Front-end"},
    { name: "roles", value: "BE", label: "Back-end"},
    { name: "roles", value: "FS", label: "Full-stack"},
    { name: "roles", value: "PM", label: "Project Manager"},
  ]

  const handleSelectRolesChange = (choices) => {
    const tempProjectInfo = {...projectInfo};
    choices.length ? tempProjectInfo.roles = choices.map(c => c.value) : tempProjectInfo.roles = [""];
    setProjectInfo(tempProjectInfo);
  }
  const handleSelectCategoriesChange = (choices) => {
    const tempProjectInfo = {...projectInfo};
    choices.length ? tempProjectInfo.categories = choices.map(c => c.value) : tempProjectInfo.categories = [""];
    setProjectInfo(tempProjectInfo);
  }
  const handleCreateSelectChange = (choices) => {
    const tempProjectInfo = {...projectInfo};
    tempProjectInfo.tech = choices.map(c => c.value.toLowerCase())
    setProjectInfo(tempProjectInfo);
  }

  return (
    <div className="project-info-form">
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
      <div id="projectDescription">
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
      <div id="projectRoles">
        <h6>Roles:</h6>
        <Select
          name="roles"
          isMulti
          isClearable={isClearable}
          components={animatedComponents}
          options={roleOptions}
          onChange={handleSelectRolesChange}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <div id="projectCategories">
        <h6>Categories:</h6>
        <Select
          name="categories"
          isMulti
          isClearable={isClearable}
          components={animatedComponents}
          options={categoryOptions}
          onChange={handleSelectCategoriesChange}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>
      <div id="projectLinks">
        <h6>Project Resource Links:</h6>
        <p>Figma</p>
        <input
          type="text" 
          placeholder="http://www.figma.com/"
          name="figmaLink"
          onChange={handleChange}
          value={projectInfo.figmaLink}
        />
        <p>GitHub (Frontend or Whole Project)</p>
        <input
          type="text" 
          placeholder="http://www.github.com/"
          name="gitHubFrontendLink"
          onChange={handleChange}
          value={projectInfo.gitHubFrontendLink}
        />
        <p>GitHub (Backend if separate)</p>
        <input
          type="text" 
          placeholder="http://www.github.com/"
          name="gitHubLink"
          onChange={handleChange}
          value={projectInfo.gitHubBackendLink}
        />
        <p>Google Drive Link</p>
        <input
          type="text" 
          placeholder="http://www.drive.google.com/"
          name="googleDriveLink"
          onChange={handleChange}
          value={projectInfo.googleDriveLink}
        />
        <p>Jira Link</p>
        <input
          type="text" 
          placeholder="http://www.jira.com/"
          name="jiraLink"
          onChange={handleChange}
          value={projectInfo.jiraLink}
        />
        <p>Microsoft Teams Link</p>
        <input
          type="text" 
          placeholder="https://www.microsoft.com/en-us/microsoft-teams/log-in"
          name="microsoftTeamsLink"
          onChange={handleChange}
          value={projectInfo.microsoftTeamsLink}
        />
        <p>Slack Link</p>
        <input
          type="text" 
          placeholder="http://www.slack.com/"
          name="slackLink"
          onChange={handleChange}
          value={projectInfo.slackLink}
        />
        <p>Trello Link</p>
        <input
          type="text" 
          placeholder="http://www.trello.com/"
          name="trelloLink"
          onChange={handleChange}
          value={projectInfo.trelloLink}
        />
        <p>Zoom</p>
        <input
          type="text" 
          placeholder="http://www.zoom.com/"
          name="zoomLink"
          onChange={handleChange}
          value={projectInfo.zoomLink}
        />
      </div>
    </div>
  )
}

export default ProjectForm;