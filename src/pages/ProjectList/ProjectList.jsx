import { Link } from "react-router-dom";
import PageBottomButton from "../../components/PageBottomButton/PageBottomButton";

const ProjectList = ({ user, setUser }) => {

    return (
        <div>
            <h1>ProjectList</h1>
            <PageBottomButton buttonText="+ Add New Project" link="/projects/new" />
        </div>
    )
}

export default ProjectList;