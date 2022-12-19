import React, { useState } from "react";
import "./Work.css";
import { projects } from "../../assets/projects";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { translation } from "../../assets/translations";
import { useStateContext } from "../../contexts/ContextProvider";

const Work: React.FC = () => {
  const [open, setOpen] = useState<string>("");
  const { language } = useStateContext();
  let content: any;

  language === "EN"
    ? (content = translation.work.en)
    : (content = translation.work.pl);

  return (
    <div className="work-container">
      <div className="work-exp">
        <h3>{content.exp}</h3>
        <p>
          <span>04.2021 - 01.2022</span>
          <span>
            <b>Staż z Lwem</b> - Expert Team Media, Programmatic & Effectiveness
            | ING Bank Śląski SA | Katowice
          </span>
          <span>
            <b>{content.scope}</b> {content.desc}
          </span>
        </p>
      </div>
      <div className="work-projects">
        <div className="projects">
          <h3>{content.projects}</h3>
          <ul>
            {projects.map((project) => (
              <li
                onMouseEnter={() => setOpen(project.name)}
                onMouseLeave={() => setOpen("")}
                key={project.name}
              >
                <a href={project.git} target="_blank" rel="noreferrer">
                  {project.name}
                </a>
                <span>
                  {open === project.name ? (
                    <AiFillEye className="green-eye" />
                  ) : (
                    <AiFillEyeInvisible className="red-eye" />
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="images">
          {projects.map((project) => (
            <div
              className="image-wrapper"
              style={{
                opacity: open === project.name ? 1 : 0,
                transform: `scale(${open === project.name ? 1 : 0.9})`,
              }}
              key={project.name}
            >
              <img src={project.image} alt={project.name} />
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
