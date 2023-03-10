import React, { useState } from "react";
import "./Home.css";

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toggle Menu
  const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className=""></div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Skills">
                <li className="nav__items mx__15">Achievements</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg
              onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>

          {show ? (
            <div className="sideNavbar1">
              <ul className="sidebar d__flex">
                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Home">
                    Home
                  </a>
                </li>
                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#About">
                    About
                  </a>
                </li>
                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Services">
                    Services
                  </a>
                </li>
                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Portfolio">
                    Projects
                  </a>
                </li>

                <li className="sideNavbar">
                  <a className="sideNavbarLinks" href="#Skills">
                    Achievements
                  </a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
     
      </div>
    </div>
  );
}

export default Home;
