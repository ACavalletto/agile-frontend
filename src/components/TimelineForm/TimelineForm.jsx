import "./TimelineForm.css";

function TimelineForm({ projectInfo, setProjectInfo, handleTimelineChange, handleToggle, handleSubmit, editToggle }) {

  return (
    <div className="project-info-form timeline-form">
      <form>
        <h4>Build Timeline</h4>
        <h6 id="subtitle">Define the 6 stages of Your Project</h6>
        <div className="stage-field d-flex" id="stage1">
          <h6>1.</h6>
          <div className="input-fields">
            <div className="name">
              <input
                display="none"
                type="text" 
                placeholder="Stage 1 Name"
                name="stage1.name"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage1.name}
                required
                />
            </div>
            <div className="description">
              <textarea
                placeholder="Brief Description"
                name="stage1.description"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage1.description}
                required
              />
            </div>
          </div>
        </div>
        <div className="stage-field d-flex" id="stage2">
          <h6>2.</h6>
          <div className="input-fields">
            <div className="name">
              <input
                display="none"
                type="text" 
                placeholder="Stage 2 Name"
                name="stage2.name"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage2.name}
                required
                />
            </div>
            <div className="description">
              <textarea
                placeholder="Brief Description"
                name="stage2.description"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage2.description}
                required
              />
            </div>
          </div>
        </div>
        <div className="stage-field d-flex" id="stage3">
          <h6>3.</h6>
          <div className="input-fields">
            <div className="name">
              <input
                display="none"
                type="text" 
                placeholder="Stage 3 Name"
                name="stage3.name"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage3.name}
                required
                />
            </div>
            <div className="description">
              <textarea
                placeholder="Brief Description"
                name="stage3.description"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage3.description}
                required
              />
            </div>
          </div>
        </div>
        <div className="stage-field d-flex" id="stage1">
          <h6>4.</h6>
          <div className="input-fields">
            <div className="name">
              <input
                display="none"
                type="text" 
                placeholder="Stage 4 Name"
                name="stage4.name"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage4.name}
                required
                />
            </div>
            <div className="description">
              <textarea
                placeholder="Brief Description"
                name="stage4.description"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage4.description}
                required
              />
            </div>
          </div>
        </div>
        <div className="stage-field d-flex" id="stage5">
          <h6>5.</h6>
          <div className="input-fields">
            <div className="name">
              <input
                display="none"
                type="text" 
                placeholder="Stage 5 Name"
                name="stage5.name"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage5.name}
                required
                />
            </div>
            <div className="description">
              <textarea
                placeholder="Brief Description"
                name="stage5.description"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage5.description}
                required
              />
            </div>
          </div>
        </div>
        <div className="stage-field d-flex" id="stage6">
          <h6>6.</h6>
          <div className="input-fields">
            <div className="name">
              <input
                display="none"
                type="text" 
                placeholder="Stage 6 Name"
                name="stage6.name"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage6.name}
                required
                />
            </div>
            <div className="description">
              <textarea
                placeholder="Brief Description"
                name="stage6.description"
                onChange={handleTimelineChange}
                value={projectInfo.timeline.stage6.description}
                required
              />
            </div>
          </div>
        </div>
        <div className="buttons">
          <input type="submit" className="purple-bg" id="firstButton" value=" << Go Back " onClick={handleToggle} />
          <input type="submit" className="purple-bg" id="secondButton" value={editToggle ? " Update Timeline >> " : " Save New Timeline >> "} onClick={handleSubmit} />
        </div>
      </form>
    </div>
  )
}

export default TimelineForm;