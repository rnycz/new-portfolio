import React, { CSSProperties } from "react";
import "./Skills.css";
import { translation } from "../../assets/translations";
import { useStateContext } from "../../contexts/ContextProvider";
import { skillsIcons } from "../../assets/skillsIcons";
import { link } from "fs";

const Skills: React.FC = () => {
  const { language } = useStateContext();
  let content: any;

  language === "EN"
    ? (content = translation.skills.en)
    : (content = translation.skills.pl);

  return (
    <div className="skills-container">
      <div className="desc">{content.desc}</div>
      <div className="icons">
        <ul>
          {skillsIcons.map((skill) => (
            <li key={skill.clr}>
              <span
                className="icon"
                style={{ "--clr": skill.clr } as CSSProperties}
              >
                {skill.icon}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="stack">
        <div className="frontend">
          <h3>Frontend</h3>
          <ol>
            <li>HTML</li>
            <li>CSS/SCSS</li>
            <li>JavaScript/TypeScript</li>
            <li>React.js</li>
          </ol>
        </div>
        <div className="backend">
          <h3>Backend</h3>
          <ol>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Skills;
