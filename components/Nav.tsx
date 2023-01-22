import Link from "next/link";
import Footer from "./Footer";
import styles from "../styles/Nav.module.css";

const Nav = ({
  links,
  activeLink,
  setActiveLink,
}: {
  links: string[];
  activeLink: string;
  setActiveLink: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <div className={`${styles.blur} blur`}></div>
      <div
        className={`${styles.background} font-extralight flex flex-col justify-center items-center w-[250px] nav`}
      >
        <ul className="text-lg text-center mb-10">
          {links.map((link: string) => (
            <li className="m-10 relative" key={link}>
              <Link
                onClick={() => setActiveLink(link)}
                className={
                  activeLink === link
                    ? `${styles.underline} ${styles.active}`
                    : styles.underline
                }
                href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <Footer />
      </div>
    </>
  );
};

export default Nav;
