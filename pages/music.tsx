import styles from "../styles/Music.module.scss";
import Image from "next/image";
import Head from "next/head";

const Music = () => {
  return (
    <section className="w-full flex flex-col md:flex-row mt-12 md:mt-24 items-center">
      <Head>
        <title>Dave Sanders Portfolio | Music</title>
      </Head>
      <h2 className="md:hidden text-4xl font-bold text-center mt-12 mb-14 h-[16px] animateTitle">
        Music
      </h2>
      <div className="flex flex-col w-full md:w-1/2 px-8">
        <p
          className={`${styles.musicPara} font-extralight mb-10 leading-8 animateAlone`}
        >
          In my other career as a{" "}
          <span className={styles.span}>multi-instrumentalist</span>, I have
          appeared in more than 16 national PBS specials with the American Pops
          Orchestra. I&apos;ve shared the stage with artists including Renée
          Fleming, Patti LuPone, Dionne Warwick, Patti LaBelle, Christopher
          Jackson, Audra McDonald, and many others.
        </p>
        <div className="flex flex-col text-center">
          <a
            className="mb-4 animateAlone"
            href="https://www.youtube.com/watch?v=Yu04jO7qFrM&ab_channel=TheKennedyCenter"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={`${styles.button1} border border-1 py-3 w-10/12 animateAlone`}
            >
              Christmas with Renée Fleming
            </button>
          </a>
          <a
            href="https://www.theamericanpops.org/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className={`${styles.button2} border border-1 py-3 w-10/12 animateAlone`}
            >
              American Pops
            </button>
          </a>
        </div>
      </div>
      <Image
        className={`hidden md:block ${styles.img} animateAlone`}
        src={"/static/pagoda.JPG"}
        alt="pagoda"
        width={400}
        height={600}
      />
    </section>
  );
};

export default Music;
