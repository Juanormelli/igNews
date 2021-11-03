import styles from "../styles/home.module.scss";
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>IgNews</title>
      </Head>


      <h1 className={styles.title}>
        
        <span>Hello World!</span>

      </h1>
    </>
  )
}
