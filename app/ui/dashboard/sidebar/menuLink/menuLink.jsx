"use client"
import React from 'react'

import Link from 'next/link'
import style from './menuLink.module.css'
import { usePathname } from 'next/navigation'

export default function MenuLink({item}) {
    const pathName = usePathname()
    console.log(pathName)
  return (
    <Link href={item.path} className={`${style.container} ${pathName === item.path && style.active}`}>
        {item.icon}
        {item.title}
    </Link>
  )
}
