import { useState } from "react";
import * as yup from "yup";

const SignUpForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onUpdateField = e => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = e => {
    e.preventDefault();
  }

  let schema = yup.object().shape({
    email: yup.string()
      .email("Invalid email address")
      .required("Required"),
    password: yup.string()
      .required("No password Provided")
      .min(8, "Password must be at least 8 characters long")
  })  

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={onUpdateField}
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={onUpdateField}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;