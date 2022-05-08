import { useReducer, useState } from "react";
import FavouriteContext from "./favourite-context";

const defaultFavouriteList = {
  favouriteBooks: [],
};

const favouriteBookReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingFavouriteBookIndex = state.favouriteBooks.findIndex(
      (book) => book.id === action.book.id
    );

    const existingFavouriteBook =
      state.favouriteBooks[existingFavouriteBookIndex];

    let updateFavouriteBooks;

    if (existingFavouriteBook) {
      return alert("You had this book in favourite list");
    } else {
      updateFavouriteBooks = state.favouriteBooks.concat(action.favouriteBook);
    }
    return {
      favouriteBooks: updateFavouriteBooks,
    };
  }

  if (action.type === "REMOVE") {
    const existingFavouriteBookIndex = state.favouriteBooks.findIndex(
      (book) => book.id === action.book.id
    );

    const existingFavouriteBook =
      state.favouriteBooks[existingFavouriteBookIndex];

    let updateFavouriteBooks;

    if (existingFavouriteBook) {
      updateFavouriteBooks = state.favouriteBooks.filter(
        (book) => book.id !== action.book.id
      );
    }

    return {
      favouriteBooks: updateFavouriteBooks,
    };
  }
};

export const FavouriteBookstProvider = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteBookState, dispatchFavouriteBook] = useReducer(
    favouriteBookReducer,
    defaultFavouriteList
  );
  const addBookHandler = (item) => {
    dispatchFavouriteBook({ type: "ADD", item: item });
    setIsFavourite(true);
  };
  const removeBookHandler = (id) => {
    dispatchFavouriteBook({ type: "REMOVE", id: id });
    setIsFavourite(false);
  };

  const favouriteBooksContext = {
    favouriteBooks: favouriteBookState.favouriteBooks,
    isFavourite: isFavourite,
    addBook: addBookHandler,
    removeBook: removeBookHandler,
  };

  return (
    <FavouriteContext.Provider
      value={favouriteBooksContext}
    >
      {props.children}
    </FavouriteContext.Provider>
  );
};
