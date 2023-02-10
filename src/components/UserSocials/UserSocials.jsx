import "./UserSocials.css";

const UserSocials = ({ onUpdateField }) => {
  function handleClick(e) {
    e.preventDefault();
    document.querySelector("#linkedinBtn").style.visibility = "hidden";
    document.querySelector("#linkedin").style.visibility = "visible";
  }
  function textFocusOut(e) {
    e.preventDefault();
    document.querySelector("#linkedin").style.visibility = "hidden";
    document.querySelector("#linkedinBtn").style.visibility = "visible";
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
          <button id="linkedinBtn" onClick={handleClick}>
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
          <button id="githubBtn" onClick={handleClick}>
            <i class="fa-brands fa-github"></i>
          </button>
          <input
            type="text"
            name="github"
            id="github"
            className="rounded"
            onChange={onUpdateField}
            onBlur={textFocusOut}
            placeholder="LinkedIn"
            style={{ visibility: "hidden" }}
          />
        </div>
      </form>
    </div>
  );
};

export default UserSocials;
