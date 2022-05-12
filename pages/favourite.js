import Favourite from "../components/Favourite/Favourite";

export async function getServerSideProps(context) {
  const { params } = context;
  const { categoryId } = params;

  const response = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}`
  );

  const data = await response.json();

  return {
    props: {
      data: data,
      page: parseInt(pageNumber),
    },
  };
}

export default function FavouritePage({ data }) {
  return <Favourite favBook={data} />;
}
