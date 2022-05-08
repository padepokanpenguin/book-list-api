import { useContext } from "react";
import FavouriteContext from "../../store/favourite-context";
import styles from "../../styles/BookListItem.module.css";

export default function BookListItem(props) {
  const ctx = useContext(FavouriteContext);

  const addToFavourite = () => {
    ctx.addBook({
      id: props.id,
      title: props.title,
      authors: props.authors,
    });
  };

  return (
    <div onClick={addToFavourite} className={styles.cover}>
      <div className={styles.bookTitle}>
        <h2>{props.title}</h2>
      </div>
      <div className={styles.bookAuth}>
        {props.authors.map((author) => (
          <p key={author}>{author}</p>
        ))}
      </div>
    </div>
  );
}
