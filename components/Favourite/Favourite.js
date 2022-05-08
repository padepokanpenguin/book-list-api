import { useContext } from "react";
import Layout from "../Layout/Layout";
import FavouriteContext from "../../store/favourite-context";
import styles from "../../styles/Favourite.module.css";
import Link from "next/link";

export default function Favourite() {
  const ctx = useContext(FavouriteContext);

  const favouriteBookList = ctx.favouriteBooks.length > 0;

  const bookList = ctx.favouriteBooks.map((book, i) => (
    <div className={styles.cover} key={i}>
      <div className={styles.bookTitle}>
        <h2>{book.title}</h2>
      </div>
      <div className={styles.bookAuth}>
        {book.authors.map((author) => (
          <p key={author}>{author}</p>
        ))}
      </div>
      <div className={styles.favouriteIcon}>
        <div>❤️</div>
      </div>
    </div>
  ));

  return (
    <Layout>
      {!favouriteBookList && (
        <p className={styles.warning}>
          You don&apos;t have any favourite&apos;s book yet!
        </p>
      )}
      {favouriteBookList && (
        <div>
          <div>
            <h1 className={styles.titlePage}>Your Favourite&apos;s Book</h1>
          </div>
          <main className={styles.main}>{bookList}</main>
          <div className={styles.Link}>
            <Link href={`/category`}>choose other category</Link>
          </div>
        </div>
      )}
    </Layout>
  );
}
