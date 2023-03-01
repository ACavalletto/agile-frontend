import { auth } from "../../services/firebase";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import {
  checkUserExists,
  createProfile,
  getLoggedInUserProfile,
} from "../../utilities/profiles-api";
import NavBar from "../../components/NavBar/NavBar";
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
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user));
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      async function userCheck(uid) {
        const response = await checkUserExists(uid);
        const profileResponse = await getLoggedInUserProfile(uid);
        // May not have users name depending on how they sign up here.
        console.log(profileResponse)
        if (!response) {
          let profileData = {
            uid: uid,
          };
          createProfile(profileData);
        } else {
          setProfile(profileResponse);
        }
      }
      userCheck(user.uid);
    }
  }, [user]);

  const URL = "https://launchpad-backend.herokuapp.com/";

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Dashboard user={user} />}
            />
            {profile?.newUser && (
              <Route
                path="/onboarding"
                element={<Onboarding user={user} URL={URL} />}
              />
            )}
            <Route path="/profile" element={<ProfilePage user={user} profile={profile} />} />
            <Route path="/projects" element={<ProjectList user={user} />} />
            <Route path="/projects/new" element={<NewProject user={user} profile={profile} />} />
            <Route
              path="/projects/:id"
              element={<ProjectDetail user={user} profile={profile} />}
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
