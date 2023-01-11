import Head from "next/head"
import styles from "../styles/Index.module.css"
export default function Home() {
  return (
    <>
    <Head>
        <title>Dave Sanders Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@200;400;600;700&display=swap" rel="stylesheet"></link>    
    </Head>
    <div className="flex h-screen items-center w-3/4 pb-20">
      <img className={`${styles.headshot} m-3 w-[300px]`} src="headshot.jpeg" alt="Dave Sanders" />
      <div className="m-3">
        <h1 className="text-6xl font-bold mb-3">Welcome!</h1>
        <p>I&apos;m Dave Sanders, a web developer based out of Washington D.C.  Thanks for visiting!  </p>
      </div>
    </div>
    </>
  )
}
