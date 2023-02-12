import React from 'react'
import style from './index.module.css'

export default function Nav() {
  return (
    <nav className={style.header_nav}>
        <ul>
            <li>Products</li>
            <li>Resources</li>
            <li>Inspiration</li>
            <li>Pricing</li>
        </ul>
    </nav>
  )
}
