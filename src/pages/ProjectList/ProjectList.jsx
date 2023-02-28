import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageBottomButton from "../../components/PageBottomButton/PageBottomButton";
import ProjectListItem from "../../components/ProjectListItem/ProjectListItem"; 
import * as projectsAPI from "../../utilities/projects-api";
import "./ProjectList.css";

const ProjectList = () => {
  const [projects, setProjects] = useState(null);

  useEffect(function() {
    if (!projects) {
      (async function getProjects() {
        const allProjects = await projectsAPI.getAllProjects();
        console.log(allProjects);
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
        <PageBottomButton buttonText="+ Add New Project" link="/projects/new" />
      </div>
    ) : (
      <div>Loading Projects...</div>
    )
  )
}

export default ProjectList;