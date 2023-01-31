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
            <button onClick = {()=> handleToggle()}>Toggle Login</button>
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
                        <SignUp />
                    </div>
                </>
            }
        </main>
    )
}

export default AuthPage;