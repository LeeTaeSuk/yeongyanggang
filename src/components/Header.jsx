import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ btn, title }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(-1);
  };

  return (
    <div className="Header">
      <div className="Header-wrap">
        <button
          className="menu-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          {btn}
        </button>
        <h2 className="header-title">{title}</h2>
      </div>
    </div>
  );
};

export default Header;
