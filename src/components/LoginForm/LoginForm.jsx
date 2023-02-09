import { React, useState } from "react";
import { emailLogin } from "../../services/firebase";
import style from "./LoginForm.css";

const LoginForm = ({ setUser }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Invalid entry");
    } else {
      setError("");
      emailLogin(form.email, form.password);
      setUser(true);
    }
  };

  return (
    <div className={style}>
      <div className="row">
        <form onSubmit={onSubmitForm}>
          <div className="col-6 text-left">
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={onUpdateField}
              required
            />
          </div>
          <div className="col-6 text-left">
            <input
              type="password"
              name="password"
              placeholder="Password"
              min="8"
              value={form.password}
              onChange={onUpdateField}
              required
            />
          </div>
          {error && <div>{error}</div>}
          <div className="col-3 text-left">
            <button class="btn btn-primary" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
