import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageBottomButton from "../../components/PageBottomButton/PageBottomButton";
import * as projectsAPI from "../../utilities/projects-api";

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
      <div>
        <h1>Find A Project!</h1>
        {projects.map(p => 
          <div><Link to={`/projects/${p._id}`}>{p.title}</Link></div>
        )}
        <PageBottomButton buttonText="+ Add New Project" link="/projects/new" />
      </div>
    ) : (
      <div>Loading Projects...</div>
    )
  )
}

export default ProjectList;