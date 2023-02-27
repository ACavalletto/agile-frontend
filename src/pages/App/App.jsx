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

  // async function userCheck(uid) {
  //   const response = await checkUserExists(uid);
  //   //const profileResponse = await getLoggedInUserProfile(user.uid)
  //   // May not have users name depending on how they sign up here.
  //   if (!response) {
  //     let profileData = {
  //       uid: user.uid,
  //     };
  //     createProfile(profileData);
  //     return !response;
  //   }//else if(response){
  //     //setProfile(profileResponse)
  //   //}
  // }

  const URL = "https://launchpad-backend.herokuapp.com/";

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route
              path="/"
              // Home is just a placeholder for now, since we haven't decided how we want to route unlogged-in users

              element={<Home user={user} />}
            />
            {!profile && (
              <Route
                path="/onboarding"
                element={<Onboarding user={user} URL={URL} />}
              />
            )}
            <Route path="/dashboard" element={<Dashboard user={user} />} />
            <Route path="/profile" element={<ProfilePage user={user} />} />
            <Route path="/projects" element={<ProjectList user={user} />} />
            <Route path="/projects/new" element={<NewProject user={user} />} />
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
