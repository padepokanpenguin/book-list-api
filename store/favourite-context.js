import { createContext } from "react";

const FavouriteContext = createContext({
  favouriteBooks: [],
  isFavourite: false,
  addBook: (favouriteBook) => {},
  removeBook: (id) => {},
});

export default FavouriteContext;
