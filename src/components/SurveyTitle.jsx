import React from "react";
import * as S from "./styles/SurveyTitle.style";

const SurveyTitle = ({ idx, text }) => {
  return (
    <>
      <S.SurveyProcess>
        <p>{idx}</p> / 6
      </S.SurveyProcess>
      <S.h1Title>
        {text.split("\n").map((txt) => (
          <>
            {txt}
            <br />
          </>
        ))}
      </S.h1Title>
    </>
  );
};

export default SurveyTitle;
