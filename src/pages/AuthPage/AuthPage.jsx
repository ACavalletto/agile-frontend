// Helmet allows us to disconnect our other stylesheets and partials (e.g. a nav bar) from this AuthPage and its components (e.g, so we don't see a nav bar before login)
import {Helmet} from "react-helmet";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";

function AuthPage({ setUser }) {
    const [login, setLogin] = useState(true)

    function handleToggle() {
        setLogin(!login);
    }

    return (
        <main className="auth-page">
            <p>AuthPage</p>
            <Helmet>
                <link rel="stylesheet" href="AuthPage.css" />
            </Helmet>
            { login ? 
                <>
                    <div className="auth-page-form">
                        <h1>Log In</h1>
                        <Login setUser={setUser}/>
                    </div>
                    <Link to="" onClick={handleToggle}>New here? Sign up!</Link>

                </>
                :
                <>
                    <div className="auth-page-form">
                        <h1>Sign Up</h1>
                        <SignUp />
                    </div>
                    <Link to="" onClick={handleToggle}>Already have an account? Log in!</Link>
                </>
            }

        </main>
    )
}

export default AuthPage;