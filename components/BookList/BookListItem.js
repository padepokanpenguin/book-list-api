import styles from "../../styles/BookListItem.module.css";

export default function BookListItem({title, authors, isFavourite, removeFavourite, addFavourite}) {
  return (
    <div className={styles.cover}>
      <div className={styles.bookTitle}>
        <h2>{title}</h2>
      </div>
      <div className={styles.bookAuth}>
        {authors.map((author) => (
          <p key={author}>{author}</p>
        ))}
      </div>
      <button
        onClick={isFavourite ? removeFavourite : addFavourite}
        className={styles.btnCustom}
      >
        {isFavourite ? "❤️" : "🖤"}
      </button>
    </div>
  );
}
