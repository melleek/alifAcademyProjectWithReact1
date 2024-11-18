import React from "react";
import "./button.css";

export default function Button({ text, onClick, style = {}, className = "" }) {
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
