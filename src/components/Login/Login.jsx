import { googleLogin } from "../../services/firebase";
import { redirect } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  <div>
    {/*Form for email and password login. Still need to setup this auth in firebase file */}
    <LoginForm />

    {/*This onClick function will login a user via the google login popup and redirect to whatever
      homepage route we setup so route is changeable. This is also using react-router-dom if we
      decide to use it. */}
    <button
      onClick={() => {
        googleLogin();
        return redirect("/homepage");
      }}
    >
      Sign in with Google
    </button>
  </div>;
};

export default Login;
