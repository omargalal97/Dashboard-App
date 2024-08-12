import Search from '@/app/ui/dashboard/search/Search'
import React from 'react'
import style from "@/app/ui/dashboard/users/Users.module.css";
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/ui/dashboard/pagination/Pagination';
import { fetchUsers } from '@/app/lib/data';
import { deleteUser } from '@/app/lib/actions';
export default async function Users({searchParams}) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const  {users, count} = await fetchUsers(q, page);
  // const count = users.
  // console.log(q)
  // console.log(page)
  return (
    <div className={style.container}>

      <div className={style.top}>
        <Search placeholder='search for users'/>
        <Link href='/dashboard/users/add'>
        <button className={style.addButton}>Add new</button>
        </Link>
      </div>
      <table className={style.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={style.user}>
                  <Image
                    src= "/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={style.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "active" : "passive"}</td>
              <td>
                <div className={style.buttons}>
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={`${style.button} ${style.view}`}>
                      View
                    </button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={(user.id)} />
                    <button className={`${style.button} ${style.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}
