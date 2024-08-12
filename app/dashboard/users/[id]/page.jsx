import React from 'react'
import style from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'
import { fetchUser, updateUser } from '@/app/lib/actions';

export default async function AddSingleUser({ params }) {
  const { id } = params;
  const user = await fetchUser(id);
  return (
    <div className={style.container}>
      <div className={style.infoContainer}>
        <div className={style.imgContainer}>
          <Image src={user.img || "/noavatar.png"}  alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={style.formContainer}>
      <form action={updateUser} className={style.form}>
          <input type="hidden" name="id" value={user.id}/>
          <label>Username</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Address</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>Yes</option>
            <option value={false} selected={!user.isActive}>No</option>
          </select>
          <button>Update</button>
        </form>


          
      </div>
    </div>
  )
}
