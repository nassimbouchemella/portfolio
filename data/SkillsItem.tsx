import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { SiAdobe } from "react-icons/si";
import { FaRegFileExcel } from "react-icons/fa";

export interface skillsItems {
  name: string;
  icon1: any;
  icon2: any;
  index: string;
  color?: number[];
  category:string;
}

export const skillsItem = [
  { name: "Python", icon1: <FaPython color="white"/>, icon2: <FaPython color="yellow"/>, index: "1", color: [255, 255, 0], category: "language" },
  { name: "Javascript", icon1: <DiJavascript1 color="black-100"/>, icon2: <DiJavascript1 color="yellow"/>, index: "2", color: [255, 255, 0], category: "language" },
  { name: "HTML", icon1: <FaHtml5 color="white"/>, icon2: <FaHtml5 color="orange"/>,index: "3", color: [255, 165, 0], category: "language" },
  { name: "CSS", icon1: <FaCss3Alt color="white"/>, icon2: <FaCss3Alt color="blue"/>,index: "4", color: [0, 100, 255], category: "language" },
  { name: "Typescript", icon1: <SiTypescript color="white"/>, icon2: <SiTypescript color="blue"/>, index: "5", color: [0, 0, 255], category: "language" },
  { name: "Java", icon1: <FaJava color="white" />, icon2:<FaJava color="orange" />, index: "7", color: [255, 165, 0], category: "language" },
  { name: "Next.JS", icon1: <SiNextdotjs color="white"/>, icon2:<SiNextdotjs color="white"/>,index: "6", color: [255, 255, 255], category: "framework" },
  { name: "React", icon1: <FaReact color="white"/>, icon2: <FaReact color="cyan"/>, index: "8", color: [0, 255, 255], category: "framework" },
  { name: "Tailwind CSS", icon1: <RiTailwindCssLine color="white"/>,icon2: <RiTailwindCssLine color="cyan"/>,index: "9", color: [0, 255, 200], category: "framework" },
  { name: "Figma", icon1: <IoLogoFigma color="white"/>, icon2:<IoLogoFigma color="magenta"/>, index: "10", color: [255, 0, 255], category: "design" },
  { name: "Adobe", icon1: <SiAdobe  color="white"/>, icon2: <SiAdobe  color="red"/>, index: "11", color: [255, 0, 0], category: "design" },
  { name: "Excel", icon1: <FaRegFileExcel  color="white"/>, icon2: <FaRegFileExcel  color="#98FF98"/>, index: "12", color: [0, 255, 0], category: "Office" }
];
