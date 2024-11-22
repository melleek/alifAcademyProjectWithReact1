import React from "react";
import "./Buttons.css";
import triangle from "../../assets/icons/chevron_right.svg";

function ButtonS() {
  return (
    <div className="btns">
      <button className="firstBtn">Explore properties</button>
      <button className="secondBtn">
        Contact agent{" "}
        <img style={{ marginLeft: "5px" }} src={triangle} alt="arrow" />
      </button>
    </div>
  );
}

export default ButtonS;