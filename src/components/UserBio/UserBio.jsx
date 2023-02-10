import "./UserBio.css"

const UserBio = ({onUpdateField}) => {
  return (
    <div className="container">
      <h5 className="mt-5"> Now it's time for you to introduce yourself...</h5>
      <form className="mt-4" id="bioForm">
        <label htmlFor="name">What's your name?</label><br/>
        <input
          type="text"
          name="name"
          id="name"
          className= "rounded"
          onChange={onUpdateField}
          placeholder="John Doe" />
        <br />
        <div id="textArea">
        <textarea
          className="mt-4"
          id="bio"
          name="bio"
          rows="10"
          cols="35"
          placeholder= 
          {`Tips...\n\u2022 Make it fun, light, and casual\n\u2022 What are your interests?\n\u2022People will already see your discipline and city so no need to add that!\n\u2022You can always change it later!
          `}
          maxLength = "150" 
          onChange={onUpdateField}>
          </textarea>
        </div>
      </form>
    </div>
  )
}

export default UserBio