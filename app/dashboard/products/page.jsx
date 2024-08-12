import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '@/app/ui/dashboard/products/Products.module.css'
import Pagination from '@/app/ui/dashboard/pagination/Pagination'
import Search from '@/app/ui/dashboard/search/Search'
import { fetchProducts } from '@/app/lib/data';
import { deleteProduct } from '@/app/lib/actions'


export default async function Products({searchParams}) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const {  products, count } = await fetchProducts(q, page);
  return (
    <div className={style.container}>
      <div className={style.top}>
        <Search placeholder='search for products' />
        <Link href='/dashboard/products/add'>
          <button className={style.addButton}>Add new</button>
        </Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={style.product}>
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className={style.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={style.buttons}>
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className={`${style.button} ${style.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={product.id} />
                    <button className={`${style.button} ${style.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}
