import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { ProductInfoStateContext, UserStateContext } from "../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const userData = useContext(UserStateContext);
  const productInfoList = useContext(ProductInfoStateContext);

  const [user, setUser] = useState("💊 현재 가장 인기 있는 영양제");

  console.log(
    productInfoList.forEach((e) => {
      console.log(e.PRDLST_REPORT_NO);
    })
  );
  useEffect(() => {
    console.log(userData);
    if (userData.name) {
      setUser("💊 " + userData.name + "님, 이 영양제는 어떠신가요?");
    } else {
      setUser("💊 현재 가장 인기 있는 영양제");
    }
  }, []);

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 350,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="Home">
      <section className="right-wrapper">
        <Header title={"영양갱"} />
        <div className="contents">
          <div className="visual-wrap">
            <Slider {...settings}>
              <div className="visual-section">
                <div className="visual-page visual-page-1">
                  <span>여러분의 영양제 박사 영양갱이</span>
                  <br />
                  맞춤 영양제를 추천해 드릴게요!
                  <div className="visual-page-icon">💊👨‍⚕️</div>
                </div>
              </div>
              <div className="visual-page visual-page-2">
                <span>혹시 아직도 영양제 못 고르셨나요?</span>
                <br />
                원하는 영양제끼리 한 눈에 비교해 보세요!
                <div className="visual-page-icon">💊❔🙋‍♀️</div>
              </div>
              <div className="visual-page visual-page-3">
                <span>매달 영양제 시키지 마세요!</span>
                <br />
                영양갱이 집 앞까지 배송해 드릴게요
                <div className="visual-page-icon">💊🏠📦</div>
              </div>
            </Slider>
          </div>
          <div className="recommend-wrap">
            <h1 className="h1-title">{user}</h1>
            <div className="recommend-item-wrap">
              {limitedProductInfoList &&
                limitedProductInfoList.map((productInfo, index) => {
                  // if (productInfo.row <= 6) {
                  return (
                    <Link
                      to={`/itemDetail/${productInfo.PRDLST_REPORT_NO}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="recommend-item" key={index}>
                        <div className="recommend-item-top">
                          <div className="item-img">
                            <img src={getImage(productInfo)} alt="샘플이미지" />
                          </div>
                        </div>
                        <div className="recommend-item-bottom">
                          <div className="item-brand">
                            {productInfo.BSSH_NM}
                            {/* {truncateText(productInfo.BSSH_NM, 20)} */}
                          </div>
                          <div className="item-name">
                            {productInfo.PRDLST_NM}

                            {/* {truncateText(productInfo.PRDLST_NM, 30)} */}
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
            <h1 className="h1-title">💪 영양갱이랑 건강 관리 시작해요!</h1>
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
