import { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import { ToggleButtonGroup } from "react-bootstrap";
import "./UserInterests.css";

const UserInterests = ({ onUpdateArray }) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [value, setValue] = useState([]);
    const handleChange = (val) => setValue(val);
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

    function handleSelection(e) {
        const i = selectedInterests;
        i.includes(e.target.innerText) ? 
            i.splice(i.indexOf(e.target.innerText), 1) 
            :
            i.push(e.target.innerText);
        setSelectedInterests(i);
        onUpdateArray(e, selectedInterests);
        console.log(selectedInterests);
    }

    return (
        <div className="container">
            <h5 className="mt-5">
                {" "}
                Last step, what're topics that give you meaning?
            </h5>
            {/* <div className="topic-grid mt-4 d-flex flex-wrap justify-content-center">
                {topics.map(t => <div className="btn btn-light topic-btn d-flex justify-content-center align-items-center interests" key={t} onClick={handleSelection}>{t}</div>)}
            </div> */}
            <ToggleButtonGroup className="topic-grid mt-4 d-flex flex-wrap justify-content-center" type="checkbox" value={value} onChange={handleChange}>
                {topics.map((t, idx) => <ToggleButton className="btn btn-light topic-btn d-flex justify-content-center align-items-center interests" id={t} key={idx} value={idx} onClick={handleSelection}>{t}</ToggleButton>)}
            </ToggleButtonGroup>
            <h5 className="mt-5">
                {" "}
                What tech do you want to work with?
            </h5>
            
        </div>
    )
}

export default UserInterests;