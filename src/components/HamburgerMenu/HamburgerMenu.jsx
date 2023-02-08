import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h5 className="text-white h4">Collapsed Content</h5>
          <Link to="/home">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/projects">Projects</Link>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
