import "./MemberPhotoAndName.css";
import userAvatar from "../../images/user-profile/72.png";

function MemberPhotoAndName({ profile }) {
  return (
    <div className="member">
      <div className="member-image">
        <img src={profile.photo ? `url("${profile.photo}")` : userAvatar } alt="user photo" />
      </div>
      <div className="member-name">{profile.name}</div>
    </div>
  )
}

export default MemberPhotoAndName;