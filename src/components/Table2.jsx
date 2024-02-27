import { useState } from "react"

// import React from 'react'
export default function Table2() {
    const [gmail, setGmail]= useState("")
    const [password, setPassword]= useState("")
    gmail =

   
  return (
    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Gmail
                </th>
                <th scope="col" className="px-6 py-3">
                    Passwod
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" onChange={e=>setGmail(e.target.value)} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    hi
                </th>
                <td onChange={e=>setPassword(e.target.value)}  className="px-6 py-4">
                   password
                </td>
            </tr>
           
        </tbody>
    </table>
</div>
  )
}
