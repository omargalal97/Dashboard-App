import React from 'react'
import style from './Tranactions.module.css'
import Image from 'next/image'

export default function Transactions() {
  return (
    <div className={style.container}>
    <h2 className={style.title}>Latest Transactions</h2>
    <table className={style.table}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Status</td>
          <td>Date</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={style.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={style.userImage}
              />
              John Doe
            </div>
          </td>
          <td>
            <span className={`${style.status} ${style.pending}`}>
              Pending
            </span>
          </td>
          <td>14.02.2024</td>
          <td>$3.200</td>
        </tr>
        <tr>
          <td>
            <div className={style.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={style.userImage}
              />
              John Doe
            </div>
          </td>
          <td>
            <span className={`${style.status} ${style.done}`}>Done</span>
          </td>
          <td>14.02.2024</td>
          <td>$3.200</td>
        </tr>
        <tr>
          <td>
            <div className={style.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={style.userImage}
              />
              John Doe
            </div>
          </td>
          <td>
            <span className={`${style.status} ${style.cancelled}`}>
              Cancelled
            </span>
          </td>
          <td>14.02.2024</td>
          <td>$3.200</td>
        </tr>
        <tr>
          <td>
            <div className={style.user}>
              <Image
                src="/noavatar.png"
                alt=""
                width={40}
                height={40}
                className={style.userImage}
              />
              John Doe
            </div>
          </td>
          <td>
            <span className={`${style.status} ${style.pending}`}>
              Pending
            </span>
          </td>
          <td>14.02.2024</td>
          <td>$3.200</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}
