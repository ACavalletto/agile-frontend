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
    </div>
  )
}

export default SignUp