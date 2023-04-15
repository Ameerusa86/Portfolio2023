import React from "react";
import "../styles/Projects.css";
import "../styles/Works.css";
import { SiNetlify } from "react-icons/si";
import { ProjectsData } from "../data/ProjectsData";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Projects = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.4,
    },
  };

  return (
    <>
      <div className="projects" id="projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={fade}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Fontend and FullStack</p>
            <p className="heading-text">PROJECTS</p>
          </motion.div>
          <Link to="/">
            <button>
              <b>Back to Home</b>
            </button>
          </Link>
          <motion.div
            className="works-box"
            initial={{ opacity: 0 }}
            whileInView={fade}
          >
            {ProjectsData.map((w, index) => {
              return (
                <div className="myCard" key={index}>
                  <div className="innerCard">
                    <div className="frontSide">
                      <h1 className="title">{w.title}</h1>
                    </div>
                    <div className="backSide">
                      <p className="back_title">{w.tech}</p>
                      <div className="icon_container">
                        <Link to={w.gitlink}>
                          <AiFillGithub className="icon" />
                        </Link>
                        <Link className="icon" to={w.site}>
                          <SiNetlify />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
