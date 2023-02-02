import { Link } from "react-router-dom";

const ProjectDetail = ({ user, setUser }) => {

    return (
        <div>
            <h1>ProjectDetail</h1>
            <Link to="/">Home</Link>
            <button onClick={() => { setUser(false) }}>Logout</button>
        </div>
    )
}

export default ProjectDetail;