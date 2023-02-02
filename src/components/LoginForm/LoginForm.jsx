import { React, useState } from "react";
import { emailLogin } from "../../services/firebase";
import style from "./LoginForm.css";

const LoginForm = ({ setUser }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState('')

  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = e => {
    e.preventDefault()
    if (!form.email || !form.password) {
      setError("Invalid entry");
    } else {
      setError("")
      emailLogin(form.email, form.password);
      setUser(true);
    }
  } 

  return (
    <div className={style}>
      <form onSubmit={onSubmitForm}>
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={onUpdateField}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          min = "8"
          value={form.password}
          onChange={onUpdateField}
          required
        />
        <br />
        {error && <div>{error}</div>}
        <br />
        <button type="submit">
          Log In
        </button>
      </form>
    </div>
  )
}

export default LoginForm;