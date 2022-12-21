"use client"

import styles from "../page.module.css"
import { use } from "react";
import { makeQueryClient } from "../../utils/makeQueryClient";

// async function fetchDtata() {
//   const res = await fetch('http://localhost:3000/api/hello');
//   return res.json();
// }

const queryClient = makeQueryClient();
//aici nu mai putem folosi async si ca sa facem fetch-ul in componenta folosim "use" hook
export default function Home() {
  const data = use(
    queryClient(
      'hello',
      () => fetch('http://localhost:3000/api/hello').then((res) =>
        res.json()
      ) as Promise<{ name: string }>));
  
  return (
  <div className={styles.main}>Hello, {data.name}, from client-side version!</div>
  )
}
