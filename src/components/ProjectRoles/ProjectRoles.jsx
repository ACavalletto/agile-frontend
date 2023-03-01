import "./ProjectRoles.css";

const ProjectRoles = ({ project }) => {
  const roleOptions = {
    "UX": "UX/UI Designer",
    "FE": "Front-end Engineer",
    "BE": "Back-end Engineer",
    "FS": "Full-stack Engineer",
    "PM": "Project Manager",
  };
  const roleList = project.roles.sort().map(r => roleOptions[r]).join(", ")

  return (
    project.roles? (
      <div className="project-roles">
        <h6 className="purple-text">Role(s) Needed:</h6>
        <div className="role-list">
          <p>{roleList}</p>
        </div>
      </div>
      ) : ("")
  )
}

export default ProjectRoles;