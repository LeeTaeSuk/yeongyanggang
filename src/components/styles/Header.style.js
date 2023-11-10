import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid #f0f0f0;
  background: #ffffff;

  color: #17c4cf;
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  width: 520px;
  height: 100%;
  margin: 0 auto;
`;
export const HeaderTitle = styled.h2`
  color: #17c4cf;
`;
export const menuBtn = styled.button`
  margin-right: 10px;
  border: none;
  background: none;
  font-size: 1.25rem;
  color: #17c4cf;
  cursor: pointer;
`;
