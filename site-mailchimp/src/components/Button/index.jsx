import React from 'react'
import style from './index.module.css'

export default function Button({ children }) {
  return (
    <div className={style.sigp_up_btn}>
        { children }
    </div>
  )
}
