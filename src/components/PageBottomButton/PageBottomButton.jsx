import { Link } from "react-router-dom";
import "./PageBottomButton.css";

const PageBottomButton = ({ buttonText }) => {
    return (
        <Link to="/">
            <div className="container d-flex flex-wrap justify-content-center align-items-center" id="pageBottomButton">
                <p>{ buttonText }</p>
            </div>
        </Link>
    )
}

export default PageBottomButton;