import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import TimelineForm from "../../components/TimelineForm/TimelineForm";
import PageBottomButton from "../../components/PageBottomButton/PageBottomButton";

function NewProject (user){
  const [formToggle, setFormToggle] = useState(true);
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
  function handleToggle() {
    setFormToggle(!formToggle);
  }
  function handleChange({ currentTarget: input}) {
    setProjectInfo({...projectInfo,[input.name]:input.value})
  }

  return (
    <div className="new-project-page">
      {console.log(user)}
      <Link to="/">Home</Link>
      { formToggle ? 
        <>
          <ProjectForm projectInfo={projectInfo} setProjectInfo={setProjectInfo} />
          <PageBottomButton buttonText={"Save + Add Timeline"} onClick={handleToggle}/>
        </>
      :
        <>
          <TimelineForm />
          <Link to="" onClick={handleToggle}>Go Back</Link>
          <Link to="/projects">Save New Project!</Link> {/* This route needs to be updated to specific project id route */}
        </>
      }

    </div>
  )
}

export default NewProject;
