import React from 'react'
import style from './index.module.css'
import Button from '../Button'
import Nav from '../Nav'
import logo from './media/logo_pic.png'
import { BsGlobe2 } from 'react-icons/bs'

export default function Header() {

  return (
    <header className={style.main_header}>
        <div>
        <Nav />
        <img src={logo} alt='logo'/>
        <div className={style.info_block}>
            <p>Sales:<br/>+1 (800) 315-5939</p>
            <BsGlobe2 className={style.glob_icon}/>
            <p>Search</p>
            <p>Log in</p>
        </div>
        <Button>Sign up</Button>
        </div>
    </header>
  )
}
