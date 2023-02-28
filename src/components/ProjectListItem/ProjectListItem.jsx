import { Link } from "react-router-dom";
import bookmark from "../../images/bookmark_24.png";
import "./ProjectListItem.css";

const ProjectListItem = ({ project }) => {
  const roleOptions = {
    "UX": "UX/UI Designer",
    "FE": "Front-end Engineer",
    "BE": "Back-end Engineer",
    "FS": "Full-stack Engineer",
    "PM": "Project Manager",
  };
  const role = roleOptions[project.roles[0]];
  const substitutePhotoOptions = [
    "https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7966000/pexels-photo-7966000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/5823217/pexels-photo-5823217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/7532116/pexels-photo-7532116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/984858/pexels-photo-984858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/11773465/pexels-photo-11773465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14612871/pexels-photo-14612871.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/15047680/pexels-photo-15047680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/15386478/pexels-photo-15386478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6580699/pexels-photo-6580699.jpeg"
  ];

  return (
    <div className="project-list-item">
      <div className="project-list-item-box">
        <Link to={`/projects/${project._id}`}>
          <div className="project-list-item-box-contents">
            <div className="project-image">
              <img src={project.image ? project.image : substitutePhotoOptions[Math.floor(Math.random() * substitutePhotoOptions.length)]}/>
            </div>
            <div className="project-info">
              <div className="heading-text">{project.title.slice(0, 45)}</div>
              <div className="sub-heading-text">{role}</div>
              <div className="body-text">
                <div>Current Team Size: {project.members.length}</div>
                <div className="body-text">Project Time Length: 3 Weeks</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="bookmark-img"><img src={bookmark}/></div>
    </div>
  )
}

export default ProjectListItem;