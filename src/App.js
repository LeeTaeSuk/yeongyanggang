import React, { useReducer, useState, useEffect, cloneElement } from "react";
import "./App.css";
import Home from "./pages/Home";
import SurveyStart from "./pages/SurveyStart";
import Survey1 from "./pages/Survey1";
import Survey2 from "./pages/Survey2";
import Survey3 from "./pages/Survey3";
import Survey4 from "./pages/Survey4";
import Survey5 from "./pages/Survey5";
import Survey6 from "./pages/Survey6";
import SurveyEnd from "./pages/SurveyEnd";
import CompareItem from "./pages/CompareItem";
import CompareItemList from "./pages/CompareItemList";
import axios from "axios";

import Title from "./pages/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";

export const UserStateContext = React.createContext();
export const UserDispatchContext = React.createContext();

export const CompareItemStateContext = React.createContext();
export const CompareItemDispatchContext = React.createContext();

export const ProductInfoStateContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_INIT": {
      return action.userData;
    }
    case "COMPARE_ITEM_CREATE": {
      const newItem = {
        ...action.compareItem,
      };
      console.log(newItem, ...state);
      return [newItem, ...state];
      // return action.compareItem;
    }

    case "COMPARE_ITEM_REMOVE": {
      return [];
    }
    default:
      return state;
  }
};

function App() {
  const [userData, userDataDispatch] = useReducer(reducer, []);
  const [compareItem, compareItemDispatch] = useReducer(reducer, []);
  // api
  const [productInfoList, setProductInfoList] = useState([]); // 여러 개의 제품 정보를 저장하기 위한 배열

  const apiKey = "2ee49d7b66684380b0b1";
  const serviceId = "I0030";
  const dataType = "json";
  const startIdx = "1"; // 시작 인덱스
  const endIdx = "12"; // 종료 인덱스 (10개의 결과를 가져올 예시)
  const productName = "비타민"; // 혹은 다른 검색어

  const callApi = async () => {
    try {
      const response = await axios.get(
        `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/${serviceId}/${dataType}/${startIdx}/${endIdx}/PRDLST_NM=${productName}`
      );
      console.log("성공", response.data.I0030.row);
      return response.data.I0030.row;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await callApi();
        if (data) {
          setProductInfoList(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  // 유저 정보 생성
  const onUserCreate = (name, birthYear, birthMonth, birthDay, gender) => {
    userDataDispatch({
      type: "USER_INIT",
      userData: {
        name,
        birth: birthYear + "년 " + birthMonth + "월 " + birthDay + "일",
        gender,
      },
    });
    console.log("onUserCreate 실행!");
  };

  // 비교 아이템 생성
  const onCompareItemCreate = (LCNS_NO, BSSH_NM, PRDLST_NM, RAWMTRL_NM) => {
    compareItemDispatch({
      type: "COMPARE_ITEM_CREATE",
      compareItem: {
        LCNS_NO,
        BSSH_NM,
        PRDLST_NM,
        RAWMTRL_NM,
      },
    });
    console.log("onCompareItemCreate 실행!");
  };
  //비교 아이템 삭제
  const onCompareItemRemove = () => {
    compareItemDispatch({
      type: "COMPARE_ITEM_REMOVE",
    });
  };

  console.log(productInfoList);

  return (
    <div className="App">
      <Title />
      <ProductInfoStateContext.Provider value={productInfoList}>
        <UserStateContext.Provider value={userData || ""}>
          <UserDispatchContext.Provider value={{ onUserCreate }}>
            <CompareItemStateContext.Provider value={compareItem}>
              <CompareItemDispatchContext.Provider
                value={{ onCompareItemCreate, onCompareItemRemove }}
              >
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/surveyStart" element={<SurveyStart />} />
                    <Route path="/itemDetail/:id" element={<ItemDetail />} />
                    <Route path="/survey1" element={<Survey1 />} />
                    <Route path="/survey2" element={<Survey2 />} />
                    <Route path="/survey3" element={<Survey3 />} />
                    <Route path="/survey4" element={<Survey4 />} />
                    <Route path="/survey5" element={<Survey5 />} />
                    <Route path="/survey6" element={<Survey6 />} />
                    <Route path="/surveyEnd" element={<SurveyEnd />} />
                    <Route path="/compareItem" element={<CompareItem />} />
                    <Route
                      path="/compareItemList"
                      element={<CompareItemList />}
                    />
                  </Routes>
                </BrowserRouter>
              </CompareItemDispatchContext.Provider>
            </CompareItemStateContext.Provider>
          </UserDispatchContext.Provider>
        </UserStateContext.Provider>
      </ProductInfoStateContext.Provider>
    </div>
  );
}

export default App;
