import "./Timeline.css";

function Timeline ({ project }) {
  const t = project.timeline;

  return (
    <div className="timeline">
      <h6>Your Timeline</h6>
      {t ? (
          <div className="stages">
            <div className="left"></div>
            {t.stage6.name || t.stage5.name || t.stage4.name || t.stage3.name || t.stage2.name || t.stage1?.name ? (
              <div className="stage right" id="stage1">
                <p className="stage-name">Stage 1: {t.stage1.name}</p>
                <p className="stage-description">{t.stage1.description}</p>
              </div>
            ) : ("")}
            {t.stage6.name || t.stage5.name || t.stage4.name || t.stage3.name || t.stage2.name ? (
              <div className="stage left" id="stage2">
                <p className="stage-name">Stage 2: {t.stage2.name}</p>
                <p className="stage-description">{t.stage2.description}</p>
              </div>
            ) : ("")}
            <div className="right"></div>
            <div  className="left"></div>
            {t.stage6.name || t.stage5.name || t.stage4.name || t.stage3.name ? (
              <div className="stage right" id="stage3">
                <p className="stage-name">Stage 3: {t.stage3.name}</p>
                <p className="stage-description">{t.stage3.description}</p>
              </div>
            ) : ("")}
            {t.stage6.name || t.stage5.name || t.stage4.name ? (
              <div className="stage left" id="stage4">
                <p className="stage-name">Stage 4: {t.stage4.name}</p>
                <p className="stage-description">{t.stage4.description}</p>
              </div>
            ) : ("")}
            <div className="right"></div>
            <div className="left"></div>
            {t.stage6.name || t.stage5.name ? (
              <div className="stage right" id="stage5">
                <p className="stage-name">Stage 5: {t.stage5.name}</p>
                <p className="stage-description">{t.stage5.description}</p>
              </div>
            ) : ("")}
            {t.stage6.name ? (
              <div className="stage left" id="stage6">
                <p className="stage-name">Stage 6: {t.stage6.name}</p>
                <p className="stage-description">{t.stage6.description}</p>
              </div>
            ) : ("")}
            <div className="right"></div>
          </div>
      ) : ("")}
    </div>
  )
}

export default Timeline;