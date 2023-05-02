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
        <div className="projects_container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={fade}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Frontend and FullStack</p>
            <p className="heading-text">PROJECTS</p>
          </motion.div>
          <Link to="/">
            <button className="btn">
              <b>Home Page</b>
            </button>
          </Link>
          <motion.div
            className="works-box"
            initial={{ opacity: 0 }}
            whileInView={fade}
          >
            {ProjectsData.map((p, index) => {
              return (
                <div className="myCard" key={index}>
                  <div className="innerCard">
                    <div className="frontSide">
                      <h1 className="title">{p.title}</h1>
                      <img src={p.images} alt={p.title} />
                    </div>
                    <div className="backSide">
                      <p className="back_title">{p.desc}</p>

                      <div className="icon_container">
                        <Link className="icon code" to={p.gitlink}>
                          <AiFillGithub />
                        </Link>
                        <Link className="icon demo" to={p.site}>
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
