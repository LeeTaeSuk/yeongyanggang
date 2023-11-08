import React, { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import { ProductInfoStateContext } from "../App";

const ItemDetail = () => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState();
  const productInfoList = useContext(ProductInfoStateContext);

  useEffect(() => {
    const filteredItem = productInfoList.find(
      (productInfo) => productInfo.PRDLST_REPORT_NO === id
    );
    setSelectedItem(filteredItem);
  }, [id, productInfoList]);

  console.log(productInfoList);
  console.log(selectedItem);
  console.log(id);

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

  const getImage = (prdlstReportNo) => {
    const foundImage = imagePaths.find(
      (e) => e.PRDLST_REPORT_NO === prdlstReportNo
    );

    return foundImage ? foundImage.src : "";
  };

  if (!selectedItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ItemDetail">
      <section className="right-wrapper">
        <Header btn={"prev"} title={"제품정보"} />
        <div className="item-detail-content">
          <div className="item-detail-img">
            <img
              src={getImage(selectedItem.PRDLST_REPORT_NO)}
              alt="샘플이미지"
            />
          </div>

          {/* <p>{id}번 상품</p> */}
          <div className="item-detail-name-wrap">
            <p className="item-detail-bssh">{selectedItem.BSSH_NM}</p>
            <h1 className="h1-title">{selectedItem.PRDLST_NM}</h1>
          </div>
          <div></div>
          <div className="item-detail-des-wrap">
            <h3 className="h3-title">품목유형</h3>
            <div></div>
            <p>{selectedItem.RAWMTRL_NM}</p>
          </div>
          <div className="item-detail-des-wrap">
            <h3 className="h3-title">주된기능성</h3>
            <div></div>
            <p>{selectedItem.PRIMARY_FNCLTY}</p>
          </div>
          <div className="item-detail-des-wrap">
            <h3 className="h3-title">기능성 원재료</h3>
            <div></div>
            <p>{selectedItem.INDIV_RAWMTRL_NM}</p>
          </div>
          <div className="item-detail-des-wrap">
            <h3 className="h3-title">섭취시 주의사항</h3>
            <div></div>
            <p>{selectedItem.IFTKN_ATNT_MATR_CN}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
