import { googleLogin } from "../../services/firebase";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";
import welcomeHeading from  "./images/welcomeHeading.png";
import logo from "./images/launchpadLogo.png";
import puzzle from "./images/puzzle.png";
import magnify from "./images/magnify.png";
import laptop from "./images/laptop.png";
import cogs from "./images/cogs.png";
import mail from "./images/mail.png"

const Login = ({ user, URL, setUser }) => {
  async function newUser() {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        name: "",
        role: "",
        city: "",
        bio: "",
        twitter: "",
        github: "",
        linkedin: "",
        portfolio: "",
        interests: [],
        skills: [],
      },
    };
    const response = await fetch(URL + "/users/" + user.uid + "/", options);
  }
  return (
    <div className="container-login" style={{ marginTop: 50 }}>
      <img className="background" id="puzzle" src={puzzle}/>
      <img className="background" id="magnify" src={magnify}/>
      <div className="row">
        <img id="launchPad" src={welcomeHeading}/><img id="logo" src={logo}/>
      </div>
      <div className="row justify-content-center">
      </div>
      <div className="row">
        <div className="col-3 text-left">Sign in</div>
      </div>
      <LoginForm setUser={setUser} />
      <div className="row">
        <div className="col-3 text-left">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              googleLogin();
            }}
          >
            <i className="fa-brands fa-google"></i>
          </button>
        </div>
      </div>
      <img id="laptop" className="background" src={laptop}/>
      <img id="cogs" className="background" src={cogs}/>
      <img id="mail" className="background" src={mail}/>
    </div>
  );
};

export default Login;
