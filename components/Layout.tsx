import Nav from "./Nav"

const Layout = ({children}: React.PropsWithChildren) => {
  return (
    <div className="flex">
      <Nav />
        <div className="grid grid-cols-12 min-h-screen max-h-screen">
          <div className="col-span-12">
            <main className="flex justify-center">{children}</main>
          </div>
        </div>
    </div>
  )
}

export default Layout;