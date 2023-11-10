import styled from "styled-components";
import theme from "../../styles/theme";

export const SurveyProcess = styled.div`
  margin-bottom: 20px;
  color: #d9d9d9;
  & p {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${() => theme.colors.Main};
  }
`;

export const h1Title = styled.h1`
  ${() => theme.common.h1Title}
`;
