import React, { useState } from "react";
import "./navbar.css";
import { SubNavbar } from "./components/SubNavbar";
import logo from "../assets/icons/footerLogoIcon.png";
import { ButtonBrick } from "../ui/buttonBrick/ButtonBrick";

export const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <SubNavbar isOpen={open} onClose={() => setOpen(false)} />
      <nav className="navbar">
        <img
          onClick={() => setOpen(true)}
          src={logo}
          style={{ width: "105px", cursor: "pointer" }}
        />

        <section className="secLeftRightSide">
          <aside className="leftSideNav">
            <p>Home</p>
            <p>
              Properties
              <img
                src="src/assets/icons/expand_more.png"
                className="iconsArrowNav"
              />
            </p>
            <p>About</p>
            <p>Contact</p>
            <p>
              <img
                src="src/assets/icons/search.png"
                className="iconsSearchNav"
              />
              Search
            </p>
          </aside>
          <aside className="rightSideNav">
            <button className="buttonWhite">
              <img src="src/assets/icons/shopping_bag.png" alt="" />
              Cart
            </button>
            <ButtonBrick text="Find a property" />
          </aside>
        </section>
      </nav>
    </>
  );
};
