import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  const showNav = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navbar = document.querySelector("nav");

    menuBtn.addEventListener("click", () => {
      navbar.classList.toggle("open");
      menuBtn.classList.toggle("rotate");
    }, {once: true});
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Loopstudios" />
        </div>
        <nav>
          <div className="nav-logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <button>About</button>
              <div className="underline"></div>
            </li>
            <li>
              <button>Careers</button>
              <div className="underline"></div>
            </li>
            <li>
              <button>Events</button>
              <div className="underline"></div>
            </li>
            <li>
              <button>Products</button>
              <div className="underline"></div>
            </li>
            <li>
              <button>Support</button>
              <div className="underline"></div>
            </li>
          </ul>
        </nav>

        <div className="menu-btn" onClick={() => showNav()}>
          <div className="bar bar-1"></div>
          <div className="bar bar-2"></div>
          <div className="bar bar-3"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
