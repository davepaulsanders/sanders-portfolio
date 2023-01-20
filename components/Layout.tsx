import { useEffect } from "react"
import Nav from "./Nav"
import styles from "../styles/Layout.module.css"
import { useRouter } from "next/router"

const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter()

  useEffect(() => {
    const nav = document.querySelector(".nav") as HTMLElement

    // closing and opening menu for resize if window is less than 1000px
    router.events.on("routeChangeStart", function () {
      if (window.innerWidth < 1000) {
        closeMenuAnimation()
      }
    })
    // toggling menu for resize events
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 1000) {
        openMenuAnimation()
        nav.classList.add("open")
      } else {
        closeMenuAnimation()
        nav.classList.remove("open")
      }
    })

    return () => router.events.off("routeChangeStart", closeMenuAnimation)
  }, [router.events])

  const openMenuAnimation = () => {
    const nav = document.querySelector(".nav") as HTMLElement
    const barTop = document.querySelector(".barTop") as HTMLElement
    const barMiddle = document.querySelector(".barMiddle") as HTMLElement
    const barBottom = document.querySelector(".barBottom") as HTMLElement

    // Only setting right value if screen is above 1000px, otherwise keep menu on right for mobile
    if (window.innerWidth > 1000) {
      nav.style.right = ""
    } else {
      nav.style.right = "0"
    }
    barTop.style.transform = "rotate(45deg)"
    barMiddle.style.transform = "translateX(1rem)"
    barMiddle.style.opacity = "0"
    barBottom.style.transform = "rotate(-45deg)"
  }

  const closeMenuAnimation = () => {
    const nav = document.querySelector(".nav") as HTMLElement
    const barTop = document.querySelector(".barTop") as HTMLElement
    const barMiddle = document.querySelector(".barMiddle") as HTMLElement
    const barBottom = document.querySelector(".barBottom") as HTMLElement

    nav.style.right = "-100%"
    barTop.style.transform = ""
    barMiddle.style.transform = ""
    barMiddle.style.opacity = ""
    barBottom.style.transform = ""

    nav.classList.remove("open")
  }

  // toggle nav menu in mobile
  const menuToggle = (e: React.MouseEvent) => {
    e.preventDefault()

    const nav = document.querySelector(".nav") as HTMLElement
    if (nav.classList.contains("open")) {
      closeMenuAnimation()
      nav.classList.remove("open")
    } else {
      openMenuAnimation()
      nav.classList.add("nav-transition")
      nav.classList.add("open")
    }
  }
  return (
    <div className="flex">
      <Nav />
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
  )
}

export default Layout
