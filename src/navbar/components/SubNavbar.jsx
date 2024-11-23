import { useState } from "react";
import "./subNavbar.css";
import { BiX } from "react-icons/bi";

export const SubNavbar = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="contentSub">
      <h1>Get your dream house in a week.</h1>
      <BiX onClick={onClose} color="white" className="iconsClose" />
    </div>
  );
};
