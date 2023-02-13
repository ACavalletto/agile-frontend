import { useState } from "react";
import "./UserInterests.css";

const UserInterests = ({ onUpdateArray }) => {
    const topics = [
        "Art",
        "Travel",
        "Social",
        "Religion",
        "Media",
        "Finance",
        "Sports",
        "Education",
        "Medical",
        "Culture",
        "Career",
        "Social Justice",
        "Tech",
        "Environment"
    ]
    const selectedInterests = [];

    function handleSelection(e) {
        e.target.classList.toggle("selected");
        selectedInterests.includes(e.target.innerText) ? 
            selectedInterests.splice(selectedInterests.indexOf(e.target.innerText), 1) 
            :
            selectedInterests.push(e.target.innerText);
        onUpdateArray(e, selectedInterests);
    }

    return (
        <div className="container">
            <h5 className="mt-5">
                {" "}
                Last step, what're topics that give you meaning?
            </h5>
            <div className="topic-grid mt-4 d-flex flex-wrap justify-content-center">
                {topics.map(t => <div className="btn btn-light topic-btn d-flex justify-content-center align-items-center interests" key={t} onClick={handleSelection}>{t}</div>)}
            </div>
        </div>
    )
}

export default UserInterests;