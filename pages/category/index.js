import Link from "next/link";
import Category from "../../components/Category/Category";

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
    <Category data={props.data} />
  );
}
