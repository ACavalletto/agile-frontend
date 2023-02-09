import { Link } from "react-router-dom";

import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import ImageAndName from "../../components/ImageAndName/ImageAndName";
import "./Dashboard.css"
import addPerson from "../../images/add-person/72.png";
import blocks from "../../images/blocks/72.png";
import calendar from "../../images/calendar/72.png";
import edit from "../../images/edit/72.png";
import ppl from "../../images/ppl/72.png";
import profile from "../../images/profile/72.png";
import userAvatar from "../../images/user-profile/72.png";

const Dashboard = ({ user }) => {
  console.log(user)
  return (
    <div>
      <HamburgerMenu />
      <div className="dashboard">
        <div className="avatar-name">
          <img src={userAvatar} alt="generic user avatar" />
          <h6>Zack Dorman</h6>
        </div>
        <div className="buttons">
          <div className="button-icon-bg">
            <img src={ppl} alt="network" />
          </div>
          <div className="button-icon-bg">
            <img src={blocks} alt="network" />
          </div>
          <div className="button-icon-bg">
            <img src={calendar} alt="network" />
          </div>
          <div className="button-icon-bg">
            <img src={profile} alt="network" />
          </div>
          <div className="button-icon-bg">
            <img src={addPerson} alt="network" />
          </div>
        </div>
        <hr />
        <div>
          <h6>You've Got Mail</h6>

        </div>
        <hr />
        <div>
          <h6>What's In Store...</h6>

        </div>
        <hr />
        <div>
          <h6>Your Next Meeting</h6>
        </div>
        <hr />
        <div>
          <h6>Next Rack: World Changer</h6>          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
