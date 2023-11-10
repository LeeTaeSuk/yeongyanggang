import React from "react";
import * as S from "./styles/Button.style";

const Button = ({ text, type, state, onClick }) => {
  return (
    <S.ButtonContainer>
      <S.StyledButton
        className={["Button", `${type}Button`, `${type}Button${state}`].join(
          " "
        )}
        onClick={onClick}
      >
        {text}
      </S.StyledButton>
    </S.ButtonContainer>
  );
};

export default Button;
