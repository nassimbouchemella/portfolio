import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export interface socials {
  name: string;
  img: React.ReactNode;
  link: string;
  id: string;
}

export const socials = [
  { name: "LinkedIn", icon: <FaLinkedin color='white' size={20}/>,link:'https://www.linkedin.com/in/nassim-bouchemella-ab90aa259/', id: "1"},
  { name: "Github", icon: <FaGithub color='white' size={20}/>, link:'https://github.com/nassimbouchemella' ,id: "2" }
];
