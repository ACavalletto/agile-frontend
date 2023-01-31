import SignUpForm from "../SignUpForm/SignUpForm"
import { redirect } from "react-router-dom"
import { googleLogin } from "../../services/firebase"

const SignUp = ({ handleToggle }) => {
  return (
    <div>
      <SignUpForm />
      <button onClick={() => {
          googleLogin();
          return redirect("/")
      }}>Sign in with Google</button>
      {/* <Link to="" onClick={handleToggle}>New here? Sign up!</Link> */}
      <br />
      {/* This toggle switch is a placeholder until we get our routing figured out and can use the <Link /> feature above */}
      <label className="switch">
        <input type="checkbox" onClick={handleToggle}/>
        <span className="slider round"></span>Login or Signup?
      </label>
    </div>
  )
}

export default SignUp