import styled from "styled-components";
import theme from "../../styles/theme";

export const rightWrapper = styled.section`
  ${() => theme.common.rightWrapper}
`;

export const HomeContent = styled.div`
  ${() => theme.common.content}
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
