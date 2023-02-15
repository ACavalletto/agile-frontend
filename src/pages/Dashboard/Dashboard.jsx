import { Link } from "react-router-dom";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import ImageAndName from "../../components/ImageAndName/ImageAndName";
import "./Dashboard.css"
import addPerson from "../../images/add-person/72.png";
import projects from "../../images/projects/72.png";
import calendar from "../../images/calendar/72.png";
import edit from "../../images/edit/24.png";
import ppl from "../../images/ppl/72.png";
import profile from "../../images/profile/72.png";
import speechBubble from "../../images/speech-bubble/72.png";
import userAvatar from "../../images/user-profile/72.png";

const Dashboard = ({ user }) => {
  console.log(user)
  return (
    <div>
      <HamburgerMenu />
      <div className="dashboard">
        <div className="avatar-name">
          <img src={userAvatar} alt="generic user avatar" /><img className="edit" src={edit} alt="edit" />
          <h6>Zack Dorman</h6>
        </div>
        <div className="buttons">
          <div className="button-icon-bg">
            <img src={ppl} alt="network" />
          </div>
          <Link to="/projects">
            <div className="button-icon-bg">
              <img src={projects} alt="projects" />
            </div>
          </Link>
          <div className="button-icon-bg">
            <img src={calendar} alt="calendar" />
          </div>
          <div className="button-icon-bg">
            <img src={profile} alt="profile link" />
          </div>
          <div className="button-icon-bg">
            <img src={addPerson} alt="add person" />
          </div>
        </div>
        <hr />
        <div>
          <h6>You've Got Mail</h6>
          {/* Once we have message data to fetch, this can use .map to form an array of images, and odd-numbered indeces can be tagged to have CSS reverse the speech bubble image per the wireframe. */}
          <img className="speech-bubble" src={speechBubble} alt="message icon" />
          <img className="speech-bubble"  src={speechBubble} alt="message icon" />
          <img className="speech-bubble"  src={speechBubble} alt="message icon" />
        </div>
        <hr />
        <div>
          <h6>What's In Store...</h6>
          <div className="task-panel">
            <ul>
              {/* Contents here will also be converted from real data using .map. */}
              <li>Task Name</li>
              <p>Project Name / Assigned By ___ /Due: ___ via ___</p>
              <li>Task Name</li>
              <p>Project Name / Assigned By ___ /Due: ___ via ___</p>

              <li>Task Name</li>
              <p>Project Name / Assigned By ___ /Due: ___ via ___</p>

            </ul>
          </div>
        </div>
        <hr />
        <div>
          <h6>Your Next Meeting</h6>
          <div className="meeting-panel">
            <h6>Daily Stand Up for Earth Hero</h6>
            <p>In 42 Minutes // Time + Date of Meeting</p>
          </div>
        </div>
        <hr />
        <div>
          <h6>Next Rack: World Changer</h6>    
          <div className="rank-panel">
            <p>15/100 POINTS</p>
          </div>      
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
