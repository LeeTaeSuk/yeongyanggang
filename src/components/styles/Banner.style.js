import styled from "styled-components";
import theme from "../../styles/theme";

export const h1Title = styled.h1`
  ${() => theme.common.h1Title}
`;

export const BannerWrap = styled.div`
  margin-bottom: 50px;
`;

export const BannerItemWrap = styled.div`
  display: flex;
`;

export const BannerItem = styled.div`
  padding: 20px;
  height: 120px;
  border-radius: 10px;

  &:first-child {
    flex-grow: 2;
    background: #17c4cf;
    margin-right: 20px;
  }

  &:last-child {
    flex-grow: 1;
    background: #17cf74;
  }

  p {
    font-size: 1rem;
    margin-top: 10px;
    color: #fff;
  }
`;

export const h3Title = styled.h3`
  color: #fff;
  text-decoration: none;
`;
