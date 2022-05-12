import create from "zustand";
// import { persist } from "zustand/middleware";

const useFavouriteStore = create(
    (set, get) => ({
      favouriteBooks: [],
      addToFavourite: (fav) => {
        const oldFavouriteBooks = [...get().favouriteBooks];
        oldFavouriteBooks.push(fav);
        set({ favouriteBooks: oldFavouriteBooks });
      },
      removeFavouriteBook: (id) => {
        let oldFavouriteBooks = [...get().favouriteBooks];
        oldFavouriteBooks = oldFavouriteBooks.filter((fav) => fav !== id);
        set({ favouriteBooks: oldFavouriteBooks });
      },
    }),
   
);

export default useFavouriteStore;
