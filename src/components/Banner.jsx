import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles/Banner.style";

const Banner = () => {
  return (
    <S.BannerWrap>
      <S.h1Title>💪 영양갱이랑 건강 관리 시작해요!</S.h1Title>
      <S.BannerItemWrap>
        <S.BannerItem>
          <Link to="/compareItem" style={{ textDecoration: "none" }}>
            <S.h3Title>
              영양제, 아직도 <br /> 못 고르셨나요?
            </S.h3Title>
            <p>영양제 비교하러 가기</p>
          </Link>
        </S.BannerItem>
        <S.BannerItem>
          <Link to="/surveyStart" style={{ textDecoration: "none" }}>
            <S.h3Title>
              몸 상태가
              <br />
              변화했나요?
            </S.h3Title>
            <p>설문조사 다시 하러가기</p>
          </Link>
        </S.BannerItem>
      </S.BannerItemWrap>
    </S.BannerWrap>
  );
};

export default Banner;
