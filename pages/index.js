import Link from "next/link";
import Layout from "../components/Layout/Layout";
import { FavouriteBookstProvider } from "../store/FavouriteProvider";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <FavouriteBookstProvider>
      <Layout>
        <main className={styles.main}>
          <ul>
            <li>
              <Link href="/category">Category</Link>
            </li>
            <li>
              <Link href="/favourite">Your Favourite</Link>
            </li>
          </ul>
        </main>
      </Layout>
    </FavouriteBookstProvider>
  );
}
