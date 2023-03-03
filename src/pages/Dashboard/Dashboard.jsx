import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import addPerson from "../../images/add-person/72.png";
import projects from "../../images/projects/72.png";
import calendar from "../../images/calendar/72.png";
import edit from "../../images/edit/24.png";
import ppl from "../../images/ppl/72.png";
import profileImg from "../../images/profile/72.png";
import userAvatar from "../../images/user-profile/72.png";
import * as projectsAPI from "../../utilities/projects-api";
import * as profilesAPI from "../../utilities/profiles-api";

const Dashboard = ({ user, profile, setProfile }) => {
  return (
    <div>
      <div className="dashboard">
        <div className="avatar-name">
          <div className="images">
            <img className="avatar" src={profile?.photo ? profile.photo : userAvatar } alt="user avatar" />
            <img className="edit" src={edit} alt="edit" />
          </div>
          <h6>{profile?.name}</h6>
        </div>
        <div className="buttons">
          <div className="button-icon-bg purple-bg">
            <img src={ppl} alt="network" />
            <span className="button-sub-text">Community</span>
          </div>
          <Link to="/projects">
            <div className="button-icon-bg purple-bg">
              <img src={projects} alt="projects" />
              <span className="button-sub-text">Projects</span>
            </div>
          </Link>
          <div className="button-icon-bg purple-bg">
            <img src={calendar} alt="calendar" />
            <span className="button-sub-text">Calendar</span>
          </div>
          <div className="button-icon-bg purple-bg">
            <img src={profileImg} alt="profile link" />
            <span className="button-sub-text">Mentors</span>
          </div>
          <div className="button-icon-bg purple-bg">
            <img src={addPerson} alt="add person" />
            <span className="button-sub-text">Invite</span>
          </div>
        </div>
        <hr />
        <div>
          <h6>What's In Store...</h6>
          <div className="task-panel green-bg">
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
          <div className="meeting-panel purple-bg">
            <h6>Daily Stand Up for Earth Hero</h6>
            <p>In 42 Minutes // Time + Date of Meeting</p>
          </div>
        </div>
        <hr />
        <div>
          <h6>Next Rank: World Changer</h6>
          <div className="rank-panel green-bg">
            <p>15/100 POINTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
