import "./ProjectRoles.css";

const ProjectRoles = ({ project }) => {
  console.log(project.roles)
  const roleOptions = {
    "UX": "UX/UI Designer",
    "FE": "Front-end",
    "BE": "Back-end",
    "FS": "Full-stack",
    "PM": "Project Manager",
  };
  const roleList = project.roles.sort().map(r => roleOptions[r]).join(", ")

  return (
    project.roles? (
      <div className="project-roles">
        <h6>Role(s) Needed:</h6>
        <div className="role-list">
          <p>{roleList}</p>
        </div>
      </div>
      ) : ("")
  )
}

export default ProjectRoles;