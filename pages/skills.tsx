import Image from "next/image";
import styles from "../styles/Skills.module.css";

type SkillsObj = {
  skill: string;
  icon: string;
  width: number;
  height: number;
};
const skills = [
  {
    skill: "Javascript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    width: 40,
    height: 40,
  },
  {
    skill: "Typescript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "React",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "NextJS",
    icon: "/nextjs.png",
    width: 40,
    height: 40,
  },
  {
    skill: "Node",
    icon: "/node.png",
    width: 40,
    height: 40,
  },
  {
    skill: "Express",
    icon: "/express.png",
    width: 35,
    height: 35,
  },
  {
    skill: "MySQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "MongoDB",
    icon: "/mongo.png",
    width: 35,
    height: 35,
  },
  {
    skill: "Docker",
    icon: "/docker.png",
    width: 40,
    height: 40,
  },
  {
    skill: "AWS",
    icon: "/amazon.png",
    width: 40,
    height: 40,
  },
  {
    skill: "GraphQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "Tailwind",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "Bootstrap",
    icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "Git",
    icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    width: 40,
    height: 40,
  },
];

const Skills = () => {
  return (
    <section className="w-full mt-6 md:mt-28">
      <ul
        className={`grid gap-x-8 grid-cols-2 md:grid-cols-3 md:w-9/12 ${styles.background}`}
      >
        {skills.map((skill: SkillsObj) => (
          <div key={skill.skill} className={styles.listItem}>
            <Image
              className="mr-2"
              width={skill.width}
              height={skill.height}
              src={skill.icon}
              alt={skill.skill}
            ></Image>
            <li className="m-1 w-[75px]">{skill.skill}</li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
