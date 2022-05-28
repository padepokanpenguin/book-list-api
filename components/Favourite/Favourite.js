import Link from "next/link";
import Layout from "../Layout/Layout";
import styles from "../../styles/Favourite.module.css";
import useFavouriteStore from "../../store/favourite.store";
import BookListItem from "../BookList/BookListItem";

export default function Favourite({favBook}) {
  const {favouriteBooks, removeFavouriteBook} = useFavouriteStore()
  const favouriteBookList = favouriteBooks.length > 0;



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
          <main className={styles.main}>
            {favouriteBooks.map((book) => <BookListItem key={book.id} {...book} removeFavourite={() => removeFavouriteBook(book.id)} />)}
          </main>
          <div className={styles.Link}>
            <Link href={`/category`}>choose other category</Link>
          </div>
        </div>
      )}
    </Layout>
  );
}
