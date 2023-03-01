import { Link } from "react-router-dom";
import "./ResourceLinks.css";
import figma from "../../images/resource-icons/figma.svg";
import gitHub from "../../images/resource-icons/github.svg";
import googleDrive from "../../images/resource-icons/google-drive.svg";
import jira from "../../images/resource-icons/jira.svg";
import microsoftTeams from "../../images/resource-icons/microsoft-teams.svg";
import slack from "../../images/resource-icons/slack.svg";
import trello from "../../images/resource-icons/trello.svg";
import zoom from "../../images/resource-icons/zoom.png";

function ResourceLinks ({ project }) {
  return (
    <div className="resources">
      <h6 className="purple-text">Resources</h6>
      <div className="resource-links">
        {project.figmaLink ? (
          <div className="img-box">
            <Link to={project.figmaLink}><img src={figma} /></Link>
          </div>
        ) : ("")}
        {project.gitHubFrontendLink ? (
          <div className="img-box">
            <Link to={project.gitHubFrontendLink}><img src={gitHub} /></Link>
          </div>
        ) : ("")}
        {project.gitHubBackendLink ? (
          <div className="img-box">
            <Link to={project.gitHubBackendLink}><img src={gitHub} /></Link><span className="subtitle">Backend</span>
          </div>
        ) : ("")}
        {project.googleDriveLink ? (
          <div className="img-box">
            <Link to={project.googleDriveLink}><img src={googleDrive} /></Link>
          </div>
        ) : ("")}
        {project.jiraLink ? (
          <div className="img-box">
            <Link to={project.jiraLink}><img src={jira} /></Link>
          </div>
        ) : ("")}
        {project.microsoftTeamsLink ? (
          <div className="img-box">
            <Link to={project.microsoftTeamsLink}><img src={microsoftTeams} /></Link>
          </div>
        ) : ("")}
        {project.slackLink ? (
          <div className="img-box">
            <Link to={project.slackLink}><img src={slack} /></Link>
          </div>
        ) : ("")}
        {project.trelloLink ? (
          <div className="img-box">
            <Link to={project.trelloLink}><img src={trello} /></Link>
          </div>
        ) : ("")}
        {project.zoomLink ? (
          <div className="img-box">
            <Link to={project.zoomLink}><img src={zoom} /></Link>
          </div>
        ) : ("")}
      </div>
    </div>
  )
}

export default ResourceLinks;