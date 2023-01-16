import React, { useState } from "react";
import { projects } from "../../assets/projects";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { translation } from "../../assets/translations";
import { useStateContext } from "../../contexts/ContextProvider";
import { BsArrowRight } from "react-icons/bs";
import {
  WorkContainer,
  WorkExp,
  WorkProjects,
  ProjectsElement,
  Images,
  ImageWrapper,
} from "./Work.styled";

const Work: React.FC = () => {
  const [open, setOpen] = useState<string>("");
  const { language } = useStateContext();
  let content: any;

  language === "EN"
    ? (content = translation.work.en)
    : (content = translation.work.pl);

  return (
    <WorkContainer>
      <WorkExp>
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
      </WorkExp>
      <WorkProjects>
        <ProjectsElement data-cy="projects">
          <h3>{content.projects}</h3>
          <ul>
            {projects.map((project) => (
              <li
                onMouseEnter={() => setOpen(project.name)}
                onMouseLeave={() => setOpen("")}
                key={project.name}
              >
                <a href={project.git} target="_blank" rel="noreferrer">
                  <BsArrowRight className="arrow" /> {project.name}
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
        </ProjectsElement>
        <Images>
          {projects.map((project) => (
            <ImageWrapper
              style={{
                opacity: open === project.name ? 1 : 0,
                transform: `scale(${open === project.name ? 1 : 0.9})`,
              }}
              key={project.name}
              data-cy="images"
            >
              <img src={project.image} alt={project.name} />
              <p>{project.desc}</p>
            </ImageWrapper>
          ))}
        </Images>
      </WorkProjects>
    </WorkContainer>
  );
};

export default Work;
