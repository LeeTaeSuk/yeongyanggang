import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { CompareItemDispatchContext } from "../App";

const CompareItemList = ({ data }) => {
  const [clickItem, setClickItem] = useState();

  const navigate = useNavigate();
  const { onCompareItemCreate } = useContext(CompareItemDispatchContext);

  const handleSelection = () => {
    if (clickItem) {
      const filteredItem = data.filter((it) => it.id === clickItem);
      if (filteredItem) {
        onCompareItemCreate(
          filteredItem[0].id,
          filteredItem[0].co,
          filteredItem[0].name,
          filteredItem[0].price
        );
        navigate("/compareItem");
      }
    }
  };
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
            {data &&
              data.map((it) => {
                if (it.id <= 6) {
                  return (
                    <div
                      className={`recommend-item compare-list-item ${
                        clickItem === it.id ? "selected" : ""
                      }`}
                      key={it.id}
                      onClick={() => {
                        setClickItem(it.id);
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
                        <div className="item-brand">{it.co}</div>
                        <div className="item-name">{it.name}</div>
                      </div>
                    </div>
                  );
                }
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
