import "./UserSocials.css";

const UserSocials = ({ onUpdateField, profileData }) => {
  function handleClick(e) {
    e.preventDefault();
    if (e.target.nodeName === "I") {
      e.target.parentElement.style.visibility = "hidden";
      e.target.parentElement.nextElementSibling.style.visibility = "visible";
    } else {
      e.target.style.visibility = "hidden";
      e.target.nextElementSibling.style.visibility = "visible";
    }
  }
  function textFocusOut(e) {
    e.preventDefault();
    e.target.style.visibility = "hidden";
    e.target.previousElementSibling.style.visibility = "visible";
  }
  return (
    <div className="container">
      <h5 className="mt-5">
        {" "}
        We're almost done, promise!
        <br />
        Let's connect...
      </h5>
      <form className="mt-4" id="socialsForm">
        <div id="linkedinDiv">
          <button className="rounded" id="linkedinBtn" onClick={handleClick}>
            <i className="fa-brands fa-linkedin"></i>
          </button>
          <input
            {...(profileData.linkedin !== ""
              ? { value: profileData.linkedin }
              : {})}
            type="text"
            name="linkedin"
            id="linkedin"
            className="rounded"
            onChange={onUpdateField}
            onBlur={textFocusOut}
            placeholder="LinkedIn"
            style={{ visibility: "hidden" }}
          />
        </div>
        <div id="githubDiv">
          <button id="githubBtn" className="rounded" onClick={handleClick}>
            <i className="fa-brands fa-github" style={{ color: "black" }}></i>
          </button>
          <input
            {...(profileData.github !== ""
              ? { value: profileData.github }
              : {})}
            type="text"
            name="github"
            id="github"
            className="rounded"
            onChange={onUpdateField}
            onBlur={textFocusOut}
            placeholder="Github"
            style={{ visibility: "hidden" }}
          />
        </div>
        <div id="twitterDiv">
          <button id="twitterBtn" className="rounded" onClick={handleClick}>
            <i className="fa-brands fa-twitter"></i>
          </button>
          <input
            {...(profileData.twitter !== ""
              ? { value: profileData.twitter }
              : {})}
            type="text"
            name="twitter"
            id="twitter"
            className="rounded"
            onChange={onUpdateField}
            onBlur={textFocusOut}
            placeholder="Twitter"
            style={{ visibility: "hidden" }}
          />
        </div>
        <div id="portfolioDiv">
          <button id="portfolioBtn" className="rounded" onClick={handleClick}>
            Portfolio
          </button>
          <input
            {...(profileData.portfolio !== ""
              ? { value: profileData.portfolio }
              : {})}
            type="text"
            name="portfolio"
            id="portfolio"
            className="rounded"
            onChange={onUpdateField}
            onBlur={textFocusOut}
            placeholder="Portfolio"
            style={{ visibility: "hidden" }}
          />
        </div>
      </form>
    </div>
  );
};

export default UserSocials;
