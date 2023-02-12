import React from 'react'
import Button from '../Button'
import style from './index.module.css'

export default function Banner1() {
  return (
    <div className={style.banner}>
        <div>
        <h2>Turn Emails into Revenue</h2>
        <p>Win new customers with the #1 email marketing and automations  <br /> brand* that recommends ways to get more opens, clicks, and sales.</p>
        <Button>Sign up</Button>
        </div>
        
    </div>
  )
}
