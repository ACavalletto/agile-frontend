import {updateProject} from "../../utilities/projects-api";
import "./JoinRequestButton.css";

function JoinRequestButton ({ project, setProject, profile, user }) {

  async function handleJoin(){
    const joiningProfile = {
      displayName: profile.name,
      photo: profile.photo,
      id: profile._id
    }
    const tempProject = {...project}
    if ("joinRequests" in tempProject) {
      if (tempProject.joinRequests.filter(p => p.id === profile._id).length === 0) {
        tempProject.joinRequests.push(joiningProfile)
      }
    } else {
      tempProject.joinRequests = [joiningProfile];
    }
    const updatedProject = await updateProject(project._id, tempProject);
    setProject(updatedProject);
  }

  return (
    <div className="join-request-button d-flex justify-content-center">
      <button className="green-bg" id="join-request-button" onClick={handleJoin}>Request to Join Project</button>
    </div>
  )
}

export default JoinRequestButton;