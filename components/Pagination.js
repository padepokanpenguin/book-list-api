import Link from 'next/link'

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
  const number = []
    // for(let i = 1; i <= props.data.length / 15; i++) {
    //     number.push(i)
    // }

  return (
    <main>
      <div>
        <Link href={`/category/${categoryId}/page/1`}>{props.next}</Link>
      </div>
      <div>
        <Link href={`/category/${categoryId}/page/0`}>{props.prev}</Link>
      </div>
    </main>
  );
}