import React from "react";
import "./Skills.css";
import certificate1 from "./img/cet1.jpg";


function Skills() {
  return (
    <div className="project component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">Achievements</h1>
        <p className="heading p__color"></p>
        <p className="heading p__color"></p>
      </div>
      <div>
        <h2 className="heading leftSide">SLIIT Dean's List Certificates</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src={certificate1}
                    style={{ height: 450 }}
                    alt=""
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills;
