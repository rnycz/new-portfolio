import React from "react";
import myPhoto from "../../assets/images/myPhoto.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { translation } from "../../assets/translations";
import ResumeENG from "../../assets/resume/CVeng_Radosław_Nycz.pdf";
import ResumePL from "../../assets/resume/CV_Radosław_Nycz.pdf";
import {
  AboutMeContainer,
  AboutMeDesc,
  Photo,
  ImageWrapper,
  Image,
  Resume,
} from "./AboutMe.styled";

const AboutMe: React.FC = () => {
  const { language } = useStateContext();
  let content: any;

  language === "EN"
    ? (content = translation.aboutMe.en)
    : (content = translation.aboutMe.pl);

  return (
    <AboutMeContainer>
      <AboutMeDesc>
        <p>{content.p1}</p>
        <p>{content.p2}</p>
        <p>{content.p3}</p>
      </AboutMeDesc>
      <Photo>
        <ImageWrapper>
          <Image index={1} src={myPhoto} alt="first part of me" />
          <Image index={2} src={myPhoto} alt="second part of me" />
          <Image index={3} src={myPhoto} alt="third part of me" />
        </ImageWrapper>
        <Resume data-cy="resume">
          <a href={ResumeENG} target="_blank" rel="noreferrer">
            EN Resume
          </a>
          <a href={ResumePL} target="_blank" rel="noreferrer">
            PL CV
          </a>
        </Resume>
      </Photo>
    </AboutMeContainer>
  );
};

export default AboutMe;
