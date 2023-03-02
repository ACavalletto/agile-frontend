import { useState } from "react";
import { ToggleButton } from "react-bootstrap";
import { ToggleButtonGroup } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import "./UserInterests.css";

const UserInterests = ({ onUpdateArray, profileData }) => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
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
    "Environment",
  ];


  const animatedComponents = makeAnimated();
  const skillsOptions = [
    { name: "skills", value: "adobe", label: "Adobe Design Suite" },
    { name: "skills", value: "angular", label: "Angular" },
    { name: "skills", value: "css", label: "CSS" },
    { name: "skills", value: "django", label: "Django" },
    { name: "skills", value: "express", label: "Express" },
    { name: "skills", value: "figma", label: "Figma" },
    { name: "skills", value: "html", label: "HTML" },
    { name: "skills", value: "javascript", label: "JavaScript" },
    { name: "skills", value: "mongodb", label: "MongoDB" },
    { name: "skills", value: "mongoose", label: "Mongoose" },
    { name: "skills", value: "node", label: "Node" },
    { name: "skills", value: "postgresql", label: "PostgreSQL" },
    { name: "skills", value: "python", label: "Python" },
    { name: "skills", value: "react", label: "React" },
    { name: "skills", value: "ruby", label: "Ruby" },
    { name: "skills", value: "ruby-rails", label: "Ruby on Rails" },
    { name: "skills", value: "vue", label: "Vue" },
  ];
  const checked = "checked";

  function handleTopicSelection(e) {
    const t = selectedInterests;
    t.includes(e.target.innerText)
      ? t.splice(t.indexOf(e.target.innerText), 1)
      : t.push(e.target.innerText);
    setSelectedInterests(t);
    onUpdateArray("interests", t);
    console.log(t);
  }

  function handleCreateSelectChange(choices) {
    const s = choices.map((c) => c.value.toLowerCase());
    setSelectedSkills(s);
    onUpdateArray("skills", s);
    console.log(s);
  }

  function changeTopicBG (topic) {

  }

  return (
    <div className="container" id="interestsContainer">
      <h5> What tech do you want to work with?</h5>
      <div id="profileSkills">
        <CreatableSelect
          className="basic-multi-select"
          classNamePrefix="select"
          name="skills"
          isMulti
          components={animatedComponents}
          options={skillsOptions}
          onChange={handleCreateSelectChange}
        />
      </div>
      <h5>
        {" "}
        Last step, what're topics that give you meaning?
      </h5>
      <ToggleButtonGroup
        className="topic-grid mt-4 d-flex flex-wrap justify-content-center"
        type="checkbox"
        value={value}
        onChange={handleChange}
      >
        {topics.map((t, idx) => (
          <ToggleButton
            //{...(profileData.interests.includes(t) ? { checked } : {})}
            className={"btn btn-light topic-btn d-flex justify-content-center align-items-center interests " + t}
          
            id={t}
            key={idx}
            value={t}
            onClick={handleTopicSelection}
            // bsPrefix={t}
       
            // style = {{backgroundImage:URL('./topiclogos/'+t+'.png')}}
          >
            {console.log(t)}
            {t}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

    </div>
  );
};

export default UserInterests;
