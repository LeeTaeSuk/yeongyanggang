import { Link } from "react-router-dom";
import * as S from "./styles/RecommendItemList.style";

const RecommendItemList = ({ user, productInfoList }) => {
  const limitedProductInfoList = productInfoList.slice(0, 9);
  const imagePaths = [
    { PRDLST_REPORT_NO: "200400200072802", src: "/image/1.jpg" },
    { PRDLST_REPORT_NO: "2018001205620", src: "/image/2.jpg" },
    { PRDLST_REPORT_NO: "200400200061143", src: "/image/3.jpg" },
    { PRDLST_REPORT_NO: "2022002000236", src: "/image/4.jpg" },
    { PRDLST_REPORT_NO: "20040020014676", src: "/image/5.jpg" },
    { PRDLST_REPORT_NO: "20040020029213", src: "/image/6.jpg" },
    { PRDLST_REPORT_NO: "2018001217411", src: "/image/7.jpg" },
    { PRDLST_REPORT_NO: "200400200201030", src: "/image/8.jpg" },
    { PRDLST_REPORT_NO: "200400170061426", src: "/image/9.jpg" },
    { PRDLST_REPORT_NO: "200400200071197", src: "/image/10.jpg" },
    { PRDLST_REPORT_NO: "20040017025226", src: "/image/11.jpg" },
    { PRDLST_REPORT_NO: "20040017015204", src: "/image/12.jpg" },
  ];
  const getImage = (productInfo) => {
    const foundImage = imagePaths.find(
      (e) => e.PRDLST_REPORT_NO === productInfo.PRDLST_REPORT_NO
    );
    return foundImage ? foundImage.src : "";
  };
  return (
    <S.RecommendWrap>
      <S.h1Title>{user}</S.h1Title>
      <S.RecommendItemWrap>
        {limitedProductInfoList &&
          limitedProductInfoList.map((productInfo, index) => (
            <Link
              to={`/itemDetail/${productInfo.PRDLST_REPORT_NO}`}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <S.RecommendItem>
                <S.RecommendItemTop>
                  <S.ItemImg src={getImage(productInfo)} alt="샘플이미지" />
                </S.RecommendItemTop>
                <S.RecommendItemBottom>
                  <S.ItemBrand>{productInfo.BSSH_NM}</S.ItemBrand>
                  <S.ItemName>{productInfo.PRDLST_NM}</S.ItemName>
                </S.RecommendItemBottom>
              </S.RecommendItem>
            </Link>
          ))}
      </S.RecommendItemWrap>
    </S.RecommendWrap>
  );
};

export default RecommendItemList;
