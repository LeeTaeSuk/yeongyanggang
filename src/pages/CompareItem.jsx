import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { CompareItemDispatchContext, CompareItemStateContext } from "../App";
const CompareItem = () => {
  const compareItem = useContext(CompareItemStateContext);
  const { onCompareItemRemove } = useContext(CompareItemDispatchContext);

  const [item, setItem] = useState([]);

  useEffect(() => {
    if (compareItem && typeof compareItem === "object") {
      setItem(...item, compareItem);
    }
  }, [compareItem]);
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

  const handleResetBtn = () => {
    onCompareItemRemove();
  };

  return (
    <div className="CompareItem">
      <section className="right-wrapper">
        <Header btn={"prev"} title={"상품 비교"} path={"home"} />
        <div className="compare-content">
          <div className="compare-title">
            <h1 className="h1-title">🤔 상품 비교</h1>
            <h3 className="h3-title">
              상품 비교를 통해 원하는 상품을 찾아보세요!
            </h3>
          </div>
          <div className="compare-wrap">
            {item.length >= 1 ? (
              <div className="compare-item">
                <div className="compare-item-top">
                  <div className="item-img">
                    <img src={getImage(item[0])} alt="샘플이미지" />
                  </div>
                </div>
                <div className="compare-item-bottom">
                  <div className="item-brand">{item[0].BSSH_NM}</div>
                  <div className="item-name">{item[0].PRDLST_NM}</div>
                  <div className="item-brand">{item[0].RAWMTRL_NM}</div>
                </div>
              </div>
            ) : (
              <Link to={"/compareItemList"} style={{ textDecoration: "none" }}>
                <div className="compare-item compare-item-add-btn">+</div>
              </Link>
            )}
            {item.length >= 2 ? (
              <div className="compare-item">
                {" "}
                <div className="compare-item-top">
                  <div className="item-img">
                    <img src={getImage(item[1])} alt="샘플이미지" />
                  </div>
                </div>
                <div className="compare-item-bottom">
                  <div className="item-brand">{item[1].BSSH_NM}</div>
                  <div className="item-name">{item[1].PRDLST_NM}</div>
                  <div className="item-brand">{item[1].RAWMTRL_NM}</div>
                </div>
              </div>
            ) : (
              <Link to={"/compareItemList"} style={{ textDecoration: "none" }}>
                <div className="compare-item compare-item-add-btn">+</div>
              </Link>
            )}
          </div>
          <button className="more-check-prompt-btn" onClick={handleResetBtn}>
            다른 상품을 비교하고 싶으신가요?
          </button>
        </div>
      </section>
    </div>
  );
};

export default CompareItem;
