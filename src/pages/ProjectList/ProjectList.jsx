import { useState, useEffect } from "react";
import AddProjectButton from "../../components/AddProjectButton/AddProjectButton";
import ProjectListItem from "../../components/ProjectListItem/ProjectListItem"; 
import * as projectsAPI from "../../utilities/projects-api";
import "./ProjectList.css";

const ProjectList = () => {
  const [projects, setProjects] = useState(null);

  useEffect(function() {
    if (!projects) {
      (async function getProjects() {
        const allProjects = await projectsAPI.getAllProjects();
        setProjects(allProjects);
      })()
    }
  })

  return (
    projects ? (
      <div className="project-list-page">
        <div className="list">
          {projects.map(p => 
            <ProjectListItem project={p} key={p._id} />
          )}
        </div>
        <AddProjectButton />
      </div>
    ) : (
      <div>Loading Projects...</div>
    )
  )
}

export default ProjectList;