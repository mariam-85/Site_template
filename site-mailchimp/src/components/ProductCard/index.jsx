import React from 'react'
import style from './index.module.css'


export default function ProductCard({ id, title, image, description, background_color }) {
  return (
    <div>
        <div className={[style.img_block, style[background_color]].join(' ')}>
            <p>{ title }</p>
            <img src={image} alt={title} />
            <button>ADD TO CART</button>
        </div>
        <div className={[style.descr_block, style[background_color]].join(' ')}>
            <p>{ description }</p>
            <button>Learn more</button>
        </div>
    </div>
  )
}
