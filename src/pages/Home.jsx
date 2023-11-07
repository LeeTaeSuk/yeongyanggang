import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { UserStateContext } from "../App";
import axios from "axios";

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

const Home = () => {
  const userData = useContext(UserStateContext);

  const [user, setUser] = useState("💊 현재 가장 인기 있는 영양제");

  useEffect(() => {
    console.log(userData);
    if (userData.name) {
      setUser("💊 " + userData.name + "님, 이 영양제는 어떠신가요?");
    } else {
      setUser("💊 현재 가장 인기 있는 영양제");
    }
  }, []);

  // api
  const [productInfoList, setProductInfoList] = useState([]); // 여러 개의 제품 정보를 저장하기 위한 배열
  const apiKey = "2ee49d7b66684380b0b1";
  const serviceId = "I0030";
  const dataType = "xml";
  const startIdx = "1"; // 시작 인덱스
  const endIdx = "9"; // 종료 인덱스 (10개의 결과를 가져올 예시)

  const productName = "비타민"; // 혹은 다른 검색어

  useEffect(() => {
    axios
      .get(
        `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/${serviceId}/${dataType}/${startIdx}/${endIdx}/PRDLST_NM=${productName}`
      )
      .then((response) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, "text/xml");
        const rows = xmlDoc.getElementsByTagName("row");

        const productInfos = [];

        for (let i = 0; i < rows.length; i++) {
          const row = rows[i];
          const productInfo = {};

          for (let j = 0; j < row.children.length; j++) {
            const child = row.children[j];
            productInfo[child.tagName] = child.textContent;
          }

          productInfos.push(productInfo);
          // console.log(truncateText(productInfo.LCNS_NO), 20);
        }

        setProductInfoList(productInfos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="Home">
      <section className="right-wrapper">
        <Header title={"영양갱"} />
        <div className="contents">
          <div className="visual-wrap"></div>
          <div className="recommend-wrap">
            <h1 className="h1-title">{user}</h1>
            <div className="recommend-item-wrap">
              {productInfoList &&
                productInfoList.map((productInfo, index) => {
                  // if (it.id <= 6) {
                  return (
                    <Link
                      to={`/itemDetail/${productInfo.PRDLST_REPORT_NO}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="recommend-item" key={index}>
                        <div className="recommend-item-top">
                          <div className="item-img">
                            <img
                              src="https://via.placeholder.com/150x126"
                              alt="샘플이미지"
                            />
                          </div>
                        </div>
                        <div className="recommend-item-bottom">
                          <div className="item-brand">
                            {truncateText(productInfo.BSSH_NM, 20)}
                          </div>
                          <div className="item-name">
                            {truncateText(productInfo.PRDLST_NM, 30)}
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                  // }
                })}
            </div>
          </div>
          <div className="banner-wrap">
            <h1 className="h1-title">💪 어떤 건강을 관리하고 싶으신가요?</h1>
            <div className="banner-item-wrap">
              <div className="banner-item banner-left-wrap">
                <Link to="/compareItem" style={{ textDecoration: "none" }}>
                  <h3 className="h3-title">
                    영양제, 아직도 <br /> 못 고르셨나요?
                  </h3>
                  <p>영양제 비교하러 가기</p>
                </Link>
              </div>
              <div className="banner-item banner-right-wrap">
                <Link to="/surveyStart" style={{ textDecoration: "none" }}>
                  <h3 className="h3-title">
                    몸 상태가
                    <br />
                    변화했나요?
                  </h3>
                  <p>설문조사 다시 하러 가기</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Home.defaultProps = {
  name: "💊 현재 가장 인기 있는 영양제",
};
export default Home;
