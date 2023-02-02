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
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
    } else if (form.password.length > 8) {
      setError("Password must be at least 8 characters")
    }else {
      setError("")
      emailSignup(form.email, form.password);
    }
  } 

  return (
    <div className={style}>
      <form onSubmit={onSubmitForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onUpdateField}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onUpdateField}
          required
        />
        <br />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
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