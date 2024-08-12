import React from 'react'
import style from '../ui/dashboard/dashboard.module.css'
import Card from '../ui/dashboard/card/card'
import RightBar from '../ui/dashboard/rightBar/RightBar'
import Transactions from '../ui/dashboard/transactions/Transactions'
import Chart from '../ui/dashboard/chart/Chart'

export default function Dashboard() {
  return (
    <div className={style.wrapper}>
      <div className={style.main}>
        <div className={style.cards}>
          {/* {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))} */}
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={style.side}>
        <RightBar />
      </div>
    </div>
  )
}
