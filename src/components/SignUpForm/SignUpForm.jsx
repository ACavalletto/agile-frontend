import { useState } from "react";
import { emailSignup } from "../../services/firebase";
import style from "./SignUpForm.css"



const SignUpForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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
    if (form.password != form.confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("")
      emailSignup(form.email, form.password);
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
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
          required
        />
        <br />
        {error && <div>{error}</div>}
        <br />
        <button type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUpForm;