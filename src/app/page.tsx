import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      

      <div className={styles.links}>
        <strong>Pages:</strong>
        <ul>
          <li>
            <Link href="/teste">Hello workd de teste</Link>
          </li>
          <li>
            <Link href="/webworker">Worker test here, click me! not virus</Link>
          </li>
        </ul>
      </div>

      
    </main>
  );
}
