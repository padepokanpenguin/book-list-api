import { useContext } from "react";
import Link from "next/link";
import Layout from "../Layout/Layout";
import BookListItem from "./BookListItem";
import styles from "../../styles/BookPage.module.css";
import FavouriteContext from "../../store/favourite-context";

export default function BookList(props) {
  const ctx = useContext(FavouriteContext);

  const booksList = props.data.map((dat) => (
    <BookListItem key={dat.id} title={dat.title} authors={dat.authors} />
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
