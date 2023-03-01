const ImageAndName = ({ name, image }) => {
  //will have to pass the name and profile image into props from backend
  return (
    <div>
      <div className="imageEdit">
        <img className="avatar" src={image} alt="user profile" />
        {/* edit button will go next to img so that user can navigate to edit
        profile page. */}
      </div>
      <br />
      <h5>{name}</h5>
    </div>
  );
};

export default ImageAndName;
