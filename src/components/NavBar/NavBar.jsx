import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { logout } from "../../services/firebase";
import "./NavBar.css";
import genericUserPhoto from "../../images/genericUserPhoto/genericUserPhoto.png";
import launchPadLogo from "../../images/launch-pad-logos/title_logo_72.png";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="light" id="navbar">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <img src={launchPadLogo} />
      <div className="userPhoto">
        <img src={genericUserPhoto} />
      </div>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Dashboard</Nav.Link>
          <Nav.Link href="/projects">Find Projects</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/">Settings</Nav.Link>
          <Nav.Link href="/" onClick={() => {
            logout();
          }}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
