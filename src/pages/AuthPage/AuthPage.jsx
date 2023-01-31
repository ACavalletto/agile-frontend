import {Helmet} from "react-helmet";
import { useState } from "react";
import Login from "../../components/Login/Login";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

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
                        <Login />
                    </div>
                </>
                :
                <>
                    <div className="auth-page-form">
                        <h1>Sign Up</h1>
                        <SignUpForm />
                    </div>
                </>
            }
        </main>
    )
}

export default AuthPage;