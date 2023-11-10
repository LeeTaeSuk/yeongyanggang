import styled from "styled-components";
import theme from "../../styles/theme";

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: -5vh;
  width: 100%;
`;
export const StyledButton = styled.button`
  &.Button {
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 900;
    cursor: pointer;
  }
  &.SurveyButton {
    width: 100%;
    color: white;
    bottom: 20px;
  }
  &.SurveyButtonActive {
    background-color: ${() => theme.colors.Main};
  }
  &.SurveyButtonDisabled {
    background-color: ${() => theme.colors.Neutral};
  }
`;
