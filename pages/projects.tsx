import Head from "next/head"
import Project from "../components/Project"
const Projects = () => {
  return (
    <div className="w-full mt-24 mr-10">
        <Head>
            <title>Dave Sanders Projects</title>
        </Head>
        <section>
          <Project />
        </section>
    </div>
  )
}

export default Projects