import React from "react";
import "./Projects.css";
import bookmyshow from "../../assets/bookmyshow.png"
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiCss3,
  SiReact,
  SiBootstrap,
  SiStyledcomponents,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import { ecom, intercove, quiz, snake, tasky } from "../../assets";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          {/* book my */}
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={bookmyshow} alt="Rockstar Games" />
                </div>
              </div>
              <div className="project_information">
                <h2>Book my Show CLone - Full Stack</h2>
                <p>
                  It is a Landing page of BookmyShow built using MERN Stack
                  technology . Frontend design has been built using React js and
                  for backend node js is used where data is fetched from mongoDB
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb style={{ color: "green" }} />
                  <FaReact />
                  <SiMaterialui />
                </div>
                <div>
                  <a
                    href="https://smritiriya.github.io/book_my_show/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/smritiriya/book_my_show"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={tasky} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Tasky App -Full Stack</h2>
                <p>
                  A task management tool with image attachment, note-taking,
                  search, and easy task deletion. Demonstrates my frontend,
                  backend, and database integration skills, providing a
                  practical solution for enhanced productivity and organization.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://smritiriya.github.io/Tasky_todo_Appln/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      see this live{" "}
                    </span>
                  </a>
                  <a
                    href="https://github.com/smritiriya/Tasky_todo_Appln"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={ecom} alt="Sk-Weather-App" />
                </div>
              </div>
              <div className="project_information">
                <h2>Ecommerce </h2>
                <p>
                  Developed a dynamic eCommerce web app using React, providing
                  an intuitive shopping experience. Demonstrates expertise in
                  React, frontend development, and UI design.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiStyledcomponents />
                </div>
                <div>
                  <a
                    href="https://master--vocal-sundae-6e33b4.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/smritiriya/gadgetgrove"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={intercove} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Intercove</h2>
                <p>
                  Intercove is Ed tech website which is built to showcase
                  expertise in React along with integrating the API
                </p>
                <div>
                  <SiReact />
                  <SiBootstrap />
                </div>
                <div>
                  <a
                    href="https://interncove.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/API.JS-Mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={quiz} alt="Uniqlo-Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Quiz App</h2>
                <p>
                  A fun and interactive project showcasing my HTML, CSS, and
                  JavaScript skills. Features engaging user interfaces, dynamic
                  interactions, and immediate feedback.
                </p>
                <div>
                  <SiHtml5 />
                  <SiCss3 />
                  <SiJavascript />
                </div>
                <div>
                  <a
                    href="https://smritiriya.github.io/QuizApp/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/smritiriya/QuizApp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={snake} alt="PulsePlus-Clone" />
                </div>
              </div>
              <div className="project_information">
                <h2>Snake Game</h2>
                <p>
                  A classic snake game implemented with HTML, CSS, and
                  JavaScript. Players control the snake to eat food and grow
                  longer while avoiding collisions. Simple yet entertaining
                  gameplay for users to enjoy.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://smritiriya.github.io/SnakeGame/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/smritiriya/SnakeGame/tree/master"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};
