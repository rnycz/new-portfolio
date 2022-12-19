import React, { CSSProperties } from "react";
import "./Skills.css";
import { translation } from "../../assets/translations";
import { useStateContext } from "../../contexts/ContextProvider";
import { skills, otherSkills } from "../../assets/skills";

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
          {skills.map((skill) => (
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
            <li>HTML5</li>
            <li>CSS3/SCSS</li>
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
      <div className="other-stack">
        <h3>{content.other}</h3>
        <ul>
          {otherSkills.map((skill) => (
            <li>
              <span
                className="icon"
                style={{ "--clr": skill.clr } as CSSProperties}
              >
                {skill.icon}
              </span>
              <span className="name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
