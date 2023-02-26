import "./Role.css";

const Role = ({ handleCheckboxChange, onUpdateField, profileData }) => {
  const checked = "checked";
  return (
    <div className="container">
      <h5 className="mt-5">
        Before you make your mark in the world, <br /> what is your story
      </h5>
      <form className="mt-4 justify-content-start ">
        <h6>What is your artistry?</h6>
        <br />
        <input
          {...(profileData.role === "Software Engineering" ? { checked } : {})}
          type="radio"
          name="role"
          value="Software Engineering"
          id="softwareEngineering"
          className="form-check-input"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="softwareEngineering">Software Engineering</label>
        <br />
        <input
          {...(profileData.role === "User Experience" ? { checked } : {})}
          type="radio"
          name="role"
          value="User Experience"
          id="userExperience"
          className="form-check-input"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="userExperience">User Experience</label>
        <br />
        <input
          {...(profileData.role === "Visual Design" ? { checked } : {})}
          type="radio"
          name="role"
          value="Visual Design"
          id="visualDesign"
          className="form-check-input"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="visualDesign">Visual Design</label>
        <br />
        <input
          {...(profileData.role === "Product Management" ? { checked } : {})}
          type="radio"
          name="role"
          value="Product Management"
          id="productManagement"
          className="form-check-input"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="productManagement">Product Management</label>
        <br />
        <input
          {...(profileData.role === "Project Management" ? { checked } : {})}
          type="radio"
          name="role"
          value="Project Management"
          id="projectManagement"
          className="form-check-input text-left"
          onChange={handleCheckboxChange}
        />
        <label htmlFor="projectManagement">Project Management</label>
        <br />
        <label htmlFor="city">What city are you from? </label>
        <br />
        <input
          {...(profileData.city !== "" ? { value: profileData.city } : {})}
          type="text"
          name="city"
          id="city"
          className="rounded"
          onChange={onUpdateField}
        />
      </form>
    </div>
  );
};

export default Role;
