import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex">
      <section id={"projects"} className="flex  left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
        <button
          onClick={() => {
            handleClick("flutter");
          }}
          className={currentActive === "flutter" ? "active" : null}
        >
          Dart & Flutter
        </button>
        <button
          onClick={() => {
            handleClick("python");
          }}
          className={currentActive === "python" ? "active" : null}
        >
          Python
        </button>
      </section>

      <section className=" flex right-section">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
                key={item.imgPath}
                className="  card"
              >
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    Below you can find the links for the project
                  </p>

                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={item.linkPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-link"
                      ></a>
                      <a
                        href={item.githubPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-github"
                      ></a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
