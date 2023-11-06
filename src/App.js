import React, { useReducer, useState } from "react";
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

import Title from "./pages/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";

export const UserStateContext = React.createContext();
export const UserDispatchContext = React.createContext();

export const CompareItemStateContext = React.createContext();
export const CompareItemDispatchContext = React.createContext();

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

  const dataList = [
    {
      id: 1,
      co: "영양갱",
      name: "영양제1",
      price: 10000,
    },
    {
      id: 2,
      co: "영양갱",
      name: "영양제2",
      price: 10000,
    },
    {
      id: 3,
      co: "영양갱",
      name: "영양제3",
      price: 10000,
    },
    {
      id: 4,
      co: "영양갱",
      name: "영양제4",
      price: 10000,
    },
    {
      id: 5,
      co: "영양갱",
      name: "영양제5",
      price: 10000,
    },
    {
      id: 6,
      co: "영양갱",
      name: "영양제6",
      price: 10000,
    },
  ];

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
  const onCompareItemCreate = (id, co, name, price) => {
    compareItemDispatch({
      type: "COMPARE_ITEM_CREATE",
      compareItem: {
        id,
        co,
        name,
        price,
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
  return (
    <div className="App">
      <Title />
      <UserStateContext.Provider value={userData || ""}>
        <UserDispatchContext.Provider value={{ onUserCreate }}>
          <CompareItemStateContext.Provider value={compareItem}>
            <CompareItemDispatchContext.Provider
              value={{ onCompareItemCreate, onCompareItemRemove }}
            >
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home data={dataList} />} />
                  <Route path="/surveyStart" element={<SurveyStart />} />
                  <Route
                    path="/itemDetail/:id"
                    element={<ItemDetail data={dataList} />}
                  />
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
                    element={<CompareItemList data={dataList} />}
                  />
                </Routes>
              </BrowserRouter>
            </CompareItemDispatchContext.Provider>
          </CompareItemStateContext.Provider>
        </UserDispatchContext.Provider>
      </UserStateContext.Provider>
    </div>
  );
}

export default App;
