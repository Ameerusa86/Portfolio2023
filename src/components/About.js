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
                Greetings! I'm Ameer, a budding Fullstack Developer on an
                exciting expedition through the ever-evolving landscape of
                technology. My voyage began when I took my first steps into web
                and Android app development back in 2020, captivated by the
                prospect of bringing digital dreams to life. Starting with
                humble school projects, I dabbled in the art of weaving together
                HTML, CSS, and Java, sculpting simple ideas into functional
                websites. This journey transformed into a passion, propelling me
                to explore deeper into the world of coding and creation.
              </p>
              <br />
              <p>
                {" "}
                Today, armed with a strong foundation and an insatiable
                curiosity, I'm immersed in the realm of ReactJS and the
                versatile MERN stack — MongoDB, ExpressJS, ReactJS, NodeJS and
                NextJS. As a junior fullstack developer, I relish the
                opportunity to bridge the gap between back-end complexities and
                front-end aesthetics, crafting seamless user experiences from
                end to end. But it's not just about code for me. I'm driven by
                the desire to solve real-world puzzles, to contribute
                meaningfully to the digital tapestry that connects us all. Every
                challenge I conquer and every project I bring to life is a step
                forward in my journey as a junior fullstack developer. Join me
                as I embrace the exhilarating challenges, celebrate the small
                victories, and continue to refine my skills in the captivating
                realm of technology.
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
