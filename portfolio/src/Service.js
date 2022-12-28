import React from "react";
import "./Service.css";

function Service() {
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <br />
        <h1 className="heading">My Services</h1>

        <p className="heading p__color"></p>
      </div>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Android app development</h1>
                <p className="p service__text p__color">
                  Develop Android App Using Java and React Native.
                </p>
                <p className="p service__text p__color">
                  Use Android Studio and VS Code
                </p>
                <p className="p service__text p__color">
                  
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Web application development</h1>
                <p className="p service__text p__color">
                  Develop a Website using MERN Stack
                </p>
                <p className="p service__text p__color">
                  JaveScript, CSS ,HTML, Bootstrap
                </p>
                <p className="p service__text p__color">MongoDB, My SQL</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">UI designing</h1>
                <p className="p service__text p__color">
                  Design UI, Wireframes using
                </p>
                <p className="p service__text p__color">Adobe XD, Figma.</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
