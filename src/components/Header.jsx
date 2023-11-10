import React from "react";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./styles/Header.style";

const Header = ({ btn, title, path }) => {
  const navigate = useNavigate();
  const handleMenuBtn = (path) => {
    if (path === "home") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  const btnType = (btn) => {
    if (btn === "prev") return <FontAwesomeIcon icon={faArrowLeft} />;
  };

  return (
    <S.HeaderWrap>
      <S.HeaderContent>
        {btn && (
          <S.menuBtn
            onClick={() => {
              handleMenuBtn(path);
            }}
          >
            {btnType(btn)}
          </S.menuBtn>
        )}
        <S.HeaderTitle>{title}</S.HeaderTitle>
      </S.HeaderContent>
    </S.HeaderWrap>
  );
};

Header.defaultProps = {
  linkTo: "default",
};

export default Header;
