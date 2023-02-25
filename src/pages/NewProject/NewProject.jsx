import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import TimelineForm from "../../components/TimelineForm/TimelineForm";
import PageBottomButton from "../../components/PageBottomButton/PageBottomButton";
import * as projectsAPI from "../../utilities/projects-api";

function NewProject ({ user, profile }){
  const [formToggle, setFormToggle] = useState(true);
  const [projectInfo, setProjectInfo] = useState({
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
  })

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
  async function handleSubmit() {
    console.log(projectInfo)

    // Formats data object for model
    const formData = {...projectInfo};
    formData.creator = profile._id;
    formData.members.push(profile._id)
    console.log(formData);

    const newProject = await projectsAPI.addProject(formData);
    console.log(newProject);
  }

  return (
    <div className="new-project-page">
      { formToggle ? 
        <>
          <ProjectForm projectInfo={projectInfo} setProjectInfo={setProjectInfo} handleChange={handleChange} />
          <PageBottomButton buttonText={"Save + Add Timeline"} onClick={handleToggle}/>
        </>
      :
        <>
          <TimelineForm projectInfo={projectInfo} setProjectInfo={setProjectInfo} handleTimelineChange={handleTimelineChange} />
          <Link to="" onClick={handleToggle}>Go Back</Link>
          <br />
          <Link to="/projects" onClick={handleSubmit} >Save New Project!</Link> {/* This route needs to be updated to specific project id route */}
        </>
      }

    </div>
  )
}

export default NewProject;
