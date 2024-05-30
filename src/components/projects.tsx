import fox from "../assets/fox.png";
import valorant from "../assets/valorant.png";
import { LinkWrapper } from "./LinkWrapper";

export interface Project {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: React.ReactNode;
  link: string;
  github: string;
  deployment: string;
}

type Projects = Project[];

export const projects: Projects = [
  {
    id: 0,
    img: fox,
    alt: "Fox umbrella hero banner",
    title: "Fox Umbrellas",
    description: (
      <p>
        Designed by{" "}
        <a
          href={
            "https://dribbble.com/shots/24027033-Fox-Umbrellas-Luxury-Sophisticated-Website-Design-Concept"
          }
          rel="preload"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LAIN
        </a>{" "}
        on Dribbble; this project creates both the desktop view and an imagined
        responsive mobile view for a premium umbrella manufacturer.
      </p>
    ),
    link: "https://asproson.github.io/css_fox/",
    github: "https://github.com/ASproson/css_fox",
    deployment: "https://asproson.github.io/css_fox/",
  },
  {
    id: 1,
    img: valorant,
    alt: "Esports hero banner",
    title: "Esports Site",
    description: (
      <p>
        Designed by myself as a combination of the main{" "}
        <LinkWrapper link="https://playvalorant.com/en-gb/" text="Valorant" />{" "}
        website and its official{" "}
        <LinkWrapper link="https://valorantesports.com/" text="ESports" />{" "}
        counterpart. All of the design accents are hand drawn using CSS.
      </p>
    ),
    link: "https://asproson.github.io/react-esports/",
    github: "https://github.com/ASproson/react-esports",
    deployment: "https://asproson.github.io/react-esports/",
  },
];
