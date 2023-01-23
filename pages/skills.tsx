import Image from "next/image";
import styles from "../styles/Skills.module.css";
import Head from "next/head";

type SkillsObj = {
  skill: string;
  icon: string;
  width: number;
  height: number;
};

const skills = [
  {
    skill: "Javascript",
    icon: "/js.png",
    width: 40,
    height: 40,
  },
  {
    skill: "Typescript",
    icon: "ts.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "React",
    icon: "/react.svg",
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
    icon: "/mysql.svg",
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
    icon: "/graphql.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "Tailwind",
    icon: "/tailwind.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "Bootstrap",
    icon: "/bootstrap.svg",
    width: 40,
    height: 40,
  },
  {
    skill: "Git",
    icon: "/git.svg",
    width: 40,
    height: 40,
  },
];

const Skills = () => {
  return (
    <section className="w-full mt-12 md:mt-28">
      <Head>
        <title>Dave Sanders Portfolio | Skills</title>
      </Head>
      <h2 className="md:hidden text-4xl font-bold text-center mt-12 mb-12 h-[16px] animateTitle">
        Skills
      </h2>
      <ul
        className={`grid gap-x-8 grid-cols-2 md:grid-cols-3 md:w-9/12 ${styles.background}`}
      >
        {skills.map((skill: SkillsObj, i) => (
          <div key={skill.skill} className={`${styles.listItem} animateMap`}>
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
