import { useEffect, useState } from "react";
import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const links: string[] = ["Home", "Applications", "Skills", "Music", "Contact"];

const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    let route = router.pathname;
    if (route === "/") {
      setActiveLink("Home");
    } else {
      route = route.charAt(1).toUpperCase() + route.slice(2);
      setActiveLink(route);
    }

    const nav = document.querySelector(".nav") as HTMLElement;

    // closing and opening menu for resize if window is less than 1000px
    router.events.on("routeChangeStart", function (e) {
      if (window.innerWidth < 1000) {
        closeMenuAnimation();
      }
    });
    // toggling menu for resize events
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 1000) {
        openMenuAnimation();
        nav.classList.add("open");
      } else {
        closeMenuAnimation();
        nav.classList.remove("open");
      }
    });

    return () => router.events.off("routeChangeStart", closeMenuAnimation);
  }, [router.events, setActiveLink]);

  const openMenuAnimation = () => {
    const nav = document.querySelector(".nav") as HTMLElement;
    const blur = document.querySelector(".blur") as HTMLElement;
    const html = document.querySelector("html") as HTMLElement;
    const barTop = document.querySelector(".barTop") as HTMLElement;
    const barMiddle = document.querySelector(".barMiddle") as HTMLElement;
    const barBottom = document.querySelector(".barBottom") as HTMLElement;

    // Only setting right value if screen is above 1000px, otherwise keep menu on right for mobile
    if (window.innerWidth > 1000) {
      nav.style.right = "";
    } else {
      nav.style.right = "0";
      blur.style.opacity = "0.6";
      blur.style.zIndex = "2";
      html.style.overflow = "hidden";
    }
    barTop.style.transform = "rotate(45deg)";
    barMiddle.style.transform = "translateX(1rem)";
    barMiddle.style.opacity = "0";
    barBottom.style.transform = "rotate(-45deg)";
  };

  const closeMenuAnimation = () => {
    const nav = document.querySelector(".nav") as HTMLElement;
    const blur = document.querySelector(".blur") as HTMLElement;
    const html = document.querySelector("html") as HTMLElement;
    const barTop = document.querySelector(".barTop") as HTMLElement;
    const barMiddle = document.querySelector(".barMiddle") as HTMLElement;
    const barBottom = document.querySelector(".barBottom") as HTMLElement;

    nav.style.right = "-100%";
    barTop.style.transform = "";
    barMiddle.style.transform = "";
    barMiddle.style.opacity = "";
    barBottom.style.transform = "";
    blur.style.opacity = "0";
    blur.style.zIndex = "0";
    nav.classList.remove("open");
    html.style.overflow = "scroll";
  };

  // toggle nav menu in mobile
  const menuToggle = (e: React.MouseEvent) => {
    e.preventDefault();

    const nav = document.querySelector(".nav") as HTMLElement;
    if (nav.classList.contains("open")) {
      closeMenuAnimation();
      nav.classList.remove("open");
    } else {
      openMenuAnimation();
      nav.classList.add("nav-transition");
      nav.classList.add("open");
    }
  };
  return (
    <div className="flex">
      <Link href="/" onClick={() => setActiveLink("Home")}>
        <Image
          className="absolute md:fixed top-6 left-6 z-[120]"
          src="/d-key.png"
          alt="d-key"
          width={40}
          height={40}
        />
      </Link>
      <Nav
        links={links}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
      <div className="main grid grid-cols-12 w-full min-h-screen max-h-screen relative">
        <div
          className={`${styles.hamburgerMenu} flex lg:hidden`}
          onClick={menuToggle}
        >
          <div className={`${styles.barTop} barTop`}></div>
          <div className={`${styles.barMiddle} barMiddle`}></div>
          <div className={`${styles.barBottom} barBottom`}></div>
        </div>
        <div className="col-span-12 lg:col-span-9 lg:col-start-4">
          <main className="flex w-full justify-center">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
