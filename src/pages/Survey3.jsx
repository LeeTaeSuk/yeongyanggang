import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SurveyTitle from "../components/SurveyTitle";
import SurveyInput from "../components/SurveyInput";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Survey3 = () => {
  const [smoking, setSmoking] = useState();
  const navigate = useNavigate();

  const onClick = () => {
    if (smoking) navigate("/survey4");
  };
  return (
    <div className="Survey3">
      <section className="right-wrapper right-wrapper-survey">
        <Header btn={"prev"} title={"나에게 맞는 영양제 찾기"} />
        <div className="survey-content">
          <div className="survey-top">
            <SurveyTitle idx={"3"} text={"현재 흡연 중이신가요?"} />
          </div>
          <div className="check-answer-wrap">
            <input
              type="radio"
              className="check-input check-answer"
              id="check-smoking-yes"
              name="check-smoking"
              value="yes"
              onChange={(e) => setSmoking(e.target.value)}
            />
            <label htmlFor="check-smoking-yes">
              <div className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className="check-input-bottom">
                <div className="check-img">🙆‍♀️</div>
                <div className="check-des">네</div>
              </div>
            </label>
            <input
              type="radio"
              className="check-input check-answer"
              id="check-smoking-no"
              name="check-smoking"
              value="no"
              onChange={(e) => setSmoking(e.target.value)}
            />
            <label htmlFor="check-smoking-no">
              <div className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className="check-input-bottom">
                <div className="check-img">🙅‍♀️</div>
                <div className="check-des">아니요</div>
              </div>
            </label>
            <div className="more-check-answer-content-wrap"></div>
          </div>

          <Button
            text={"다음으로"}
            type={"survey"}
            state={smoking ? "active" : "disabled"}
            onClick={onClick}
          />
        </div>
      </section>
    </div>
  );
};

export default Survey3;
