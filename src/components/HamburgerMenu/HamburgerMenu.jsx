import { Link } from "react-router-dom";
const collapsible = (e) => {
  let target = e.target;
  console.log(target);
  let links = target.nextSibling;
  console.log(links);
  links.style.display === "block"
    ? (links.style.display = "none")
    : (links.style.display = "block");
};
const HamburgerMenu = () => {
  return (
    <div>
      <button onClick={collapsible}>HB</button>
      <div className="categoryLinks" style={{ display: "none" }}>
        <Link to="/home">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default HamburgerMenu;
