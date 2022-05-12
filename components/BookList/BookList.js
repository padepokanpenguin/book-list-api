import Link from "next/link";
import Layout from "../Layout/Layout";
import BookListItem from "./BookListItem";
import useFavouriteStore from "../../store/favourite.store";
import styles from "../../styles/BookList.module.css";

export default function BookList(props) {
  const { favouriteBooks, addToFavourite, removeFavouriteBook } =
    useFavouriteStore();

  const booksList = props.data.map((dat) => (
    <BookListItem
      key={dat.id}
      {...dat}
      isFavourite={favouriteBooks.includes(dat.id)}
      addFavourite={() => addToFavourite(dat.id)}
      removeFavourite={() => removeFavouriteBook(dat.id)}
    />
  ));

  return (
    <Layout>
      <div className={styles.favouritePage}>
        <Link href={`/favourite`}> Go to Favourite</Link>
      </div>
      <main className={styles.main}>{booksList}</main>
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
