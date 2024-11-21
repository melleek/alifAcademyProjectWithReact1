import React from "react";
import "./buttonBrick.css";

export const ButtonBrick = ({ text, onClick, style = {}, className = "" }) => (
  <button
    className={`custom-button ${className}`}
    style={style}
    onClick={onClick}
  >
    {text}
  </button>
);
