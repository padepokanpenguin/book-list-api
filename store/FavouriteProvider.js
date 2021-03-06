import { useReducer, useState } from "react";
import FavouriteContext from "./favourite-context";

const defaultFavouriteList = {
  favouriteBooks: [],
  isFavourite: false,
};

const favouriteBookReducer = (state, action) => {
  if (action.type === "ADD") {
    
    let updateFavouriteBooks;

    updateFavouriteBooks = state.favouriteBooks.concat(action.favouriteBook)

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
  return defaultFavouriteList;
};

export const FavouriteBooksProvider = (props) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [favouriteBookState, dispatchFavouriteBookAction] = useReducer(
    favouriteBookReducer,
    defaultFavouriteList
  );
  const addBookHandler = (item) => {
    dispatchFavouriteBookAction({ type: "ADD", favouriteBook: item });
    setIsFavourite(true);
  };
  const removeBookHandler = (id) => {
    dispatchFavouriteBookAction({ type: "REMOVE", id: id });
    setIsFavourite(false);
  };

  const favouriteBooksContext = {
    favouriteBooks: favouriteBookState.favouriteBooks,
    isFavourite: isFavourite,
    addBook: addBookHandler,
    removeBook: removeBookHandler,
  };

  return (
    <FavouriteContext.Provider value={favouriteBooksContext}>
      {props.children}
    </FavouriteContext.Provider>
  );
};
