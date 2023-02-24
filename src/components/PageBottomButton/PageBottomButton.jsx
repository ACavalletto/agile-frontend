import { Link } from "react-router-dom";
import "./PageBottomButton.css";

const PageBottomButton = ({ buttonText, link, onClick }) => {
  return (
    <Link to={link || ""}>
      <div className="container d-flex flex-wrap justify-content-center align-items-center" id="pageBottomButton" onClick={onClick || ""}>
        <p>{ buttonText }</p>
      </div>
    </Link>
  )
}

export default PageBottomButton;