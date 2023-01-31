import { auth } from "../../services/firebase";
import { useState, useEffect } from "react";
import Provider from '../Provider/Provider';
import AuthPage from '../AuthPage/AuthPage';
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => {
      unsubscribe();
    };
  }, []); 

  return (
    <main className="App">
      <p>App.jsx</p>
      { user ? 
        <Provider />
      : 
        <AuthPage />
      }
    </main>
  );
}

export default App;
