import Link from "next/link";
import styles from "../../styles/Home.module.css";

export async function getServerSideProps() {
  const response = await fetch(
    "https://asia-southeast2-sejutacita-app.cloudfunctions.net/fee-assessment-categories"
  );
  const data = await response.json();

  return {
    props: {
      data: data,
    },
  };
}

export default function category(props) {
  return (
    <main className={styles.main}>
        <h1>Choose Your Book&apos;s Category😉</h1>
      <ul>
        {props.data.map((cat) => (
          <li key={cat.id}>
            <Link href={`/category/${cat.id}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
