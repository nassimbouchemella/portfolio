import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export interface skillsItems {
  name: string;
  icon1: any;
  icon2: any;
  index: string;
  color?: number[];
  category:string;
}

export const skillsItem = [
  { name: "React", icon1: <FaReact color="white"/>, icon2: <FaReact color="cyan"/>, index: "1", color: [0, 255, 255], category: "framework" },
  { name: "Javascript", icon1: <DiJavascript1 color="black-100"/>, icon2: <DiJavascript1 color="yellow"/>, index: "2", color: [255, 255, 0], category: "language" },
  { name: "Next.JS", icon1: <SiNextdotjs color="transparent"/>, icon2:<SiNextdotjs color="white"/>,index: "3", color: [255, 0, 0], category: "framework" },
  { name: "HTML", icon1: <FaHtml5 color="white"/>, icon2: <FaHtml5 color="orange"/>,index: "4", color: [255, 165, 0], category: "language" },
  { name: "Figma", icon: "🎨", index: "5", color: [255, 0, 255], category: "design" },
  { name: "CSS", icon: "🎨", index: "6", color: [255, 0, 0], category: "language" },
  { name: "JavaFx", icon: "⚛️", index: "7", color: [255, 255, 0], category: "framework" },
  { name: "Python", icon: "🟨", index: "8", color: [255, 0, 255], category: "language" },
  { name: "Tailwind CSS", icon: "🎨", index: "9", color: [255, 0, 0], category: "framework" },
  { name: "Typescript", icon: "🌐", index: "10", color: [255, 255, 0], category: "language" }
];
