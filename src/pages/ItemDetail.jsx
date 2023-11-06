import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";

const ItemDetail = ({ data }) => {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    setSelectedItem(data[id - 1]);
  }, [id]);
  return (
    <div className="ItemDetail">
      <section className="right-wrapper">
        <Header btn={"prev"} title={"영양갱"} />
        <div className="visual-wrap"></div>
        <div>
          <p>{selectedItem?.id}번 상품</p>
          <h2 style={{ marginBottom: "1rem" }}>{selectedItem?.name}</h2>
          <p>상품 소개</p>
          <p style={{ marginBottom: "1rem" }}>{selectedItem?.co}</p>
          <h2>{selectedItem?.price} 원</h2>
        </div>
      </section>
    </div>
  );
};

export default ItemDetail;
