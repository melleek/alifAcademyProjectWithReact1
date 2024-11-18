import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="footerUp"></div>
      <div className="footerBottom">
        <div className="footerBotoomPartOne">
          <p>© Realco by</p>
          <p>Minimal Square</p>
        </div>
        <div className="footerBotoomPartTwo">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
}
