import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SurveyTitle from "../components/SurveyTitle";
import SurveyInput from "../components/SurveyInput";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Survey4 = () => {
  const [allergy, setAllergy] = useState();
  const [allergyType, setAllergyType] = useState([]);
  const navigate = useNavigate();

  const handleAllergyTypeChange = (checked, item) => {
    if (checked) {
      setAllergyType([...allergyType, item]);
    } else if (!checked) {
      setAllergyType(allergyType.filter((el) => el !== item));
    }
  };

  const showPrompt = () => {
    const result = prompt(
      "저희는 현재 성장하고 있는 팀으로, \n정보를 점차 늘려가고 있습니다.\n\n 현재 가지고 계신 알러지 명을\n알려주시면 빠르게 반영 하겠습니다. 감사합니다 :)"
    );

    if (result) onClick();
  };

  const onClick = () => {
    if (allergy) navigate("/survey5");
  };

  const allergyList = [
    {
      id: 1,
      name: "게",
      value: "estrogen1",
    },
    {
      id: 2,
      name: "대두",
      value: "estrogen2",
    },
    {
      id: 3,
      name: "꽃가루",
      value: "estrogen3",
    },
    {
      id: 4,
      name: "땅콩",
      value: "estrogen4",
    },
    {
      id: 5,
      name: "계란",
      value: "estrogen5",
    },
    {
      id: 6,
      name: "밀",
      value: "estrogen6",
    },
    {
      id: 7,
      name: "카페인",
      value: "estrogen7",
    },
    {
      id: 8,
      name: "유제품",
      value: "estrogen8",
    },
    {
      id: 9,
      name: "꿀",
      value: "estrogen9",
    },
    {
      id: 10,
      name: "MSG",
      value: "estrogen10",
    },
    {
      id: 11,
      name: "에스트로겐",
      value: "estrogen11",
    },
  ];
  return (
    <div className="Survey4">
      <section className="right-wrapper right-wrapper-survey">
        <Header btn={"prev"} title={"나에게 맞는 영양제 찾기"} />
        <div className="survey-content">
          <div className="survey-top">
            <SurveyTitle idx={"4"} text={"현재 알러지가 있으신가요?"} />
          </div>
          <div className="check-answer-wrap">
            <input
              type="radio"
              className="check-input check-answer"
              id="check-allergy-yes"
              name="check-allergy"
              value="yes"
              onChange={(e) => setAllergy(e.target.value)}
            />
            <label htmlFor="check-allergy-yes">
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
              id="check-allergy-no"
              name="check-allergy"
              value="no"
              onChange={(e) => setAllergy(e.target.value)}
            />
            <label htmlFor="check-allergy-no">
              <div className="check-icon">
                <FontAwesomeIcon icon={faCircleCheck} />
              </div>
              <div className="check-input-bottom">
                <div className="check-img">🙅‍♀️</div>
                <div className="check-des">아니요</div>
              </div>
            </label>
          </div>
          {allergy === "yes" && (
            <div className="more-check-answer-content-wrap">
              <div className="survey-line-wrap">
                {" "}
                <div className="survey-line"></div>
                <div className="survey-line-icon">+</div>
                <div className="survey-line"></div>
              </div>

              <h3 className="h3-title">어떤 알러지를 가지고 계신가요?</h3>
              <p>현재 가지고 계신 알러지를 모두 선택해 주세요!</p>
              <button className="more-check-prompt-btn" onClick={showPrompt}>
                찾으시는 알러지가 없으신가요?
              </button>
              <div className="more-check-answer-wrap">
                {allergyList &&
                  allergyList.map((it) => {
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
              allergy === "no" || (allergy === "yes" && allergyType.length >= 1)
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

export default Survey4;
