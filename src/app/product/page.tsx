import { Homenaje } from "next/font/google";
import Link from "next/link";
import React from "react";
import Home from "../page";

import CardComponent from "@/components/cards/CardComponent";
import { ProductType } from "@/types/product";
import { Suspense } from "react";
import LoadingComponent from "../loading";

async function fetchProduct() {
  const product = await fetch("https://dummyjson.com/products?limit=100", {
    cache: "no-store",
  });
  const res = await product.json();
  return res.products;
}

export default async function ProductComponene() {
  const product = await fetchProduct();
  return (
    <>
      <div className="mt-10 flex justify-center flex-wrap gap-5">
        <h1 className="font-bold text-large">Hi</h1>
        <Suspense fallback={<LoadingComponent />}>
          {product?.map((pro: ProductType) => (
            <Link href={`/product/${pro.id}`} key={pro.id} >
              <CardComponent
                thumbnail={pro.thumbnail}
                title={pro.title}
                
              />
            </Link>
          ))}
        </Suspense>
      </div>
    </>
  );
}

// const page = () => {
//   return (
//     <div>
//       <Home/>
//       Product page
//       <Link href={`/product/${1}`}>View Detail</Link>
//     </div>
//   )
// }

// export default page
