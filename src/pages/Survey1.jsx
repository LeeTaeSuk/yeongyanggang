import React, { useState } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SurveyTitle from "../components/SurveyTitle";

const Survey1 = () => {
  const [name, setName] = useState();
  const [birthYear, setBirthYear] = useState();
  const [birthMonth, setBirthMonth] = useState();
  const [birthDay, setBirthDay] = useState();
  const [gender, setGender] = useState();

  const navigate = useNavigate();

  const onClick = () => {
    if (birthYear && birthMonth && gender) navigate("/survey2");
  };

  console.log("이름 " + name);
  console.log(
    "생일 " + birthYear + "년 " + birthMonth + "월 " + birthDay + "일 "
  );
  console.log("성별 " + gender);

  return (
    <div className="Survey">
      <section className="right-wrapper right-wrapper-survey">
        <Header btn={"prev"} title={"나에게 맞는 영양제 찾기"} />
        <div className="survey-content">
          <SurveyTitle
            idx={"1"}
            text={"먼저, 회원님의\n간단한 개인정보를\n입력해 주세요!"}
          />
          <div className="input-wrap">
            <label className="input-label">이름</label>
            <input
              type="text"
              className="input-text input-name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-wrap">
            <label className="input-label">생년월일</label>
            <div className="input-birth-wrap">
              <input
                type="text"
                className="input-text input-birth"
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
              />
              <input
                type="text"
                className="input-text input-birth"
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}
              />
              <input
                type="text"
                className="input-text input-birth"
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
              />
            </div>
          </div>
          <div className="input-wrap">
            <label className="input-label">성별</label>
            <div className="input-gender-wrap">
              <input
                type="radio"
                className="input-gender"
                id="input-gender1"
                value="man"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="input-gender1">남자</label>
              <input
                type="radio"
                className="input-gender"
                id="input-gender2"
                value="woman"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="input-gender2">여자</label>
            </div>
          </div>
          <Button
            text={"다음으로"}
            type={"survey"}
            state={birthYear && birthMonth && gender ? "active" : "disabled"}
            onClick={onClick}
          />
        </div>
      </section>
    </div>
  );
};

export default Survey1;
