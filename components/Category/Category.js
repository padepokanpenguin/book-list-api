import Link from 'next/link';
import styles from '../../styles/Category.module.css'

export default function category(props) {
    return (
      <main className={styles.main}>
          <h1>Choose Your Book&apos;s Category😉</h1>
        <ul>
          {props.data.map((cat) => (
            <li key={cat.id}>
              <Link href={`/category/${cat.id}/page/0`}>{cat.name}</Link>
            </li>
          ))}
        </ul>
      </main>
    );
  }