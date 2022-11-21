import React from "react";
import myPhoto from "../../assets/images/myPhoto.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { translation } from "../../assets/translations";
import ResumeENG from "../../assets/resume/CVeng_Radosław_Nycz.pdf";
import ResumePL from "../../assets/resume/CV_Radosław_Nycz.pdf";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  const { language } = useStateContext();
  let content: any;

  language === "EN"
    ? (content = translation.aboutMe.en)
    : (content = translation.aboutMe.pl);

  return (
    <div className="aboutme-container">
      <div className="aboutme">
        <p>{content.p1}</p>
        <p>{content.p2}</p>
        <p>{content.p3}</p>
      </div>
      <div className="photo">
        <div className="image-wrapper">
          <img className="image-1" src={myPhoto} alt="first part of me" />
          <img className="image-2" src={myPhoto} alt="second part of me" />
          <img className="image-3" src={myPhoto} alt="third part of me" />
        </div>
        <div className="resume">
          <a href={ResumeENG} target="_blank" rel="noreferrer">
            EN Resume
          </a>
          <a href={ResumePL} target="_blank" rel="noreferrer">
            PL CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
