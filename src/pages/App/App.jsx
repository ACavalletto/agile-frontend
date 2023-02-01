import { auth } from "../../services/firebase";
import { useState, useEffect } from "react";
import Home from '../Home/Home';
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
        // Home is just a placeholder for now, as I'm unsure how to want to route unlogged-in users
        <Home user={user} />
      : 
        <AuthPage />
      }
    </main>
  );
}

export default App;
