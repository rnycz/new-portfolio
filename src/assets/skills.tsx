import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { TbApi } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { RiNpmjsFill } from "react-icons/ri";
import { TbDeviceMobile } from "react-icons/tb";

type Icons = {
  icon: JSX.Element;
  clr: string;
};
type OtherSkills = Icons & {
  name: string;
};
export const skills: Icons[] = [
  { icon: <SiHtml5 />, clr: "#f06529" },
  { icon: <SiCss3 />, clr: "#2965f1" },
  { icon: <SiSass />, clr: "#CD6799" },
  { icon: <SiJavascript />, clr: "#F0DB4F" },
  { icon: <SiTypescript />, clr: "#007acc" },
  { icon: <SiReact />, clr: "#61DBFB" },
  { icon: <SiNodedotjs />, clr: "#3c873a" },
  { icon: <SiExpress />, clr: "darkgray" },
  { icon: <SiMongodb />, clr: "#4DB33D" },
];

export const otherSkills: OtherSkills[] = [
  { icon: <TbDeviceMobile />, name: "RWD", clr: "darkgray" },
  { icon: <TbApi />, name: "REST API", clr: "darkgray" },
  { icon: <DiGit />, name: "Git", clr: "#F1502F" },
  { icon: <RiNpmjsFill />, name: "NPM", clr: "#CC3534" },
  { icon: <AiOutlineConsoleSql />, name: "SQL", clr: "#F29111" },
];
