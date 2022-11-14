import React, { useState } from "react";
import "./Work.css";
import { projects } from "../../assets/projects";

const Work: React.FC = () => {
  const [open, setOpen] = useState<string>("false");

  const unHover = (): void => {
    setOpen("");
  };
  return (
    <div className="work-container">
      <div className="work-projects">
        <ul>
          {projects.map((project) => (
            <li
              onMouseEnter={() => setOpen(project.name)}
              onMouseLeave={unHover}
              key={project.name}
            >
              <a href={project.git} target="_blank" rel="noreferrer">
                {project.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="work-images">
        {projects.map((project) => (
          <div
            className="projects-image-wrapper"
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
  );
};

export default Work;
