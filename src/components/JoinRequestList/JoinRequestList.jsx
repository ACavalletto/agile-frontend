import JoinRequestItem from "../JoinRequestItem/JoinRequestItem";
import "./JoinRequestList.css";

function JoinRequestList({ project, setProject }) {
  return (
    <div>
      <h6 className="purple-text">Members Requesting to Join Project</h6>
      <div className="team-list request-list">
        {project.joinRequests.map(p => (
          <JoinRequestItem project={project} setProject={setProject} profile={p} />
        ))}
      </div>
    </div>
  )
}

export default JoinRequestList;