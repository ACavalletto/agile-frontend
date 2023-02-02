import { Link } from "react-router-dom";

const Home = ({ user, setUser }) => {

    return (
        <div>
            {console.log(user.uid)}
            <h1>Home</h1>
            <Link to="/projects" >See Projects</Link>
            <button onClick={() => { setUser(false) }}>Logout</button>
        </div>
    )
}

export default Home;