import { Link } from "react-router-dom";

const ProjectList = ({ user, setUser }) => {

    return (
        <div>
            <h1>ProjectList</h1>
            <Link to="/">Home</Link>
            <button onClick={() => { setUser(false) }}>Logout</button>
        </div>
    )
}

export default ProjectList;