import { Link } from "react-router-dom";
import "./Dashboard.css";
import addPerson from "../../images/add-person/72.png";
import projects from "../../images/projects/72.png";
import calendar from "../../images/calendar/72.png";
import edit from "../../images/edit/24.png";
import ppl from "../../images/ppl/72.png";
import profile from "../../images/profile/72.png";
import userAvatar from "../../images/user-profile/72.png";
import * as projectsAPI from "../../utilities/projects-api";
import * as profilesAPI from "../../utilities/profiles-api";

const Dashboard = ({ user }) => {
  return (
    <div>
      <div className="dashboard">
        <div className="avatar-name">
          <img src={userAvatar} alt="generic user avatar" />
          <img className="edit" src={edit} alt="edit" />
          <h6>Zack Dorman</h6>
        </div>
        <div className="buttons">
          <div className="button-icon-bg">
            <img src={ppl} alt="network" className="button-icon"/>
          </div>
          <Link to="/projects">
            <div className="button-icon-bg">
              <img src={projects} alt="projects" className="button-icon"/>
            </div>
          </Link>
          <div className="button-icon-bg">
            <img src={calendar} alt="calendar" className="button-icon"/>
          </div>
          <div className="button-icon-bg">
            <img src={profile} alt="profile link" className="button-icon"/>
          </div>
          <div className="button-icon-bg">
            <img src={addPerson} alt="add person" className="button-icon"/>
          </div>
        </div>
        <hr />
        <div>
          <h6>What's In Store...</h6>
          <div className="task-panel">
            <div className="task-panel-list">
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
            <div className="enter-tasks-button"> {">"} </div>
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
