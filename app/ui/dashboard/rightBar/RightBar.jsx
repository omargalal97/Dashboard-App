import React from 'react'
import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import style from './RightBar.module.css'

export default function RightBar() {
  return (
    <div className={style.container}>
    <div className={style.item}>
      <div className={style.bgContainer}>
        <Image className={style.bg} src="/astronaut.png" alt="" fill />
      </div>
      <div className={style.text}>
        <span className={style.notification}>🔥 Available Now</span>
        <h3 className={style.title}>
          How to use the new version of the admin dashboard?
        </h3>
        <span className={style.subtitle}>Takes 4 minutes to learn</span>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit eius libero perspiciatis recusandae possimus.
        </p>
        <button className={style.button}>
          <MdPlayCircleFilled />
          Watch
        </button>
      </div>
    </div>
    <div className={style.item}>
      <div className={style.text}>
        <span className={style.notification}>🚀 Coming Soon</span>
        <h3 className={style.title}>
          New server actions are available, partial pre-rendering is coming
          up!
        </h3>
        <span className={style.subtitle}>Boost your productivity</span>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit eius libero perspiciatis recusandae possimus.
        </p>
        <button className={style.button}>
          <MdReadMore />
          Learn
        </button>
      </div>
    </div>
  </div>
  )
}
