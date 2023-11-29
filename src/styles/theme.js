import styled from "styled-components";

const colors = {
  Main: "#17c4cf",
  Neutral: "#d9d9d9",
};

const common = {
  h1Title: `
    margin-bottom: 20px;
    color: #051929;
    font-size: 1.5rem;
    font-weight: 900;
    font-weight: 900;
  `,
  rightWrapper: `
    width: 520px;
    height: 100vh;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #fff;
    overflow-y: scroll;
    overflow-x: hidden;
    box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.1);
  `,
  content: `
  height: calc(100vh - 60px);
  overflow-x: hidden;

  `,
};

const theme = {
  colors,
  common,
};

export default theme;
