import { Link } from "react-router-dom";
import PageBottomButton from "../../components/PageBottomButton/PageBottomButton";

const ProjectList = ({ user, setUser }) => {

    return (
        <div>
            <h1>ProjectList</h1>
            <Link to="/projects/new">Home</Link>
            <button onClick={() => { setUser(false) }}>Logout</button>
            <PageBottomButton buttonText="+ Add New Project" />
        </div>
    )
}

export default ProjectList;