import Link from "next/link"
import Footer from "./Footer"
import styles from "../styles/Nav.module.css"
const Nav = () => {
  return (
    <>
       <div className="flex flex-col justify-between items-center">
          <ul className="text-xl mb-10">
            <li className="m-10 relative"><Link className={styles.underline} href="/">Home</Link></li>
            <li className="m-10 relative"><Link className={styles.underline} href="/projects">Projects</Link></li>
            <li className="m-10 relative"><Link className={styles.underline} href="/skills">Skills</Link></li>
            <li className="m-10 relative"><Link className={styles.underline} href="/resume">Resume</Link></li>
            <li className="m-10 relative"><Link className={styles.underline} href="/contact">Contact</Link></li>
          </ul>
        <Footer />
        </div>
    </>
    
  )
}

export default Nav