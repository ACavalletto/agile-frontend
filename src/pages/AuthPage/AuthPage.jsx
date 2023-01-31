// Helmet allows us to disconnect our other stylesheets and partials (e.g. a nav bar) from this AuthPage and its components (so we don't see a nav bar before login)
import {Helmet} from "react-helmet";
import { useState } from "react";
import Login from "../../components/Login/Login";
import SignUp from "../../components/SignUp/SignUp";

function AuthPage() {
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
                        <Login handleToggle={handleToggle}/>
                    </div>
                </>
                :
                <>
                    <div className="auth-page-form">
                        <h1>Sign Up</h1>
                        <SignUp handleToggle={handleToggle}/>
                    </div>
                </>
            }
        </main>
    )
}

export default AuthPage;