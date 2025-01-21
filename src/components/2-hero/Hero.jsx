import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section id={"about"} className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          {/* <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./vite.svg"
            className="avatar"
            alt=""
          /> */}
          <img src="me.png" height="150" width="150"></img>
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Software developer
        </motion.h1>

        <p className="sub-title">
        I’m Mohamad Jisri, a junior software developer with a strong passion for creating innovative solutions that enhance efficiency and user experiences. 
        My expertise includes Python development, AI, automation, and Amazon AWS Certified Developer – Associate. 
        I have hands-on experience building intelligent chatbots, automating workflows, and contributing to agile teams. 
        Skilled in Flask, GitHub workflows, and Linux environments, I deliver robust and scalable solutions.
        <br /><br />
        I thrive in collaborative settings and enjoy using cutting-edge technologies to solve complex problems. 
        Some of the projects I’ve worked on during my studies, work, and free time are listed below (others are excluded due to company policies). 
        I’ve also contributed to designing crypto-related websites and other impactful projects.
          <br /><br />
          <h3>Prior Work Expierence Highlights:</h3> 
          - Built a custom AI chatbot using PyTorch and NLP At <a href="https://learn2earn.se/" target="_blank" rel="noopener noreferrer" className="hyperlink">Learn2Earn AB</a> that improved customer satisfaction and enabling seamless integration with e-commerce platforms.
          <br /><br />
          - Developed Python automation scripts at <a href="https://www.ctek.com/se/" target="_blank" rel="noopener noreferrer" className="hyperlink">CTEK E-Mobility Center</a>, that reduced repetitive tasks by up to 30%, allowing teams to focus on strategic projects.
          <br /><br />
          
        </p>

        <div className="all-icons flex">
          <a
            href="https://github.com/mohamadjisri"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/mohamad-jisri-a6354b135/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon-linkedin"
          ></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
}
