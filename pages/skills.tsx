import Image from "next/image"
import styles from "../styles/Skills.module.css"

const Skills = () => {
  return (
    <div className="w-full mt-20 md:mt-14">
      <ul
        className={`grid grid-rows-auto gap-3 grid-cols-auto grid-cols-auto md:w-9/12 md:ml-14 ${styles.background}`}
      >
        <div className="col-span-2 mb-14 md:mb-10">
          <h2 className="text-4xl font-bold text-center">Skills</h2>
        </div>
        <div className="col-start-1">
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
              alt="react"
            ></Image>
            <li className="m-1">Javascript</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
              alt="react"
            ></Image>
            <li className="m-1">Typescript</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="react"
            ></Image>
            <li className="m-1">React</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="/nextjs.png"
              alt="react"
            ></Image>
            <li className="m-1">NextJS</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={35}
              height={35}
              src="/node.png"
              alt="react"
            ></Image>
            <li className="m-1">Node</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={35}
              height={35}
              src="/express.png"
              alt="react"
            ></Image>
            <li className="m-1">Express</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
              alt="react"
            ></Image>
            <li className="m-1">MySQL</li>
          </div>
        </div>
        <div className="col-start-2">
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={35}
              height={35}
              src="/mongo.png"
              alt="react"
            ></Image>
            <li className="m-1">MongoDB</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="/docker.png"
              alt="react"
            ></Image>
            <li className="m-1">Docker</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="/amazon.png"
              alt="react"
            ></Image>
            <li className="m-1">AWS</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
              alt="react"
            ></Image>
            <li className="m-1">GraphQL</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="react"
            ></Image>
            <li className="m-1">Tailwind</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt="react"
            ></Image>
            <li className="m-1">Bootstrap</li>
          </div>
          <div className={styles.listItem}>
            <Image
              className="mr-2"
              width={40}
              height={40}
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
              alt="react"
            ></Image>
            <li className="m-1">Git</li>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Skills
