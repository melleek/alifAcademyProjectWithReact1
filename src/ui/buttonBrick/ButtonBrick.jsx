import React from "react";
import "./buttonBrick.css";

export default function ButtonBrick({
  text,
  onClick,
  style = {},
  className = ""
}) {
  return (
    <button
      className={`custom-button ${className}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
