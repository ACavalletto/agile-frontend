import { auth } from "../../services/firebase";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import AuthPage from "../AuthPage/AuthPage";
import ProjectList from "../ProjectList/ProjectList";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import ProfilePage from "../ProfilePage/ProfilePage";
import NewProject from "../NewProject/NewProject";
import Onboarding from "../Onboarding/Onboarding";
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
      {user ? (
        <Routes>
          <Route
            path="/"
            // Home is just a placeholder for now, since we haven't decided how we want to route unlogged-in users

            element={<Home user={user} />}
          />
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route path="/projects" element={<ProjectList user={user} />} />
          <Route path="/projects/new" element={<NewProject user={user} />} />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetail user={user} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<AuthPage user={user} />} />
          <Route path="/onboarding" element={<Onboarding user={user} />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
