import { React, useState } from "react";
import { emailLogin } from "../../services/firebase";
import style from "./LoginForm.css";

const LoginForm = () => {
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
    }
  } 

  return (
    <div className={style}>
      <form onSubmit={onSubmitForm}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onUpdateField}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
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