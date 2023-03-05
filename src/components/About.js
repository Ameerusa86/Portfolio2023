import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import ProfileImg from "../images/profile.png";

const About = () => {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  };

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={horizontal}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className="heading-text">About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={horizontal}
              className="about-content"
            >
              <p>
                Hello! My name is Ameer and I enjoy creating things that live on
                the internet. My interest in web development and Andriod app
                development started back in 2020 when I decided to try out for
                my school projects — turns out putting together a simple website
                taught me a lot about HTML, CSS, & Java!{" "}
              </p>
              <br />
              <p>
                {" "}
                Nowadys I'm working on enhancing my skills in ReactJS and
                MERN(MongoDB, ExpressJS, ReactJS & NodeJS) technologies. With my
                experience I have what it takes to solve real world problems.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: "50", opacity: 0 }}
              whileInView={horizontal}
              className="about-img"
            >
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
