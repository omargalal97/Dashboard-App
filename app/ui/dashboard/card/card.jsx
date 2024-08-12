import React from 'react'
import style from './card.module.css'
import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className={style.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={style.texts}>
        <span className={style.title}>hhh</span>
        <span className={style.number}>kkkk</span>
        {/* <span className={style.detail}>
          <span className={item.change > 0 ? style.positive : style.negative}>
            {item.change}%
          </span>{" "}
          {item.change > 0 ? "more" : "less"} than previous week
        </span> */}
      </div>
    </div>
  )
}
