import "../styles/globals.css"
import type { AppProps } from "next/app"
import Layout from "../components/Layout"
import { Hanken_Grotesk } from "@next/font/google"

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${hanken.variable} font-sans`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  )
}
