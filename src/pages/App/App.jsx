import { auth } from "../../services/firebase";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import Dashboard from "../Dashboard/Dashboard";
import NewProject from "../NewProject/NewProject";
import NewProfilePage from "../Profile/NewProfilePage";
import Onboarding from "../Onboarding/Onboarding";
import ProjectDetail from "../ProjectDetail/ProjectDetail";
import ProjectList from "../ProjectList/ProjectList";
import ProfilePage from "../ProfilePage/ProfilePage";
import * as profilesAPI from "../../utilities/profiles-api";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(function() {
    if (!profile) {
      (async function getuserProfile() {
        // Hardcoded ID until onboarding and user --> profile creation is complete
        const profileInfo = await profilesAPI.getLoggedInUserProfile("63f90d04c90e284bd7ddbca8");
        console.log(profileInfo)
        setProfile(profileInfo)
      })()
    }
  })

  const URL = "https://launchpad-backend.herokuapp.com/";

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Dashboard user={user} profile={profile} />}
            />
            <Route
              path="/onboarding"
              element={<Onboarding user={user} URL={URL} />}
            />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/profilepage" element={<NewProfilePage user={user} />} />
            <Route path="/projects" element={<ProjectList user={user} />} />
            <Route path="/projects/new" element={<NewProject user={user} profile={profile} />} />
            <Route path="/projects/:projectID" element={<ProjectDetail user={user} />} /> {/* Dummy route for temporary building purposes*/}
            <Route
              path="/projects/:projectId"
              element={<ProjectDetail user={user} />}
            />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<AuthPage user={user} URL={URL} />} />
        </Routes>
      )}
    </main>
  );
}

export default App;
