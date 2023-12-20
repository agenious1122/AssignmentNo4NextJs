import React from "react";

export default async function Product({
  params,
}: {
  params: { product: string };
}) {
  const fetchData = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.product}`
  );
  const res = await fetchData.json();

  return (
    <>
      <h3>Product Detail</h3>
      <p>{res.id}</p>
      <p>{res.title}</p>
      <p>{res.body}</p>
    </>
  );
}
