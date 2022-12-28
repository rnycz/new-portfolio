import React, { CSSProperties } from "react";
import { translation } from "../../assets/translations";
import { useStateContext } from "../../contexts/ContextProvider";
import { skills, otherSkills } from "../../assets/skills";
import {
  SkillsContainer,
  Desc,
  IconsDiv,
  Icon,
  Stack,
  OtherStack,
} from "./Skills.styled";

const Skills: React.FC = () => {
  const { language } = useStateContext();
  let content: any;

  language === "EN"
    ? (content = translation.skills.en)
    : (content = translation.skills.pl);

  return (
    <SkillsContainer>
      <Desc>{content.desc}</Desc>
      <IconsDiv>
        <ul>
          {skills.map((skill) => (
            <li key={skill.clr}>
              <Icon style={{ "--clr": skill.clr } as CSSProperties}>
                {skill.icon}
              </Icon>
            </li>
          ))}
        </ul>
      </IconsDiv>
      <Stack>
        <div className="frontend">
          <h3>Frontend</h3>
          <ol>
            <li>HTML5</li>
            <li>CSS3/SCSS/styled-components</li>
            <li>JavaScript/TypeScript</li>
            <li>React.js (React Router, Context API)</li>
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
      </Stack>
      <OtherStack>
        <h3>{content.other}</h3>
        <ul>
          {otherSkills.map((skill) => (
            <li key={skill.name}>
              <Icon style={{ "--clr": skill.clr } as CSSProperties}>
                {skill.icon}
              </Icon>
              <span className="name">{skill.name}</span>
            </li>
          ))}
        </ul>
      </OtherStack>
    </SkillsContainer>
  );
};

export default Skills;
