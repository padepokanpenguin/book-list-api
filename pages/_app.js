import "../styles/globals.css";
import { FavouriteBooksProvider } from "../store/FavouriteProvider";

function MyApp({ Component, pageProps }) {
  return (
    <FavouriteBooksProvider>
      <Component {...pageProps} />
    </FavouriteBooksProvider>
  );
}

export default MyApp;
