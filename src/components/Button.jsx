import React from "react";
const Button = ({ text, type, state, onClick }) => {
  return (
    <div className="Button">
      <button
        className={["button", `${type}-button`, `${type}-button-${state}`].join(
          " "
        )}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
