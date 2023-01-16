import React, { useState } from "react";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { MdContentCopy } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";
import { translation } from "../../assets/translations";
import {
  ContactContainer,
  ContactCell,
  OpenGithub,
  CopyDone,
} from "./Contact.styled";

const Contact: React.FC = () => {
  const { language } = useStateContext();
  let content: any;

  language === "EN"
    ? (content = translation.contact.en)
    : (content = translation.contact.pl);

  const mail: string = "radeknycz98@gmail.com";
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (): void => {
    navigator.clipboard.writeText(mail);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <ContactContainer>
      <ContactCell>
        <div onClick={handleCopy} style={{ position: "relative" }}>
          {copied && <CopyDone data-cy="copy-done">{content.info}</CopyDone>}
          <SiGmail className="contact-icons" />
          <MdContentCopy className="contact-copy" />
        </div>
        <p>{mail}</p>
      </ContactCell>
      <ContactCell>
        <OpenGithub
          href="https://github.com/rnycz"
          target="_blank"
          rel="noreferrer"
          data-cy="github"
        >
          <ImGithub className="contact-icons" />
          <p>GitHub</p>
        </OpenGithub>
      </ContactCell>
    </ContactContainer>
  );
};

export default Contact;
