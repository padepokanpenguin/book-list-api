import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Welcome</h1>
      <Link href='/category'>Category</Link>
      <Link href='/favourite'>Your favourite</Link>
      </main>
    </div>
  )
}
