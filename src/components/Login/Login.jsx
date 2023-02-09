import { googleLogin } from "../../services/firebase";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

const Login = ({ setUser }) => {
  return (
    <div className="container" style={{ marginTop: 50 }}>
      <div className="row">
        <h3>Welcome to "App Name"</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-4">
          <img
            src="https://api.deepai.org/job-view-file/1d8a0872-105d-4629-819f-4886b757470f/outputs/output.jpg"
            className="rounded"
            alt="otter working on a keyboard"
            style={{ height: 118.5, width: 118.5 }}
          />
        </div>
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
            <i class="fa-brands fa-google"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
