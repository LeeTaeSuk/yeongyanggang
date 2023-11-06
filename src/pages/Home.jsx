import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { UserStateContext } from "../App";

const Home = ({ data }) => {
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

  return (
    <div className="Home">
      <section className="right-wrapper">
        <Header title={"영양갱"} />
        <div className="contents">
          <div className="visual-wrap"></div>
          <div className="recommend-wrap">
            <h1 className="h1-title">{user}</h1>
            <div className="recommend-item-wrap">
              {data &&
                data.map((it) => {
                  if (it.id <= 6) {
                    return (
                      <Link
                        to={`/itemDetail/${it.id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <div className="recommend-item" key={it.id}>
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
                      </Link>
                    );
                  }
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
