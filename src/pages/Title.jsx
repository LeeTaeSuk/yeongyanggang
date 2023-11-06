import React from "react";

const Title = () => {
  return (
    <div className="Title">
      <section className="left-wrapper">
        <div className="title-wrap">
          <div className="sub-title">쉽고, 빠르게 나를 위한 영양제 찾기</div>
          <div className="main-title">영양갱</div>
        </div>
        <div className="line"></div>
        <div className="service-des-wrap">
          <div className="service-des">
            영양갱에 대해 <br />더 알아보기
          </div>
          <div className="service-qr">
            <img src="https://via.placeholder.com/60x60" alt="샘플이미지"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Title;
