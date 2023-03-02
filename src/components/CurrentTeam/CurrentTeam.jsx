import MemberPhotoAndName from "../MemberPhotoAndName/MemberPhotoAndName";
import "./CurrentTeam.css";

function CurrentTeam ({ project }) {

  return (
    <div className="current-team">
      <h6 className="purple-text">Current Team</h6>
      <div className="team-list">
        {project.members?.map(m => (
          <MemberPhotoAndName profile={m} />
        ))}
      </div>
    </div>
  )
}

export default CurrentTeam;