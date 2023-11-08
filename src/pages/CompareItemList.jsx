import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { ProductInfoStateContext, CompareItemDispatchContext } from "../App";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

const CompareItemList = () => {
  const [clickItem, setClickItem] = useState();

  const navigate = useNavigate();
  const { onCompareItemCreate } = useContext(CompareItemDispatchContext);
  const productInfoList = useContext(ProductInfoStateContext);

  const handleSelection = () => {
    if (clickItem) {
      const filteredItem = productInfoList.filter(
        (productInfo) => productInfo.PRDLST_REPORT_NO === clickItem
      );
      if (filteredItem.length > 0) {
        onCompareItemCreate(
          filteredItem[0].PRDLST_REPORT_NO,
          filteredItem[0].BSSH_NM,
          filteredItem[0].PRDLST_NM,
          filteredItem[0].RAWMTRL_NM
        );
        navigate("/compareItem");
      }
    }
  };

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

  console.log(productInfoList);
  console.log(clickItem);

  return (
    <div className="CompareItem">
      <section className="right-wrapper">
        <Header btn={"prev"} title={"상품 비교"} />
        <div className="compare-content">
          <div className="compare-title">
            <h1 className="h1-title">🤔 상품 비교</h1>
            <h3 className="h3-title">비교를 원하는 상품을 선택 해주세요!</h3>
          </div>
          <div className="compare-item-wrap">
            {productInfoList &&
              productInfoList.map((productInfo) => {
                const handleClick = (selectedItem) => {
                  setClickItem(selectedItem);
                };
                return (
                  <div
                    className={`recommend-item compare-list-item ${
                      clickItem === productInfo.PRDLST_REPORT_NO
                        ? "selected"
                        : ""
                    }`}
                    onClick={() => {
                      handleClick(productInfo.PRDLST_REPORT_NO);
                    }}
                  >
                    <div className="recommend-item-top">
                      <div className="item-img">
                        <img src={getImage(productInfo)} alt="샘플이미지" />
                      </div>
                    </div>
                    <div className="recommend-item-bottom">
                      <div className="item-brand">{productInfo.BSSH_NM}</div>
                      <div className="item-name">{productInfo.PRDLST_NM}</div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Button
            text={"선택하기"}
            type={"survey"}
            state={"active"}
            onClick={handleSelection}
          />
        </div>
      </section>
    </div>
  );
};

export default CompareItemList;
