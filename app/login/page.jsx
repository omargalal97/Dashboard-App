import React from 'react'
import style from '@/app/ui/dashboard/login/login.module.css'

export default function Login() {
  return (
    <div className={style.container}>
      <form action className={style.form}>
        <h1>Login</h1>
        <input type="text" placeholder='username' name='username' />
        <input type="password" placeholder='password' name='password'/>
        <button>Login</button>

      </form>

    </div>
  )
}
