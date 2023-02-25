import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CurrentTeam from "../../components/CurrentTeam/CurrentTeam";
import ResourceLinks from "../../components/ResourceLinks/ResourceLinks";
import Timeline from "../../components/Timeline/Timeline";
import * as projectsAPI from "../../utilities/projects-api";
import "./ProjectDetail.css";

const ProjectDetail = ({ user }) => {
  const [project, setProject] = useState(null);
  const { projectID } = useParams();
  console.log(projectID);

  useEffect(function() {
    if (!project) {
      (async function getProject() {
        const projectInfo = await projectsAPI.showProject(projectID)
        console.log(projectInfo)
        setProject(projectInfo)
      })()
    }
  })

  return (
    !project ? (
      <div>Loading Project...</div>
    ) : (
      <div className="project-detail-page">
        <h1>{project.title} Project Center</h1>
        <div className="project-info">
          <p>Description: {project.description || "" }</p>
          <p>Tech: {project.tech?.join(", ") || ""}</p>
          <p>Roles: {project.roles?.join(", ") || ""}</p>
          <p>Categories: {project.categories?.join(", ") || ""}</p>
        </div>
        <div>
          <h6>Your Current Team</h6>
          <CurrentTeam project={project} />
        </div>
        <div>
          <h4>Resources</h4>
          <ResourceLinks project={project}/>
        </div>
        <div>
          <h4>Current Stage</h4>
        </div>
        <div>
          <h4>Your Timeline</h4>
          <Timeline project={project}/> 
        </div>
      </div>
    )
  )
}

export default ProjectDetail;