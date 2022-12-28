import React from "react";
import "./Project.css";
import Project1 from "./img/waste.jpg";
import Project2 from "./img/project2.jpg";
import Project3 from "./img/project3.jpg";
import Project4 from "./img/project4.jpg";
import Project7 from "./img/project7.jpg";
import Project8 from "./img/project8.jpg";
import Project9 from "./img/project9.jpg";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">Academic Projects</h1>
        <p className="heading p__color"></p>
        <p className="heading p__color"></p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project7}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  <b>Classy Services</b>
                  <br /> <br></br>
                  A web application for service <br></br>
                  buyers and service providers
                </h4>
                <h6 className="project__text">
                  Developed by using MERN Stack <br />
                  <br />
                </h6>
                <br />
                <br />
                <a
                  href="https://github.com/Sanjula-Dulshan/Classy-service"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project9}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  QR Scanner Application
                </h4>
                <h6 className="project__text">
                  Developed by using React Native
                  <br />
                  <br></br>
                </h6>
                <br />
                <br></br>  <br></br>  <br></br>  <br></br>  <br></br> <br></br> 
                <a
                  href="https://github.com/Dulanjana9914/CSSE-QRScanner"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project8}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Research Management Tool 
                <br></br> 
                 For SLIIT</h4>
                <h6 className="project__text">
                  Developed by using 
                  MERN Stack
                </h6>
                <br /> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                <a
                  href="https://github.com/Dulanjana9914/Research-Management-Tool"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project1}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Waste Management System</h4>
                <h6 className="project__text">
                  Developed by using MERN Stack <br />
                 
                </h6>
                <br /> <br></br> <br></br> <br></br> <br></br> 
                <a
                  href="https://github.com/Dulanjana9914/ITP-Waste-Management-System"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project2}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Bus Ticket Booking System</h4>
                <h6 className="project__text">
                  React Native, Node.js, 
                  <br></br>Express.js, MongoDB
                </h6>
                <br /> <br></br> <br></br> <br></br> <br></br>
                <a
                  href="https://github.com/Sanjula-Dulshan/SER005-falcon"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project3}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                Web application with social  
                <br></br> media login and signup
                 <br></br> features
                </h4>
                <h6 className="project__text">
                 Developed by using React.js, Node.js, 
                 <br></br>Redux, GoogleAuth, MongoDB
                </h6>
                <br /> <br></br> <br></br>
                <a
                  href="https://github.com/Dulanjana9914/Sample_MERN_Project"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={Project4}
                    alt=""
                    className="project__img"
                    style={{ height: 450 }}
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Online Book Store</h4>
                <h6 className="project__text">
                  Developed using Java, Firebase <br />
                </h6>
                <br />
                <a
                  href="https://github.com/Dulanjana9914/MAD_complete"
                  className="project__btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default Project;
