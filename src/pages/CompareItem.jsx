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
              <div className="compare-item compare-item-wrap">
                <div className="recommend-item-top">
                  <div className="item-img">
                    <img
                      src="https://via.placeholder.com/150x126"
                      alt="샘플이미지"
                    />
                  </div>
                </div>
                <div className="recommend-item-bottom">
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
              <div className="compare-item compare-item-wrap">
                {" "}
                <div className="recommend-item-top">
                  <div className="item-img">
                    <img
                      src="https://via.placeholder.com/150x126"
                      alt="샘플이미지"
                    />
                  </div>
                </div>
                <div className="recommend-item-bottom">
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
