import Nav from "./Nav"
import styles from "../styles/Layout.module.css"
const Layout = ({children}: React.PropsWithChildren) => {
  return (
        <div className="grid grid-cols-12 min-h-screen max-h-screen">
          <div className={`${styles.background} side-nav col-span-2 flex text-center justify-center items-center`}>
            <Nav />
          </div>
          <div className="col-span-10">
            <main className="flex justify-center">{children}</main>
          </div>
        </div>
  )
}

export default Layout;