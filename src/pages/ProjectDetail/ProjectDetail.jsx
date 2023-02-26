import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CurrentTeam from "../../components/CurrentTeam/CurrentTeam";
import ProjectRoles from "../../components/ProjectRoles/ProjectRoles";
import ProjectTopicTags from "../../components/ProjectTopicTags/ProjectTopicTags";
import ProjectTools from "../../components/ProjectTools/ProjectTools";
import ResourceLinks from "../../components/ResourceLinks/ResourceLinks";
import Timeline from "../../components/Timeline/Timeline";
import * as projectsAPI from "../../utilities/projects-api";
import "./ProjectDetail.css";

const ProjectDetail = ({ user }) => {
  const [project, setProject] = useState(null);
  const { projectID } = useParams();
  const navigate = useNavigate();
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

  async function deleteProject() {
    try {
      const deletedProject = await projectsAPI.deleteProject(projectID);
      navigate("/projects");
    } catch(err) {
      console.log(err)
    }
  }

  return (
    !project ? (
      <div>Loading Project...</div>
    ) : (
      <div className="project-detail-page">
        <h1>{project.title} Project Center</h1>
        <ProjectTopicTags project={project} />
        <div className="project-info">
          <h6>About</h6>
          <p>{project.description || "" }</p>
        </div>
        <div className="roles-and-tools">
          <ProjectRoles project={project} />
          <ProjectTools project={project} />
        </div>
        <CurrentTeam project={project} />
        <h6>Current Stage</h6>
        <Timeline project={project}/> 
        <ResourceLinks project={project}/>
        <button className="delete" onClick={deleteProject}>Delete Project</button>
      </div>
    )
  )
}

export default ProjectDetail;