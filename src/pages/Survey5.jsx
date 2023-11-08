import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SurveyTitle from "../components/SurveyTitle";
import SurveyInput from "../components/SurveyInput";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Survey5 = () => {
  const [diesease, setDiesease] = useState();
  const [dieseaseType, setDieseaseType] = useState([]);
  const navigate = useNavigate();

  const handleAllergyTypeChange = (checked, item) => {
    if (checked) {
      setDieseaseType([...dieseaseType, item]);
    } else if (!checked) {
      setDieseaseType(dieseaseType.filter((el) => el !== item));
    }
  };

  const showPrompt = () => {
    const result = prompt(
      "저희는 현재 성장하고 있는 팀으로, \n정보를 점차 늘려가고 있습니다.\n\n 현재 가지고 계신 질환 명을\n알려주시면 빠르게 반영 하겠습니다. 감사합니다 :)"
    );

    if (result) onClick();
  };

  const onClick = () => {
    if (diesease) navigate("/survey6");
  };

  const dieseaseList = [
    {
      id: 1,
      name: "대장암",
      value: "estrogen1",
    },
    {
      id: 2,
      name: "간암",
      value: "estrogen2",
    },
    {
      id: 3,
      name: "당뇨",
      value: "estrogen3",
    },
    {
      id: 4,
      name: "고혈압",
      value: "estrogen4",
    },
    {
      id: 5,
      name: "고지혈증(콜레스테롤)",
      value: "estrogen5",
    },
    {
      id: 6,
      name: "과체중 & 비만",
      value: "estrogen6",
    },
    {
      id: 7,
      name: "저체중",
      value: "estrogen7",
    },
    {
      id: 8,
      name: "변비",
      value: "estrogen8",
    },
    {
      id: 9,
      name: "대장질환",
      value: "estrogen9",
    },
    {
      id: 10,
      name: "위장질환",
      value: "estrogen10",
    },
    {
      id: 11,
      name: "비타민 D 부족",
      value: "estrogen11",
    },
    {
      id: 12,
      name: "위암",
      value: "estrogen11",
    },
  ];
  return (
    <div className="Survey4">
      <section className="right-wrapper right-wrapper-survey">
        <Header btn={"prev"} title={"나에게 맞는 영양제 찾기"} />
        <div className="survey-content">
          <div className="survey-top">
            <SurveyTitle idx={"5"} text={"현재 질환이 있으신가요?"} />
          </div>
          <div className="check-answer-wrap">
            <input
              type="radio"
              className="check-input check-answer"
              id="check-diesease-yes"
              name="check-diesease"
              value="yes"
              onChange={(e) => setDiesease(e.target.value)}
            />
            <label htmlFor="check-diesease-yes">
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
              id="check-diesease-no"
              name="check-diesease"
              value="no"
              onChange={(e) => setDiesease(e.target.value)}
            />
            <label htmlFor="check-diesease-no">
              <div className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className="check-input-bottom">
                <div className="check-img">🙅‍♀️</div>
                <div className="check-des">아니요</div>
              </div>
            </label>
          </div>
          {diesease === "yes" && (
            <div className="more-check-answer-content-wrap">
              <div className="survey-line-wrap">
                {" "}
                <div className="survey-line"></div>
                <div className="survey-line-icon">+</div>
                <div className="survey-line"></div>
              </div>

              <h3 className="h3-title">어떤 질환을 가지고 계신가요?</h3>
              <p>현재 가지고 계신 질환을 모두 선택해 주세요!</p>
              <button className="more-check-prompt-btn" onClick={showPrompt}>
                찾으시는 질환이 없으신가요?
              </button>
              <div className="more-check-answer-wrap">
                {dieseaseList &&
                  dieseaseList.map((it) => {
                    return (
                      <>
                        <input
                          type="checkbox"
                          className="more-check-answer"
                          id={`more-check-${it.id}`}
                          name="check"
                          value={it.value}
                          onChange={(e) => {
                            handleAllergyTypeChange(
                              e.target.checked,
                              e.target.value
                            );
                          }}
                        />
                        <label htmlFor={`more-check-${it.id}`}>
                          <div className="more-check-answer-icon">
                            <FontAwesomeIcon icon={faCircleCheck} />
                          </div>
                          <div className="more-check-answer-name">
                            {it.name}
                          </div>
                        </label>
                      </>
                    );
                  })}
              </div>
            </div>
          )}

          <Button
            text={"다음으로"}
            type={"survey"}
            state={
              diesease === "no" ||
              (diesease === "yes" && dieseaseType.length >= 1)
                ? "active"
                : "disabled"
            }
            onClick={onClick}
          />
        </div>
      </section>
    </div>
  );
};

export default Survey5;
