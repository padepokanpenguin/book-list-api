import { useContext } from "react";
import Link from "next/link";
import Layout from "../Layout/Layout";
import styles from "../../styles/BookPage.module.css";
import FavouriteContext from "../../store/favourite-context";

export default function Pagination(props) {
  const ctx = useContext(FavouriteContext);

  const addToFavourite = (favouriteBook) => {
    ctx.addBook({
      favouriteBook,
    });
  };

  const favouriteBtn = ctx.isFavourite ? "❤️" : "🖤";
  return (
    <Layout>
      <div className={styles.favouritePage}><Link href={`/favourite`}> Go to Favourite</Link></div>
      <main className={styles.main}>
        {props.data.map((book, i) => (
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
        ))}
      </main>
      <div className={styles.btn}>
        <div>
          <button onClick={props.prevHandler}>Prev</button>
        </div>
        <div>
          <button onClick={props.nextHandler}>Next</button>
        </div>
      </div>
    </Layout>
  );
}
