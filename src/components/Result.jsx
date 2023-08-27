import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Result({text,result}) {

    const [noButton,setNoButton] = useState(false)


    function handleClickYes() {
        window.location.reload()
    }

    function handleClickNo() {
        setNoButton(true)
    }

  return (
    <>
    { !noButton && <div className='flex flex-col gap-5 p-8 lg:ml-1 '>
        <h1 className='lg:text-5xl text-2xl text-center font-bold whitespace-nowrap'>{text}</h1>
        <h1 className='lg:text-5xl text-2xl mx-auto w-full text-center'>Want to play agian?</h1 >
            <div className='flex justify-center gap-8'>
            <NavLink  to={'/'}  className='px-4 py-2 text-white bg-red-500 hover:bg-teal-500 border rounded-full text-2xl font-bold' state={{location : 'game'}} >Yes</NavLink>
            <button onClick={handleClickNo} className='px-4 py-2 text-white bg-red-500 hover:bg-teal-500 border rounded-full text-2xl font-bold'>No</button>
            </div>
    </div>}
    {noButton && (<>
    <div className='flex flex-col justify-center items-center pb-4'>
      <p className='text-center p-10 font-bold lg:text-5xl text-2xl'>Thank You for playing!</p>
      <NavLink to={'/'} className={'px-3 py-3 text-xl font-bold rounded-full hover:bg-teal-500 bg-red-600 text-white'} >Back to home</NavLink>
      </div>
    </>)
    }
    </>
  )
}

export default Result