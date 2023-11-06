import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const SurveyEnd = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
  };
  return (
    <div className="Survey">
      <section className="right-wrapper right-wrapper-survey">
        <Header btn={"prev"} title={"나에게 맞는 영양제 찾기"} />
        <div className="survey-content">
          <div className="survey-top">
            <h1 className="h1-title">🤚 감사합니다!</h1>
            <h3 className="h3-title">
              메인화면에 회원님께 추천드리는
              <br />
              영양제를 준비해 놓았습니다!
            </h3>
          </div>
          <Button
            text={"메인 화면으로 가기"}
            type={"survey"}
            state={"active"}
            onClick={onClick}
          />
        </div>
      </section>
    </div>
  );
};

export default SurveyEnd;
