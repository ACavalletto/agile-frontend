const NavigationArrows = (props) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <button type="button" class="btn btn-outline-primary" onClick={props.previousPage}>
          <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div className="col-6">Step {props.page} out of 5</div>
        <div className="col">
        <button type="button" class="btn btn-outline-primary" onClick={props.nextPage}>
          <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationArrows;
