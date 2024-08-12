import React from 'react'
import style from './Footer.module.css'

export default function Footer() {
  return (
    <div className={style.container}>
    <div className={style.logo}>Lama Dev</div>
    <div className={style.text}>© All rights reserved.</div>
  </div>
  )
}
