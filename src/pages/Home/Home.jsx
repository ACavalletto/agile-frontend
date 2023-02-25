import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../services/firebase";

const Home = ({ user, profile }) => {
  return (
      <div>
        <h1>Welcome, {profile.name}!</h1>
        <Link to="/projects">See Projects</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
        <br />
        <Link to="/projects/new">New Project</Link>
        <br />
        <Link to="/profile">Profile</Link>
        <br />
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
  );
};

export default Home;
