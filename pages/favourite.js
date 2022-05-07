import { useState } from "react";
import styles from "../styles/Favourite.module.css";
export default function favourite() {
  const [favouriteList, setFavouriteList] = useState([]);

  const addFavouriteBook = favouriteList.length > 0;
  return (
    <div className="container">
      {!addFavouriteBook && (
        <p className={styles.warning}>
          You don't have any favourite&apos;s book yet!
        </p>
      )}
    </div>
  );
}
