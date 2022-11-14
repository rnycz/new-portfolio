import React, { useState } from "react";
import "./Contact.css";
import { ImGithub } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { MdContentCopy } from "react-icons/md";
import { useStateContext } from "../../contexts/ContextProvider";
import { translation } from "../../assets/translations";

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
    <div className="contact-container">
      <div className="contact">
        <div onClick={handleCopy} style={{ position: "relative" }}>
          {copied && <div className="copy-done">{content.info}</div>}
          <SiGmail className="contact-icons" />
          <MdContentCopy className="contact-copy" />
        </div>
        <p>{mail}</p>
      </div>
      <div className="contact">
        <a href="https://github.com/rnycz" target="_blank" rel="noreferrer">
          <ImGithub className="contact-icons" />
          <p>GitHub</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
