import { Link } from "react-router-dom";
import * as projectsAPI from "../../utilities/projects-api";
import MemberPhotoAndName from "../MemberPhotoAndName/MemberPhotoAndName"; 
import "./JoinRequestItem.css";

function JoinRequestItem ({ project, setProject, profile }) {


  function removeFromJoinRequests() {
    const tempProject = {...project};
    const idx = tempProject.joinRequests.findIndex((p) => (p.id === profile.id));
    tempProject.joinRequests.splice(idx, 1);
    // setProject(tempProject);
    return tempProject;
  }
  function handleApprove() {
    const tempProject = removeFromJoinRequests();
    // Need to check if member is already in project.members so they're not added twice. Theoretically this isn't necessary because there's no way they'd appear on this list if they already were a project member, but just to cover bases
    if (project.members.filter(p => p._id === profile.id).length === 0) { // This is not a typo. In the joinRequest member's profile that gets passed in, it's "id" not "_id" (see JoinRequestButton.jsx ~ line 10)
      tempProject.members.push(profile.id); 
    }
    updateProject(tempProject);
  }
  function handleDeny() {
    const tempProject = removeFromJoinRequests();
    updateProject(tempProject);
  }
  async function updateProject(tempProject) {
    const updatedProject = await projectsAPI.updateProject(project._id, tempProject);
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