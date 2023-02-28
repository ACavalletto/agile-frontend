import { Link } from "react-router-dom";
import bookmark from "../../images/bookmark_24.png";
import "./ProjectListItem.css";

const ProjectListItem = ({ project }) => {
  const roleOptions = {
    "UX": "UX/UI Designer",
    "FE": "Front-end",
    "BE": "Back-end",
    "FS": "Full-stack",
    "PM": "Project Manager",
  };
  const roleList = project.roles.sort().map(r => roleOptions[r]).join(", ")

  return (
    <div className="project-list-item">
      <div className="project-list-item-box">
        <Link to={`/projects/${project._id}`}>
          <div className="project-list-item-box-contents">
            <div className="project-image">
              <img />
            </div>
            <div className="project-info">
              <h6>{project.title}</h6>
              <div>{roleList}</div>
              <div>Current Team Size: {project.members.length}</div>
              <div>Project Time Length: 3 Weeks</div>
            </div>
          </div>
        </Link>
      </div>
      <div className="bookmark-img"><img src={bookmark}/></div>
    </div>
  )
}

export default ProjectListItem;