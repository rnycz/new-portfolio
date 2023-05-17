import React from "react";
import myPhoto from "../../assets/images/myPhoto.png";
import { useStateContext } from "../../contexts/ContextProvider";
import { translation } from "../../assets/translations";
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
          <button>EN Resume</button>
          <span className="info">{content.CVinfo}</span>
          <button>PL CV</button>
          <span className="info">{content.CVinfo}</span>
        </Resume>
      </Photo>
    </AboutMeContainer>
  );
};

export default AboutMe;
