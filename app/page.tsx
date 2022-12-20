import styles from "./page.module.css"

export default async function Home() {

  const res = await fetch('http://localhost:3000/api/hello');
  const data = await res.json()
  return (
  <div className={styles.main}>Hello, {data.name}!</div>
  )
}
