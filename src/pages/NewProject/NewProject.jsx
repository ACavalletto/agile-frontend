import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import TimelineForm from "../../components/TimelineForm/TimelineForm";
import PageBottomButton from "../../components/PageBottomButton/PageBottomButton";

function NewProject (user){
  console.log(user)
  const [formToggle, setFormToggle] = useState(true);
  const [projectInfo, setProjectInfo] = useState({
    title:"",
    projMembers:[""],
    description:"",
    tech:[""],
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
    roles:[""],
    categories:[""],
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
  function handleSubmit() {
    console.log(projectInfo)

    // Formats data object for Python model
    const formData = {...projectInfo};
    formData.profile = user.uid;
    formData.topics = [...formData.categories];
    formData.project_members = [...formData.projMembers];
    formData.figma_link = formData.figmaLink;
    formData.gitub_frontend_link = formData.gitHubFrontendLink;
    formData.gitub_backend_link = formData.gitHubBackendLink;
    formData.google_drive_link = formData.googleDriveLink;
    formData.jira_link = formData.jiraLink;
    formData.microsoft_teams_link = formData.microsoftTeamsLink;
    formData.slack_link = formData.slackLink;
    formData.trello_link = formData.trelloLink;
    formData.zoom_link = formData.zoomLink;
    console.log(formData);

    // Sends projectInfo to projects POST route (once said route is created)
  }

  return (
    <div className="new-project-page">
      <HamburgerMenu />
      <Link to="/">Home</Link>
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
