import Head from "next/head"
import styles from "../styles/Index.module.css"

export default function Home() {
  return (
    <>
    <Head>
        <title>Dave Sanders Portfolio</title>
    </Head>
    <div className="flex h-screen items-center w-3/4 pb-20">
      <img className={`${styles.headshot} m-3 w-[300px]`} src="headshot.jpeg" alt="Dave Sanders" />
      <div className="m-3">
        <h1 className="text-6xl font-bold mb-3">Welcome!</h1>
        <p className="text-xl font-extralight" >I&apos;m Dave Sanders, a <span className={styles.span}>web developer</span> and <span className={styles.span}>musician</span> based out of Washington D.C.  Thanks for visiting!  </p>
      </div>
    </div>
    </>
  )
}
