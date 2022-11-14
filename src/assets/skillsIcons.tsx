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

type Icons = {
  icon: JSX.Element;
  clr: string;
};

export const skillsIcons: Icons[] = [
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
