import { useContext, useState } from "react";
import Layout from "../Layout/Layout";
import FavouriteContext from "../../store/favourite-context";
import styles from "../../styles/Favourite.module.css";

export default function Favourite() {
  const ctx = useContext(FavouriteContext);

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
        <div onClick={addToFavourite}>{favouriteBtn}</div>
      </div>
    </div>
  ));

  console.log(bookList);
  const favouriteBookList = ctx.favouriteBooks.length > 0;
  return (
    <Layout>
      {!favouriteBookList && (
        <p className={styles.warning}>
          You don&apos;t have any favourite&apos;s book yet!
        </p>
      )}
      <main>{bookList}</main>
    </Layout>
  );
}
