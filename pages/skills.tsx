import Image from "next/image";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <div className="w-full mt-20 md:mt-14">
      <ul
        className={`grid grid-rows-2 gap-x-3 grid-cols-2 md:grid-cols-3 md:w-9/12 ${styles.background}`}
      >
        <div className="text-center row-start-1 col-span-2 md:col-span-3 mb-14 md:mb-10">
          <h2 className="text-4xl font-bold text-center">Skills</h2>
        </div>

        {/* COLUMN 1 -------------------------------------------------------------------------*/}

        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">Javascript</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">Typescript</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">React</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="/nextjs.png"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">NextJS</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="/node.png"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">Node</li>
        </div>

        {/* COLUMN 2 -------------------------------------------------------------------------*/}

        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={35}
            height={35}
            src="/express.png"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">Express</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">MySQL</li>
        </div>

        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={35}
            height={35}
            src="/mongo.png"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">MongoDB</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="/docker.png"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">Docker</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="/amazon.png"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">AWS</li>
        </div>

        {/* COLUMN 3 -------------------------------------------------------------------------*/}

        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">GraphQL</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">Tailwind</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">Bootstrap</li>
        </div>
        <div className={styles.listItem}>
          <Image
            className="mr-2"
            width={40}
            height={40}
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
            alt="react"
          ></Image>
          <li className="m-1 w-[75px]">Git</li>
        </div>
      </ul>
    </div>
  );
};

export default Skills;
