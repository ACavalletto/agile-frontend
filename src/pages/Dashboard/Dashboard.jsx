import { Link } from "react-router-dom";

import HamburgerMenu from "../../components/HamburgerMenu/HamburgerMenu";
import ImageAndName from "../../components/ImageAndName/ImageAndName";

const Dashboard = (props) => {
  return (
    <div>
      <HamburgerMenu />
      <Link to="/" >Home</Link><br />
      Dashboard
      <ImageAndName />
    </div>
  );
};

export default Dashboard;
