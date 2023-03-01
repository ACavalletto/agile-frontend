import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CurrentTeam from "../../components/CurrentTeam/CurrentTeam";
import JoinRequestButton from "../../components/JoinRequestButton/JoinRequestButton";
import JoinRequestList from "../../components/JoinRequestList/JoinRequestList";
import NewProject from "../NewProject/NewProject";
import ProjectRoles from "../../components/ProjectRoles/ProjectRoles";
import ProjectTopicTags from "../../components/ProjectTopicTags/ProjectTopicTags";
import ProjectTools from "../../components/ProjectTools/ProjectTools";
import ResourceLinks from "../../components/ResourceLinks/ResourceLinks";
import Timeline from "../../components/Timeline/Timeline";
import * as projectsAPI from "../../utilities/projects-api";
import "./ProjectDetail.css";

const ProjectDetail = ({ user, profile }) => {
  const [project, setProject] = useState(null);
  const [editToggle, setEditToggle] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(function() {
    if (!project) {
      (async function getProject() {
        const projectInfo = await projectsAPI.showProject(id)
        setProject(projectInfo)
        if ("joinRequests" in projectInfo) {
          console.log(projectInfo.joinRequests);
        } else {
          console.log("no join requests")
        }
        console.log(projectInfo)
      })()
    }
  })

  function handleEditToggle() {
    setEditToggle(!editToggle);
  }

  async function deleteProject() {
    try {
      const deletedProject = await projectsAPI.deleteProject(id);
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
        <h1 className="purple-text">{project.title} Project Center</h1>
        {editToggle ? 
          <div className="edit-project">
            <NewProject 
              project={project} 
              setProject={setProject} 
              editToggle={editToggle} 
              setEditToggle={setEditToggle}
              profile={profile} 
              />
          </div>
        : 
          <>
            <ProjectTopicTags project={project} />
            <div className="project-info-pane">
              <h6>About</h6>
              <p>{project.description}</p>
            </div>
            <div className="roles-and-tools">
              <ProjectRoles project={project} />
              <ProjectTools project={project} />
            </div>
            {project.creator === profile._id && (
              <JoinRequestList project={project} />
            )}
            <CurrentTeam project={project} />
            {!project.members.includes(profile._id) && (project.joinRequests.filter(p => p.id === profile._id).length === 0) && (
              <JoinRequestButton 
                project={project} 
                setProject={setProject} 
                profile={profile} 
                user={user}
              />
            )}
            <h6 className="purple-text">Current Stage</h6>
            <Timeline project={project}/> 
            <ResourceLinks project={project}/>
            <div className="buttons">
              <button className="purple-bg" onClick={handleEditToggle}>Edit Project</button>
              <button className="purple-bg" onClick={deleteProject}>Delete Project</button>
            </div>
          </>
        }
      </div>
    )
  )
}

export default ProjectDetail;