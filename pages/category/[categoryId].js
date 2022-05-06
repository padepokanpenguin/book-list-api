import Image from "next/image";
import styles from "../../styles/BookListPage.module.css";

export async function getServerSideProps(ctx) {
  const categoryId = ctx.params.categoryId;
  const res = await fetch(
    `https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-books?categoryId=${categoryId}`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data: data } };
}

export default function Book(props) {
  return (
    <div className="container">
      <main className={styles.main}>
        {props.data.map((book, i) => (
          <div className={styles.cover} key={i}>
            <div className={styles.bookTitle}>
              <h2>{book.title}</h2>
            </div>
            <div className={styles.bookAuth}>
                <p>{book.authors}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
