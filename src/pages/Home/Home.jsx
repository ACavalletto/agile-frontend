import { Link } from "react-router-dom";
import { logout } from "../../services/firebase";
import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";

const Home = ({ user }) => {
  return (
    <div>
      <HamburgerMenu />
      <h1>Home</h1>
      <Link to="/projects">See Projects</Link>
      <br />
      <Link to="/projects/new">New Project</Link>
      <br />
      <Link to="/profile">Profile</Link>
      <br />
      <button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
