import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SurveyTitle from "../components/SurveyTitle";
// import SurveyInput from "../components/SurveyInput";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Survey2 = () => {
  const [healthType, setHealthType] = useState([]);
  const navigate = useNavigate();

  const onClick = () => {
    if (healthType.length >= 3) navigate("/survey3");
  };
  const handleInputChange = (checked, item) => {
    if (checked) {
      setHealthType([...healthType, item]);
    } else if (!checked) {
      setHealthType(healthType.filter((el) => el !== item));
    }
  };

  const healthTypeList = [
    {
      id: 1,
      img: "👀",
      name: "눈",
      value: "eye",
    },
    {
      id: 2,
      img: "👀",
      name: "고혈압",
      value: "eye2",
    },
    {
      id: 3,
      img: "👀",
      name: "간",
      value: "eye3",
    },
    {
      id: 4,
      img: "👀",
      name: "관절",
      value: "eye4",
    },
    {
      id: 5,
      img: "👀",
      name: "체지방",
      value: "eye5",
    },
    {
      id: 6,
      img: "👀",
      name: "스트레스",
      value: "eye6",
    },
    {
      id: 7,
      img: "👀",
      name: "피로",
      value: "eye7",
    },
    {
      id: 8,
      img: "👀",
      name: "탈모",
      value: "eye8",
    },
    {
      id: 9,
      img: "👀",
      name: "저체중",
      value: "eye9",
    },
  ];
  return (
    <div className="Survey">
      <section className="right-wrapper right-wrapper-survey">
        <Header btn={"prev"} title={"나에게 맞는 영양제 찾기"} />
        <div className="survey-content">
          <div className="survey-top">
            <SurveyTitle
              idx={"2"}
              text={"관심있는 건강 고민을\n모두 선택해 주세요"}
            />
          </div>
          <div className="survey-process-des">
            <div className="survey-process-des-active">'3가지'</div>
            이상 선택해 주세요! 내게 꼭 맞는 영양제를 추천해드릴게요!
          </div>
          <div className="check-disease-wrap">
            {healthTypeList &&
              healthTypeList.map((it) => {
                return (
                  //   <SurveyInput
                  //     theme={"disease"}
                  //     type={"checkbox"}
                  //     value={it.value}
                  //     img={it.img}
                  //     name={it.name}
                  //     id={idx}
                  //     onChange={handleInputChange}
                  //   />
                  // );

                  <>
                    <input
                      type="checkbox"
                      className="check-input check-healthtype"
                      id={`check-healthtype-${it.id}`}
                      name="check-healthtype"
                      value={it.value}
                      onChange={(e) => {
                        handleInputChange(e.target.checked, e.target.value);
                      }}
                    />
                    <label htmlFor={`check-healthtype-${it.id}`}>
                      <div className="check-icon">
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </div>
                      <div className="check-input-bottom">
                        <div className="check-img">{it.img}</div>
                        <div className="check-des">{it.name}</div>
                      </div>
                    </label>
                  </>
                );
              })}
          </div>
          <Button
            text={"다음으로"}
            type={"survey"}
            state={healthType.length >= 3 ? "active" : "disabled"}
            onClick={onClick}
          />
        </div>
      </section>
    </div>
  );
};

export default Survey2;
