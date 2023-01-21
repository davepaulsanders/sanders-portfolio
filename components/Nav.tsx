import Link from "next/link";
import Footer from "./Footer";
import styles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <div
      className={`${styles.background} nav font-extralight flex flex-col justify-center items-center w-[250px]`}
    >
      <ul className="text-lg text-center mb-10">
        <li className="m-10 relative">
          <Link className={styles.underline} href="/">
            Home
          </Link>
        </li>
        <li className="m-10 relative">
          <Link className={styles.underline} href="/projects">
            Projects
          </Link>
        </li>
        <li className="m-10 relative">
          <Link className={styles.underline} href="/skills">
            Skills
          </Link>
        </li>
        <li className="m-10 relative">
          <Link className={styles.underline} href="/music">
            Music
          </Link>
        </li>
        <li className="m-10 relative">
          <Link className={styles.underline} href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default Nav;
