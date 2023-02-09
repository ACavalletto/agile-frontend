import SignUpForm from "../SignUpForm/SignUpForm";
import { googleLogin } from "../../services/firebase";

const SignUp = () => {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <h3>First lets get you signed up</h3>
      <SignUpForm />
      <div className="row">
        <div className="col-3 text-left">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              googleLogin();
            }}
          >
            <i class="fa-brands fa-google"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
