import "./UserSocials.css";

const UserSocials = ({ onUpdateField }) => {
  function handleClick(e) {
    e.preventDefault();
    console.log(e.target);
    e.target.style.visibility = "hidden";
    e.target.nextSibling.style.visibility = "visible";
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
          <button
            className="rounded"
            id="linkedinBtn"
            onClick={handleClick}
            style={{ visibility: "visible" }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </button>
          <input
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
            <i class="fa-brands fa-github"></i>
          </button>
          <input
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
            <i class="fa-brands fa-twitter"></i>
          </button>
          <input
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
      </form>
    </div>
  );
};

export default UserSocials;
