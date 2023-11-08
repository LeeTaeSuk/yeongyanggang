import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { ProductInfoStateContext, CompareItemDispatchContext } from "../App";

const CompareItemList = () => {
  const [clickItem, setClickItem] = useState();

  const navigate = useNavigate();
  const { onCompareItemCreate } = useContext(CompareItemDispatchContext);
  const productInfoList = useContext(ProductInfoStateContext);

  const handleSelection = () => {
    if (clickItem) {
      const filteredItem = productInfoList.filter(
        (productInfo) => productInfo.LCNS_NO === clickItem
      );
      console.log(filteredItem);
      if (filteredItem) {
        onCompareItemCreate(
          filteredItem[0].LCNS_NO,
          filteredItem[0].BSSH_NM,
          filteredItem[0].PRDLST_NM,
          filteredItem[0].RAWMTRL_NM
        );
        navigate("/compareItem");
      }
    }
  };
  console.log(clickItem);

  console.log(productInfoList);

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
                return (
                  <div
                    className={`recommend-item compare-list-item ${
                      clickItem === productInfo.LCNS_NO ? "selected" : ""
                    }`}
                    onClick={() => {
                      setClickItem(productInfo.LCNS_NO);
                    }}
                  >
                    <div className="recommend-item-top">
                      <div className="item-img">
                        <img
                          src="https://via.placeholder.com/150x126"
                          alt="샘플이미지"
                        />
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
