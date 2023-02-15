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
            src="https://cdn.vectorstock.com/i/1000x1000/02/30/group-of-young-business-people-working-together-vector-19510230.webp"
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
