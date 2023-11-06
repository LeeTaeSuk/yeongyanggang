import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const SurveyStart = () => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/survey1");
  };
  return (
    <div className="Survey">
      <section className="right-wrapper right-wrapper-survey">
        <Header btn={"prev"} title={"나에게 맞는 영양제 찾기"} />
        <div className="survey-content">
          <div className="survey-top">
            <h1 className="h1-title">🤚 안녕하세요 !</h1>
            <h3 className="h3-title">
              선택하신 정보를 기반으로
              <br />
              맞춤 영양제를 추천해 주는 똑똑한 영양갱입니다!
            </h3>
            <p>
              <br />
              일일이 영양제 찾는 게 불편하셨죠 ?<br /> 또 불필요한 영양제를
              먹나요?
              <br />
              그럴 필요 없습니다! <br />
              <br />
              설문조사를 통해 고객님의 현재 고민 중인
              <br />
              건강에 맞춰 영양제를 추천받으세요!
            </p>
            <div className="survey-img"></div>
          </div>
          <Button
            text={"시작하기"}
            type={"survey"}
            state={"active"}
            onClick={onClick}
          />
        </div>
      </section>
    </div>
  );
};

export default SurveyStart;
