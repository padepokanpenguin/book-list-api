import { useRouter } from "next/router";
import BookPage from "../../../../components/BookList/BookList";

export async function getServerSideProps(context) {
  const { params } = context;
  const { categoryId, pageNumber } = params;

  const response = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}&size=15&page=${pageNumber}`
  );

  const data = await response.json();

  return {
    props: {
      data: data,
      page: parseInt(pageNumber),
    },
  };
}

export default function Pagination(props) {
  const router = useRouter();
  const categoryId = props.data[0].category_id;
  const countDataLength = props.data.length;


  const nextPageHandler = () => {
    if (countDataLength === 15) {
      router.push(`/category/${categoryId}/page/${props.page + 1}`);
    }
  };

  const prevPageHandler = () => {
    if (props.page > 0) {
      router.push(`/category/${categoryId}/page/${props.page - 1}`);

    }
  }

  return (
    <BookPage
      data={props.data}
      nextHandler={nextPageHandler}
      prevHandler={prevPageHandler}
    />
  );
}
