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
          Software developer, founder, and marketer.
        </motion.h1>

        <p className="sub-title">
          I’m Mohamad Jisri, a software developer and entrepreneur based in
          Sweden City. In addition to my education in software development, I
          also have experience in consulting/marketing for crypto projects. I
          have worked on several crypto projects together with a large team in
          various roles. I have practical experience in blockchain, web
          development and digital currency contract development. In addition, I
          was involved in the design of their websites, and some of the projects
          I was most involved in can be found below.
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
