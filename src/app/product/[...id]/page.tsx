import { title } from 'process'
import Image from 'next/image'
import React from 'react'
type ParamProps = {
  params : {
    id:  number |string
  }
   
  }

async function getDetail(id:number| string){
   const productDetail=await fetch(`https://dummyjson.com/products/${id}`);
   return productDetail.json();
}


async function Detail({params}: ParamProps) {
  const id = params.id;
  const productDetail= await getDetail(id)
  return (
    <div>
      Detail page {id}
      product title: {productDetail.title}
      <img src={productDetail.thumbnail}
       />


    </div>
  )
}

export default Detail
