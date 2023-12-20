
import React from "react";
import Link from "next/link";

export default async function Products(params: any) {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await fetchData.json();

  return (
    <div>
      <h1>Product Details</h1>
      <ol>
        {res.map((item: any, i: number) => {
          return ( 
            <li>
              <Link href={`/products/${item.id}`}>{item.title}</Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
