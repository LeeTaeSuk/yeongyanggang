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

import Title from "./pages/Title";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./pages/ItemDetail";

function App() {
  const data = [
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
  return (
    <div className="App">
      <Title />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/surveyStart" element={<SurveyStart />} />
          <Route path="/itemDetail/:id" element={<ItemDetail data={data} />} />
          <Route path="/survey1" element={<Survey1 />} />
          <Route path="/survey2" element={<Survey2 />} />
          <Route path="/survey3" element={<Survey3 />} />
          <Route path="/survey4" element={<Survey4 />} />
          <Route path="/survey5" element={<Survey5 />} />
          <Route path="/survey6" element={<Survey6 />} />
          <Route path="/surveyEnd" element={<SurveyEnd />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
