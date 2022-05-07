import { useRouter } from "next/router";
import styles from "../../../../styles/BookListPage.module.css";
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

export default function pagination(props) {
  const router = useRouter();
  const categoryId = props.data[0].category_id;
  const countDataLength = props.data.length;

  const nextPageHandler = () =>
    router.push(`/category/${categoryId}/page/${props.page + 1}`);

  const prevPageHandler = () =>
    router.push(`/category/${categoryId}/page/${props.page - 1}`);

  return (
    <div className="container">
      <main className={styles.main}>
        {props.data.map((book, i) => (
          <div className={styles.cover} key={i}>
            <div className={styles.bookTitle}>
              <h2>{book.title}</h2>
            </div>
            <div className={styles.bookAuth}>
              {book.authors.map((author) => (
                <p key={author}>{author}</p>
              ))}
            </div>
          </div>
        ))}
        <div className="favourite-icon">
          <button>🖤</button>
        </div>
      </main>
      <div className={styles.btn}>
        <div>
          <button onClick={prevPageHandler} disabled={props.page <= 0}>
            Prev
          </button>
        </div>
        <div>
          <button onClick={nextPageHandler} disabled={countDataLength < 15}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
// ❤️🖤
