import React from "react"
import styles from "../styles/Project.module.css"
import Image from "next/image"

type ProjectObj = {
  project: {
    img: string
    title: string
    description: string
    technologies: string[]
    github: string
    liveSite: string
  }
}

const Project = ({ project }: ProjectObj) => {
  const colorChoice = (i: number) => {
    const colors = [
      "text-blue-500",
      "text-violet-500",
      "text-rose-500",
      "text-green-500",
      "text-yellow-500",
      "text-orange-500",
      "text-pink-500",
    ]
    if (colors.indexOf(`${i}`) === -1) {
      return colors[i % colors.length]
    } else {
      return colors[i]
    }
  }
  return (
    <div
      className={`${styles.cardBackground} flex flex-col md:flex-row p-4 rounded-md max-w-[900px] mb-6`}
    >
      <div className="w-full md:w-8/12 h-[200px] relative">
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="ml-0 md:ml-6 w-full">
        <div className="flex items-center justify-between mt-4 lg:mt-0 mb-2">
          <h2 className="text-4xl font-bold block">{project.title}</h2>
          <div className={`${styles.border} flex items-center relative`}>
            <a href={project.github} target="_blank" rel="noreferrer">
              <Image
                className="z-10 hover:scale-125 hover:cursor-pointer inline-block"
                src={"/github.png"}
                alt="github"
                width={50}
                height={50}
              />
            </a>
            <a href={project.liveSite} target="_blank" rel="noreferrer">
              <Image
                className="z-10 hover:scale-125 hover:cursor-pointer mr-2 inline-block"
                src={"/www.png"}
                alt="live site"
                height={35}
                width={35}
              />
            </a>
          </div>
        </div>
        <p className="text-sm font-extralight mb-4">{project.description}</p>
        <p className="text-sm font-extralight w-10/12">
          {project.technologies?.map((tech, i) => {
            return (
              <span className={colorChoice(i)} key={tech}>
                {tech === project.technologies[project.technologies.length - 1]
                  ? tech
                  : `${tech} • `}
              </span>
            )
          })}
        </p>
      </div>
    </div>
  )
}

export default Project
