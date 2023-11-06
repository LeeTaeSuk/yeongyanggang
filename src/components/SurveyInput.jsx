import React from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SurveyInput = ({ type, id, value, img, name, theme, onChange }) => {
  return (
    <>
      <input
        type={type}
        className={["check-input", `check-${theme}`].join(" ")}
        id={`check-${theme}-${id}`}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={`check-${theme}-${id}`}>
        <div className="check-icon">
          <FontAwesomeIcon icon={faCircleCheck} />
        </div>
        <div
          className={["check-input-bottom", `check-${theme}-bottom`].join(" ")}
        >
          <div className={"check-img"}>{img}</div>
          <div className={"check-des"}>{name}</div>
        </div>
      </label>
    </>
  );
};

export default SurveyInput;
