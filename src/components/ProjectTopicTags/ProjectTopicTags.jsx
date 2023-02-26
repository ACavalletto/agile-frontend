import "./ProjectTopicTags.css";

const ProjectTopicTags = ({ project }) => {
  console.log(project.categories)
  const categoryOptions = {
    "ART": "Art",
    "CAR": "Career",
    "COM": "Community",
    "CUL": "Culture",
    "ECO": "Environment",
    "EDU": "Education",
    "FNC": "Finance",
    "FOD": "Food",
    "MED": "Media/Pop Culture",
    "MD": "Medical",
    "REL": "Religion",
    "SOC": "Social",
    "SJ": "Social Justice",
    "SPT": "Sports",
    "IT": "Technology",
    "TRV": "Travel",
  };

  return (
    project.categories.length ? (
    <div className="project-topic-tags">
      {project.categories.map(c => (
        <div className="topic-tag"key={c}>{categoryOptions[c]}</div>
      ))}
    </div>
    ) : ("")
  )
}

export default ProjectTopicTags;