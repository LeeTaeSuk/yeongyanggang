import React from "react";

const SurveyTitle = ({ idx, text }) => {
  return (
    <div className="SurveyTitle">
      <div className="survey-process">
        <div className="survey-process-active">{idx}</div> / 6
      </div>
      <h1 className="h1-title">
        {text.split("\n").map((txt) => (
          <>
            {txt}
            <br />
          </>
        ))}
      </h1>
    </div>
  );
};

export default SurveyTitle;
