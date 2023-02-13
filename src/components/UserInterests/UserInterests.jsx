import "./UserInterests.css";

const UserInterests = ({ onUpdateField }) => {
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

    return (
        <div className="container">
            <h5 className="mt-5">
                {" "}
                Last step, what're topics that give you meaning?
            </h5>
            <div className="topic-grid mt-4 d-flex flex-wrap justify-content-center">
                {topics.map(t => <div className="topic-btn d-flex justify-content-center align-items-center">{t}</div>)}
            </div>
        </div>
    )
}

export default UserInterests;