import React from "react";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ btn, title, path }) => {
  const navigate = useNavigate();
  const handleMenuBtn = (path) => {
    if (path === "home") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };

  const btnType = (btn) => {
    if (btn === "prev") return <FontAwesomeIcon icon={faArrowLeft} />;
  };

  return (
    <div className="Header">
      <div className="Header-wrap">
        {btn && (
          <button
            className={["menu-btn", `menu-${btn}-btn`].join(" ")}
            onClick={() => {
              handleMenuBtn(path);
            }}
          >
            {btnType(btn)}
          </button>
        )}
        <h2 className="header-title">{title}</h2>
      </div>
    </div>
  );
};

Header.defaultProps = {
  linkTo: "default",
};

export default Header;
