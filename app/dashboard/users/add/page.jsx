import React from 'react'
import style from '@/app/ui/dashboard/users/addUser/addUser.module.css'
import { addUser } from '@/app/lib/actions'
import Link from 'next/link'

export default function page() {
  return (
    <div className={style.container}>
      <Link target="_blank"  href="https://build-9dbq2jk02-omar9.vercel.app/docs/Add-User" passHref>
      <span style={{ display: 'block',  margin: '10px' }}>
    Help
  </span>
      </Link>
      <form action={addUser} className={style.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input type="phone" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>
            Is Active?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
