import Head from "next/head"
import styles from "../styles/Index.module.css"
import Image from "next/image"
export default function Home() {
  return (
    <>
      <Head>
        <title>Dave Sanders Portfolio</title>
      </Head>
      <div className="flex flex-col md:flex-row h-screen items-center w-10/12 md:w-3/4 pt-20 md:pt-0 pb-20">
        <Image
          width={300}
          height={300}
          className={`${styles.headshot} m-3`}
          src="/headshot.jpeg"
          alt="Dave Sanders"
        />
        <div className="m-3">
          <h1 className="text-5xl md:text-6xl text-center md:text-left font-bold mb-3">
            Welcome!
          </h1>
          <p className="text-lg md:text-xl w-full 2xl:w-8/12 text-center md:text-left font-extralight">
            I&apos;m Dave Sanders, a{" "}
            <span className={styles.span}>web developer</span> and{" "}
            <span className={styles.span}>musician</span> based out of
            Washington D.C. Thanks for visiting!{" "}
          </p>
        </div>
      </div>
    </>
  )
}
