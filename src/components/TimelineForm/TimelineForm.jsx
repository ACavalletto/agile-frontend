import "./TimelineForm.css";

function TimelineForm({ projectInfo, setProjectInfo }) {
  function handleChange({ currentTarget: input}) {
    const tempProjInfo = {...projectInfo};
    tempProjInfo.timeline[input.name.slice(0, 6)][input.name.slice(7)] = input.value;
    setProjectInfo(tempProjInfo);
  }

  return (
    <div className="timeline-form">
      <h5>Build Timeline</h5>
      <h6>Define the 6 stages of Your Project</h6>
      <div className="stage-field" id="stage1">
        <h6>1.</h6>
        <div className="name">
          <input
            display="none"
            type="text" 
            placeholder="Stage 1 Name"
            name="stage1.name"
            onChange={handleChange}
            value={projectInfo.timeline.stage1.name}
            required
            />
        </div>
        <div className="description">
          <textarea
            placeholder="Brief Description"
            name="stage1.description"
            onChange={handleChange}
            value={projectInfo.timeline.stage1.description}
            required
          />
        </div>
      </div>
      <div className="stage-field" id="stage2">
        <h6>2.</h6>
        <div className="name">
          <input
            display="none"
            type="text" 
            placeholder="Stage 2 Name"
            name="stage2.name"
            onChange={handleChange}
            value={projectInfo.timeline.stage2.name}
            required
            />
        </div>
        <div className="description">
          <textarea
            placeholder="Brief Description"
            name="stage2.description"
            onChange={handleChange}
            value={projectInfo.timeline.stage2.description}
            required
          />
        </div>
      </div>
      <div className="stage-field" id="stage3">
        <h6>3.</h6>
        <div className="name">
          <input
            display="none"
            type="text" 
            placeholder="Stage 3 Name"
            name="stage3.name"
            onChange={handleChange}
            value={projectInfo.timeline.stage3.name}
            required
            />
        </div>
        <div className="description">
          <textarea
            placeholder="Brief Description"
            name="stage3.description"
            onChange={handleChange}
            value={projectInfo.timeline.stage3.description}
            required
          />
        </div>
      </div>
      <div className="stage-field" id="stage1">
        <h6>4.</h6>
        <div className="name">
          <input
            display="none"
            type="text" 
            placeholder="Stage 4 Name"
            name="stage4.name"
            onChange={handleChange}
            value={projectInfo.timeline.stage4.name}
            required
            />
        </div>
        <div className="description">
          <textarea
            placeholder="Brief Description"
            name="stage4.description"
            onChange={handleChange}
            value={projectInfo.timeline.stage4.description}
            required
          />
        </div>
      </div>
      <div className="stage-field" id="stage5">
        <h6>5.</h6>
        <div className="name">
          <input
            display="none"
            type="text" 
            placeholder="Stage 5 Name"
            name="stage5.name"
            onChange={handleChange}
            value={projectInfo.timeline.stage5.name}
            required
            />
        </div>
        <div className="description">
          <textarea
            placeholder="Brief Description"
            name="stage5.description"
            onChange={handleChange}
            value={projectInfo.timeline.stage5.description}
            required
          />
        </div>
      </div>
      <div className="stage-field" id="stage6">
        <h6>6.</h6>
        <div className="name">
          <input
            display="none"
            type="text" 
            placeholder="Stage 6 Name"
            name="stage6.name"
            onChange={handleChange}
            value={projectInfo.timeline.stage6.name}
            required
            />
        </div>
        <div className="description">
          <textarea
            placeholder="Brief Description"
            name="stage6.description"
            onChange={handleChange}
            value={projectInfo.timeline.stage6.description}
            required
          />
        </div>
      </div>
    </div>
  )
}

export default TimelineForm;