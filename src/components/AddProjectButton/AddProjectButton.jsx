import { Link } from "react-router-dom";
import "./AddProjectButton.css";

const AddProjectButton = () => {
  return (
    <Link to="/projects/new">
      <div id="addProjectButton" >
        <span>+</span>
      </div>
    </Link>
  )
}

export default AddProjectButton;