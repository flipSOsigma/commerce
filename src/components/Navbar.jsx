import React, { useEffect } from 'react'
import { IoSearch, IoCartOutline, IoNotificationsOutline, IoMailOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm text-sm">
      <div className="px-24 py-4 gap-10 flex justify-between items-center">
        <p className="text-2xl flex-2 font-bold flex items-center">Zigger<span className='ml-1 text-sm font-normal text-orange-500'>PATH</span></p>
        <div className='flex-1'>
          <div className="w-full flex items-center px-3 rounded-md gap-3 bg-gray-100">
            <IoSearch className='text-orange-500'/>
            <input type="text" className='w-full text-orange-500 bg-transparent focus:outline-none py-1.5 ' />
          </div>
        </div>
        <div className='flex-2 flex items-center gap-4'>
          <IoCartOutline className='cursor-pointer text-orange-500 text-2xl'/>
          <IoNotificationsOutline className='cursor-pointer text-orange-500 text-2xl'/>
          <IoMailOutline className='cursor-pointer text-orange-500 text-2xl'/>
        </div>
        <div className='flex items-center gap-2'>
          <div className="w-10 aspect-square overflow-hidden border-2 bg-gray-800 border-orange-500 rounded-full">
            <img src='https://dummyjson.com/icon/AlifMahendra123/150' alt="" />
          </div>
          <div className="flex flex-col">
            <p className='text-orange-500 font-bold'>Alif Mahendra</p>
            <p className='text-gray-500 text-xs'>alifmhndr@gmail.com</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
