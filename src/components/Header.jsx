import React from 'react'
import { Outlet } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className='h-20 flex items-center text-4xl justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold '>
        Tic Tac Toe
    </div>
    <Outlet />
    </>
  )
}

export default Header