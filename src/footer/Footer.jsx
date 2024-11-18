import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FotterLogo from "../assets/icons/footerLogoIcon.png";
import "./footer.css";
import Button from "../ui/button/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const handleSubscribe = () => {
    console.log("Button clicked!");
    toast.success("Проверьте вашу почту, мы отправили вам письмо.", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <footer className="footer">
        <div className="footerUp">
          <a href="/">
            <img src={FotterLogo} alt="logo" width={105} height={32} />
          </a>
          <div className="blockPages">
            <label>Pages</label>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Agents</a>
            <a href="#">Contacts</a>
            <a href="#">FAQs</a>
            <a href="#">Properties</a>
          </div>
          <div className="blockPages">
            <label>CMS Pages</label>
            <a href="#">Property</a>
            <a href="#">Property Single</a>
            <a href="#">Blog Categories</a>
            <a href="#">Blog Single</a>
            <a href="#">Agent Single</a>
          </div>
          <div className="blockPages">
            <label>Utility Pages</label>
            <a href="#">Style Guide</a>
            <a href="#">Changelog</a>
            <a href="#">Licenses</a>
            <a href="#">404</a>
            <a href="#">Password</a>
            <a href="#">Search</a>
          </div>
          <div className="blockPages">
            <label>Subscribe</label>
            <a>
              Join our newsletter to stay up to date on features and releases.
            </a>
            <div className="subscribeBTN">
              <input type="email" placeholder="Enter your email" required />
              <Button
                text="Subscribe"
                onClick={() => {
                  console.log("Button prop works!");
                  handleSubscribe();
                }}
              />
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <div className="footerBotoomPartOne">
            <p>© Realco by</p>
            <p>Minimal Square</p>
          </div>
          <div className="footerBotoomPartTwo">
            <FaFacebookF className="facebook" />
            <FaInstagram className="instagram" />
            <FaTwitter className="twitter" />
            <FaLinkedin className="linkedin" />
          </div>
        </div>
      </footer>
      {/* Контейнер для уведомлений */}
      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </>
  );
}
