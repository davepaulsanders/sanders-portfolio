import React from "react";
import styles from "../styles/Project.module.css";

const Project = ({ project }) => {
  const colorChoice = (i) => {
    const colors = [
      "text-blue-500",
      "text-violet-500",
      "text-rose-500",
      "text-green-500",
      "text-yellow-500",
      "text-orange-500",
      "text-pink-500",
    ];
    if (colors.indexOf(i) === -1) {
      return colors[i % colors.length];
    } else {
      return colors[i];
    }
  };
  return (
    <div
      className={`${styles.cardBackground} flex flex-col md:flex-row p-4 rounded-md max-w-[1000px] mb-6`}
    >
      <img
        className="w-full md:w-[300px]"
        src={project.img}
        alt={project.title}
      />
      <div className="ml-0 md:ml-6 w-full">
        <div className="flex items-center justify-between mt-4 lg:mt-0 mb-2">
          <h2 className="text-4xl font-bold block">{project.title}</h2>
          <div className={`${styles.border} flex items-center relative`}>
            <a href={project.github} target="_blank" rel="noreferrer">
              <img
                className="w-[50px] z-10 hover:scale-125 hover:cursor-pointer inline-block"
                src="github.png"
                alt="github"
              />
            </a>
            <a href={project.liveSite} target="_blank" rel="noreferrer">
              <img
                className="w-[35px] z-10 hover:scale-125 hover:cursor-pointer mr-2 inline-block"
                src="www.png"
                alt="live site"
              />
            </a>
          </div>
        </div>
        <p className="text-sm font-extralight mb-4">{project.description}</p>
        <p className="text-sm font-extralight w-10/12">
          {project.technologies.map((tech, i) => {
            return (
              <span className={colorChoice(i)} key={tech}>
                {tech === project.technologies[project.technologies.length - 1]
                  ? tech
                  : `${tech} • `}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export default Project;
