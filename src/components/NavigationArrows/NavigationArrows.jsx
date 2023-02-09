import "./NavigationArrows.css"

const NavigationArrows = (props) => {
  return (
    <div className="container text-center" id= "navContainer">
      <div className="row">
        <div className="col">
          <button type="button" className="btn" onClick={props.previousPage}>
          <i className="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className="col-6" id="page">Step {props.page} out of 5</div>
        <div className="col">
        <button type="button" className="btn" onClick={props.nextPage}>
          <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationArrows;
