import React, { useState, useContext, useEffect } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { ProductInfoStateContext, UserStateContext } from "../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import * as S from "./styles/Home.style";
import Visual from "../components/Visual";
import RecommendItemList from "../components/RecommendItemList";
import Banner from "../components/Banner";

const Home = () => {
  const userData = useContext(UserStateContext);
  const productInfoList = useContext(ProductInfoStateContext);
  const [user, setUser] = useState("");

  useEffect(() => {
    console.log(userData);
    if (userData.name) {
      setUser("💊 " + userData.name + "님, 이 영양제는 어떠신가요?");
    } else {
      setUser("💊 현재 가장 인기 있는 영양제");
    }
  }, []);

  return (
    <>
      <S.rightWrapper>
        <Header title={"영양갱"} />
        <S.HomeContent>
          <Visual />
          <RecommendItemList user={user} productInfoList={productInfoList} />
          <Banner />
        </S.HomeContent>
      </S.rightWrapper>
    </>
  );
};

Home.defaultProps = {
  name: "💊 현재 가장 인기 있는 영양제",
};

export default Home;
