import Head from "next/head";
import Project from "../components/Project";

const projectsArr = [
  {
    img: "/static/gigSocial.png",
    title: "gigSocial",
    description:
      "gigSocial is an app designed to help musicians manage live performances.  It includes a flashing metronome, song lyrics, and community feedback on your setlist choices.",
    technologies: [
      "React",
      "Express",
      "Node",
      "GraphQL",
      "MongoDB",
      "Mongoose",
      "Bootstrap",
      "OAuth 2.0",
      "JSON Web Tokens",
    ],
    github: "https://github.com/davepaulsanders/gigSocial",
    liveSite: "https://gigsocial.netlify.app/",
  },
  {
    img: "/static/nba-scores.png",
    title: "NBA Scores",
    description:
      "NBA Scores keeps track of all scores for the current day and the highest scorers on each team using the BallDontLie API.",
    technologies: ["React", "Bootstrap"],
    github: "https://github.com/davepaulsanders/NBA-SCORES-AND-STATS",
    liveSite: "https://nba-games.netlify.app/",
  },
  {
    img: "/static/technically.png",
    title: "Technically",
    description:
      "A blog to post about and create conversations about technology.",
    technologies: [
      "Handlebars.js",
      "Node",
      "Express",
      "MYSQL",
      "Sequelize",
      "Amazon RDS",
      "Render",
    ],
    github: "https://github.com/davepaulsanders/Tech-nically",
    liveSite: "https://technically.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="w-full mt-10 md:mt-20">
      <Head>
        <title>Dave Sanders Projects</title>
      </Head>
      <section>
        {projectsArr.map((project) => {
          return <Project project={project} key={project.title} />;
        })}
      </section>
    </div>
  );
};

export default Projects;
