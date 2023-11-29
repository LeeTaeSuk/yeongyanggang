import styled from "styled-components";
import theme from "../../styles/theme";

export const RecommendWrap = styled.div`
  margin-bottom: 20px;
`;

export const RecommendItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const h1Title = styled.h1`
  ${() => theme.common.h1Title}
`;

export const RecommendItem = styled.div`
  width: 150px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const RecommendItemTop = styled.div`
  margin-bottom: 10px;
`;

export const ItemImg = styled.img`
  width: 150px;
  height: 126px;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
`;

export const RecommendItemBottom = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const ItemBrand = styled.div`
  width: 150px;
  margin-bottom: 5px;
  color: #676767;
  font-size: 0.8rem;
  font-weight: 300;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ItemName = styled.div`
  color: #051929;
  font-size: 1rem;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
