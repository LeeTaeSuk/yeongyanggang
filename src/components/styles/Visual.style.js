import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const VisualWrap = styled.div`
  height: 180px;
  margin-top: 20px;
  margin-bottom: 50px;
  border-radius: 20px;
  background-color: rgb(211, 211, 211);
`;
export const SlickSlider = styled(Slider)`
  height: 100%;
  border-radius: 20px;
`;
export const VisualPage = styled.div`
  position: relative;
  height: 140px;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 900;
  border-radius: 20px;
  color: #fff;

  > span {
    font-size: 1rem;
    font-weight: 600;
  }
`;
export const VisualPage1 = styled(VisualPage)`
  width: 440px !important;
  background-color: #17cf74;
`;

export const VisualPage2 = styled(VisualPage)`
  width: 440px !important;
  background-color: #17c2cf;
`;

export const VisualPage3 = styled(VisualPage)`
  width: 440px !important;
  color: black;
  background-color: #fae45a;
`;

export const VisualPageIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
  font-size: 3rem;
`;
