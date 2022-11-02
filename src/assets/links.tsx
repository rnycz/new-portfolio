import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdContactMail } from "react-icons/md";

type Links = {
  name: string;
  icon: JSX.Element;
  rotate: number;
  clr: string;
};

export const links: Links[] = [
  { name: "about-me", icon: <SiAboutdotme />, rotate: 0, clr: "#cc0000" },
  {
    name: "contact",
    icon: <MdContactMail />,
    rotate: 1,
    clr: "#5f9df7",
  },
  {
    name: "work",
    icon: <AiOutlineFileDone />,
    rotate: 2,
    clr: "#009933",
  },
  {
    name: "skills",
    icon: <GiSkills />,
    rotate: 3,
    clr: "#FF731D",
  },
];
