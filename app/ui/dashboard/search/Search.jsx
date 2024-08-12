"use client"
import React from 'react'
import style from './Search.module.css'
import { MdSearch } from "react-icons/md";
import { usePathname, useSearchParams, useRouter } from 'next/navigation';


export default function Search({placeholder}) {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const pathName = usePathname();
  const handleSearch = (e)=>{
  const params = new URLSearchParams(searchParams)
  params.set("page", 1)
  if(e.target.value){
  params.set("q", e.target.value)
  }else{
    params.delete("q")
  }
  replace(`${pathName}?${params}`)

  }
  
  console.log(searchParams)
  console.log(pathName)
  return (
    <div className={style.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={style.input}
        onChange={handleSearch}
      />
    </div>
  )
}
