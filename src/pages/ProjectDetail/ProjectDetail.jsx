import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CurrentTeam from "../../components/CurrentTeam/CurrentTeam";
import ResourceLinks from "../../components/ResourceLinks/ResourceLinks";
import Timeline from "../../components/Timeline/Timeline";
import "./ProjectDetail.css";

const ProjectDetail = ({ user }) => {
  const [project, setProject] = useState(null);
  
  // useEffect
    //  get project id using useParams
    // API call to get project info, set to 

  return (
    <div className="project-detail-page">
      <h1>{project?.title} Project Center</h1>
      <div className="project-info">
        <p>Description: {project?.description || "" }</p>
        <p>Tech: {project?.tech.join(", ") || "" }</p>
        <p>Roles: {project?.roles.join(", ") || "" }</p>
        <p>Categories: {project?.topics.join(", ") || "" }</p>
      </div>
      <div>
        <h6>Your Current Team</h6>
        <CurrentTeam project={project} />
      </div>
      <div>
        <h4>Resources</h4>
        <ResourceLinks />
      </div>
      <div>
        <h4>Current Stage</h4>
      </div>
      <div>
        <h4>Your Timeline</h4>
        <Timeline /> 
      </div>
    </div>
  )
}

export default ProjectDetail;