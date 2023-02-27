import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import TimelineForm from "../../components/TimelineForm/TimelineForm";
import PageBottomButton from "../../components/PageBottomButton/PageBottomButton";
import * as projectsAPI from "../../utilities/projects-api";

function NewProject ({ user, profile, project = null, editToggle, setEditToggle }){
  const [formToggle, setFormToggle] = useState(true);
  const [projectInfo, setProjectInfo] = useState(project || {
    title:"",
    members:[],
    description:"",
    tech:[],
    timeline: {
      stage1: {
        name: "",
        description: ""
      },
      stage2: {
        name: "",
        description: ""
      },
      stage3: {
        name: "",
        description: ""
      },
      stage4: {
        name: "",
        description: ""
      },
      stage5: {
        name: "",
        description: ""
      },
      stage6: {
        name: "",
        description: ""
      },
    },
    roles:[],
    categories:[],
    figmaLink: "",
    gitHubFrontendLink: "",
    gitHubBackendLink: "",
    googleDriveLink: "",
    jiraLink: "",
    microsoftTeamsLink: "",
    slackLink: "",
    trelloLink: "",
    zoomLink: "",
    error: "",
  })
  const navigate = useNavigate();

  function handleToggle() {
    setFormToggle(!formToggle);
  }
  function handleChange({ currentTarget: input}) {
    setProjectInfo({...projectInfo, [input.name]: input.value})
  }
  function handleTimelineChange({ currentTarget: input}) {
    const tempProjInfo = {...projectInfo};
    tempProjInfo.timeline[input.name.slice(0, 6)][input.name.slice(7)] = input.value;
    setProjectInfo(tempProjInfo);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(projectInfo)

    try {
      // Formats data object for model
      const formData = {...projectInfo};
      if (formData._id) {
        const updatedProject = await projectsAPI.updateProject(formData._id, formData);
        // setEditToggle(!editToggle);
        // setProjectInfo(updatedProject);
        // navigate(`/projects/${formData._id}`);
      } else {
        formData.creator = profile._id;
        formData.members.push(profile._id)
        console.log(formData);
        const newProject = await projectsAPI.addProject(formData);
        console.log(newProject);
        navigate(`/projects/${newProject._id}`);
      }
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="new-project-page">
      { formToggle ? 
        <>
          <ProjectForm projectInfo={projectInfo} setProjectInfo={setProjectInfo} handleChange={handleChange} handleToggle={handleToggle} editToggle={editToggle} handleSubmit={handleSubmit} />
          {/* <PageBottomButton buttonText={"Save + Add Timeline"} onClick={handleToggle}/> */}
        </>
      :
        <>
          <TimelineForm projectInfo={projectInfo} setProjectInfo={setProjectInfo} handleTimelineChange={handleTimelineChange} handleToggle={handleToggle} handleSubmit={handleSubmit} editToggle={editToggle}/>
          {/* <Link to="" onClick={handleToggle}>Go Back</Link>
          <br />
          <Link to="/projects" onClick={handleSubmit} >Save New Project!</Link> This route needs to be updated to specific project id route */}
        </>
      }
    </div>
  )
}

export default NewProject;
