import { useState } from "react";
import { emailSignup } from "../../services/firebase";



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
    e.preventDefault()
    emailSignup(form.email, form.password);
    
  } 

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={onUpdateField}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={onUpdateField}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onUpdateField}
          required
        />
        <button type="submit">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUpForm;