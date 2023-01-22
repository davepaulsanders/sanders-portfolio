import styles from "../styles/Music.module.scss";
import Image from "next/image";

const Music = () => {
  return (
    <section className="w-full flex flex-col md:flex-row mt-10 md:mt-24 items-center">
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
