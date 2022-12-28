import React from "react";
import "./About.css";
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import logo3 from "./img/logo3.png";
import logo4 from "./img/logo4.png";
import Typical from "react-typical";

//  Up To Top Btn
window.addEventListener("scroll", function () {
  const upToTop = document.querySelector("a.bottom__to__top");
  upToTop.classList.toggle("active", window.scrollY > 0);
});
const About = () => {
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
       
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10  left">Hi, there</h1>
              <h2 className="home__text pz__10">I’m Dulanjana Lakshan</h2>
              <h3 className="home__text sweet pz__10 " style={{ fontSize: 50 }}>
                I’m a
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer",
                    500,
                    "Software Developer ",
                    2000,
                    "UI Designer",
                    2000,
                    "Android App Developer",
                    2000,
                  
                  ]}
                />
              </h3>
              <h5 className="home__text pz__10"></h5>
              <br></br>
              <br></br>

              <a href="https://wa.me/+94775546066">
                <img
                  style={{ marginLeft: 20 }}
                  src={logo2}
                  alt=""
                  className="logo2"
                />
              </a>
              <a href="https://www.linkedin.com/in/dulanjana-lakshan/">
                <img
                  style={{ marginLeft: 20 }}
                  src={logo3}
                  alt=""
                  className="logo1"
                />
              </a>
              <a href="https://github.com/Dulanjana9914">
                <img
                  style={{ marginLeft: 20 }}
                  src={logo4}
                  alt=""
                  className="logo1"
                />
              </a>
              <a href="mailto:dulanjana.ha@gmail.com">
                <img
                  style={{ marginLeft: 20 }}
                  src={logo1}
                  alt=""
                  className="logo1"
                />
              </a>
            </div>
          </div>
        </div>
          </div>
          <br />
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <br />
            <br />
            <div className="about__meta">
              <p className="about__text p__color">
                I am an final year undergraduate student at Sri Lanka Institute of
                Information Technology(SLIIT), graduating with a BSc (Hons) in
                Information Technology, Specialization in Software Engineering.
              </p>
              <br />
              <p className="about__text p__color">
              In my academic life I have gained theoretical and practical knowledge in the field of 
              software engineering. I have completed a 6-month internship and have work and industrial 
              experiences with real customer projects. Mainly I involved with ERP systems’ configurations 
              in customer environment and server-side development using Oracle PL/SQL.
              

              </p>
              <p className="about__text p__color">
              I love to learn new technologies and apply those experiences to build my career. 
              I am much familiar with MERN stack, since I used it in most of my academic projects. 
              I am a self-motivated,innovative, and quick learner, who is willing to perform towards
              the advancement of the IT field.I always try to do my best in any work that I am interact with
              and uplift the people that I work with. I think I am a good listener with strong attention to 
              details and a good team player.
              </p>
              <br />
              <br />

              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1YZSi0Sc1m5Ml0gA3FINPKxpEv2BVdlb2/view?usp=sharing">
                  <button className="about btn pointer">Download CV</button>
                </a>
                <a href="https://medium.com/@it20265892">
                  <button className="about btn pointer">Personal Blog</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default About;
