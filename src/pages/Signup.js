import React from 'react'
import SignUpForm from '../components/SignUpForm'
import { redirect } from 'react-router-dom'
import { googleLogin } from '../services/firebase'

const Signup = () => {
  return (
    <div>
          <SignUpForm />
          <button onClick={() => {
              googleLogin();
              return redirect("/homepage")
          }}>Sign in with Google</button>
    </div>
  )
}

export default Signup