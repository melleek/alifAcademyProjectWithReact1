import React from "react";
import "./SectionSec.css";
import ButtonS from "../../ui/buttons/Button.jsx";
import interier from "../../assets/images/section-2.png";

export function SecondSection() {
  return (
    <div className="mainSection">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="firstSection">
          <div style={{ display: "flex", flexDirection: "column", gap: "21px" }}>
            <button className="gray-btn">Comfort first</button>
            <h1 className="didYou">
              {" "}
              The best houses for <br /> family comfort
            </h1>
            <p className="homeAgain">
              Ectus ipsum faucibus justo, et semper quam nisl in nibh. Pro{" "}
              <br /> in sollicitudin, lorem non posuere blandit.
            </p>
            <ButtonS />
          </div>
        </div>
        <div>
          <img src={interier} alt="" />
        </div>
      </div>
    </div>
  );
}
