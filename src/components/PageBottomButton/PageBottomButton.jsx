import { Link } from "react-router-dom";
import "./PageBottomButton.css";

const PageBottomButton = ({ buttonText, link }) => {
    return (
        <Link to={link}>
            <div className="container d-flex flex-wrap justify-content-center align-items-center" id="pageBottomButton">
                <p>{ buttonText }</p>
            </div>
        </Link>
    )
}

export default PageBottomButton;