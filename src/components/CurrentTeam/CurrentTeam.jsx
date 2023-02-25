import "./CurrentTeam.css";
import userAvatar from "../../images/user-profile/72.png";

function CurrentTeam ({ project }) {

  return (
    <div className="current-team">
      {project.members?.forEach(m => {
        <div className="member">
          <div className="member-image"><img src={m.image} alt="user avatar" /></div>
          <div className="member-name">{m.name}</div>
        </div>
      })}
      {/* Dummy data for design */}
      <div className="member">
        <div className="member-image">
          <img src={userAvatar} alt="generic user avatar" />
        </div>
        <div className="member-name">Alex Barbosa</div>
      </div>
      <div className="member">
        <div className="member-image">
          <img src={userAvatar} alt="generic user avatar" />
        </div>
        <div className="member-name">Arnaud Cavalletto</div>
      </div>
      <div className="member">
        <div className="member-image">
          <img src={userAvatar} alt="generic user avatar" />
        </div>
        <div className="member-name">Jenna Parker</div>
      </div>
      <div className="member">
        <div className="member-image">
          <img src={userAvatar} alt="generic user avatar" />
        </div>
        <div className="member-name">Jordan Burgess</div>
      </div>
      <div className="member">
        <div className="member-image">
          <img src={userAvatar} alt="generic user avatar" />
        </div>
        <div className="member-name">Mair Ahmad</div>
      </div>
      <div className="member">
        <div className="member-image">
          <img src={userAvatar} alt="generic user avatar" />
        </div>
        <div className="member-name">Mason Lancaster</div>
      </div>
      <div className="member">
        <div className="member-image">
          <img src={userAvatar} alt="generic user avatar" />
        </div>
        <div className="member-name">Megan Linhart</div>
      </div>
      <div className="member">
        <div className="member-image">
          <img src={userAvatar} alt="generic user avatar" />
        </div>
        <div className="member-name">Sara Ashary</div>
      </div>
      {/* End dummy data for design */}
    </div>
  )
}

export default CurrentTeam;