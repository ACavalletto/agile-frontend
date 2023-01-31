import { googleLogin } from "../../services/firebase";
import { redirect, Link } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

const Login = ({ handleToggle }) => {

  return (
    <div>
      {/*Form for email and password login. Still need to setup this auth in firebase file */}
      <LoginForm />

      {/*This onClick function will login a user via the google login popup and redirect to whatever
        homepage route we setup so route is changeable. This is also using react-router-dom if we
        decide to use it. */}
      <button
        onClick={() => {
          googleLogin();
          return redirect("/");
        }}
      >
        Sign in with Google
      </button>
      {/* <Link to="" onClick={handleToggle}>New here? Sign up!</Link> */}
      <br />
      <label className="switch">
        <input type="checkbox" onClick={handleToggle}/>
        <span className="slider round"></span>Login or Signup?
      </label>
    </div>
  )
};

export default Login;