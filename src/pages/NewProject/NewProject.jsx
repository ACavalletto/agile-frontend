import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectForm from "../../components/ProjectForm/ProjectForm";
import PageBottomButton from "../../components/PageBottomButton/PageBottomButton";

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

  const handleChange =({ currentTarget: input}) => {
    setProjectInfo({...projectInfo,[input.name]:input.value})
  }

  return (
    <div className="new-project-page">
      {console.log(user)}
      <Link to="/">Home</Link>
      <ProjectForm projectInfo={projectInfo} setProjectInfo={setProjectInfo} />
      <PageBottomButton buttonText={"Save + Add Timeline"} />
    </div>
  )
}

export default NewProject;
