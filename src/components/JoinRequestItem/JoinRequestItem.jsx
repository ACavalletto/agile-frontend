import { Link } from "react-router-dom";
import {updateProject} from "../../utilities/projects-api";
import MemberPhotoAndName from "../MemberPhotoAndName/MemberPhotoAndName";
import "./JoinRequestItem.css";

function JoinRequestItem ({ project, setProject, profile }) {

  function handleApprove() {
    const tempProject = {...project};
    tempProject.members.push(profile.id);
    setProject(tempProject);
    updateProject(tempProject);
  }
  function handleDeny() {
    const tempProject = {...project};
    const idx = tempProject.joinRequests.findIndex((p) => (p.id === profile.id));
    tempProject.joinRequests.splice(idx, 1);
    setProject(tempProject);
    updateProject(tempProject);
  }
  async function updateProject(tempProject) {
    const updatedProject = await updateProject(project._id, tempProject);
    setProject(updatedProject);
    console.log(updatedProject);
  }

  return (
    <div className="join-request-item">
      <Link to="">
        <MemberPhotoAndName profile={profile} />
      </Link>
      <div className="approve-deny-buttons">
        <span onClick={handleApprove}>✅</span>
        <span onClick={handleDeny}>❌</span>
      </div>
    </div>
  )
}

export default JoinRequestItem;