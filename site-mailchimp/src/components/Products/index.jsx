import React from 'react'
import { products } from './data/products'
import ProductCard from '../ProductCard'
import style from './index.module.css'

export default function Products() {
  return (
    <div className={style.products_container}>
        {
            products.map(el => <ProductCard key={el.id} {...el} />)
        }
    </div>
  )
}
