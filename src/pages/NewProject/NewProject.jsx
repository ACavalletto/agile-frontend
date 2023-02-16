import { useState } from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
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
    gitHubLink: "",
    zoomLink: "",
    figmaLink: "",
    otherLink: "",
  })

  function handleToggle() {
    setFormToggle(!formToggle);
  }
  function handleChange({ currentTarget: input}) {
    setProjectInfo({...projectInfo, [input.name]: input.value})
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
          <TimelineForm projectInfo={projectInfo} setProjectInfo={setProjectInfo} handleChange={handleChange} />
          <Link to="" onClick={handleToggle}>Go Back</Link>
          <br />
          <Link to="/projects">Save New Project!</Link> {/* This route needs to be updated to specific project id route */}
        </>
      }

    </div>
  )
}

export default NewProject;
