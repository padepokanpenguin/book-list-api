import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ul>
          <li>
            <Link href="/category">Category</Link>
          </li>
          <li>
            <Link href="/favorite">Your favorite</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
