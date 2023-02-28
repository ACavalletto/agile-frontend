import { Link } from "react-router-dom";
import "./ProjectListItem.css";

const ProjectListItem = ({ project }) => {
  return (
    <Link to={`/projects/${project._id}`}>
      <div className="project-list-item d-flex">
        <div className="d-flex">
          <div>
            <img />
          </div>
          <div>
            <div>{project.title}</div>
            <div>{project.roles[0]}</div>
            <div>Current Team Size: {project.members.length}</div>
            <div>Project Time Length: 3 Weeks</div>
          </div>
        </div>
        <div>b</div>
      </div>
    </Link>
  )
}

export default ProjectListItem;