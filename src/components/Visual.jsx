import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from "./styles/Visual.style";

const Visual = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <S.VisualWrap>
      <Slider {...settings}>
        <S.VisualPage1>
          <span>여러분의 영양제 박사 영양갱이</span>
          <br />
          맞춤 영양제를 추천해 드릴게요!
          <S.VisualPageIcon>💊👨‍⚕️</S.VisualPageIcon>
        </S.VisualPage1>

        <S.VisualPage2>
          <span>혹시 아직도 영양제 못 고르셨나요?</span>
          <br />
          원하는 영양제끼리 한 눈에 비교해 보세요!
          <S.VisualPageIcon>💊❔🙋‍♀️</S.VisualPageIcon>
        </S.VisualPage2>

        <S.VisualPage3>
          <span>매달 영양제 시키지 마세요!</span>
          <br />
          영양갱이 집 앞까지 배송해 드릴게요
          <S.VisualPageIcon>💊🏠📦</S.VisualPageIcon>
        </S.VisualPage3>
      </Slider>
    </S.VisualWrap>
  );
};

export default Visual;
