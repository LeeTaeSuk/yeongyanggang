import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import SurveyTitle from "../components/SurveyTitle";
import { UserDispatchContext } from "../App";

let yearList = [];
let year = {};
let monthList = [];
let month = {};
let dayList = [];
let day = {};

for (let i = 1950; i <= 2023; i++) {
  year.value = i;
  year.name = i;
  yearList.push({ ...year });
}

for (let i = 1; i <= 12; i++) {
  month.value = i;
  month.name = i;
  monthList.push({ ...month });
}

for (let i = 1; i <= 31; i++) {
  day.value = i;
  day.name = i;
  dayList.push({ ...day });
}

const ControlMenu = ({ value, optionList, onChange }) => {
  return (
    <select
      className="input-text input-birth"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="none">선택</option>
      {optionList &&
        optionList.map((it, idx) => (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        ))}
    </select>
  );
};
const Survey1 = () => {
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [gender, setGender] = useState("");

  const { onUserCreate } = useContext(UserDispatchContext);
  const navigate = useNavigate();

  const handleUserData = () => {
    if (name && birthYear && birthMonth && birthDay && gender) {
      onUserCreate(name, birthYear, birthMonth, birthDay, gender);
      navigate("/survey2");
    }
  };
  // 개별 속성에 액세스

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem("user"));
    const newUserData = {
      name: name,
      birthYear: birthYear,
      birthMonth: birthMonth,
      birthDay: birthDay,
      gender: gender,
    };
    if (name && birthYear && birthMonth && birthDay && gender) {
      window.localStorage.setItem(
        "user",
        JSON.stringify([...(userData || []), newUserData])
      );
    }
  }, [name, birthYear, birthMonth, birthDay, gender]);

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
              <ControlMenu
                value={birthYear}
                optionList={yearList}
                onChange={setBirthYear}
              />
              <ControlMenu
                value={birthMonth}
                optionList={monthList}
                onChange={setBirthMonth}
              />
              <ControlMenu
                value={birthDay}
                optionList={dayList}
                onChange={setBirthDay}
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
            type={"Survey"}
            state={
              name && birthYear && birthMonth && birthDay && gender
                ? "Active"
                : "Disabled"
            }
            onClick={handleUserData}
          />
        </div>
      </section>
    </div>
  );
};

export default Survey1;
