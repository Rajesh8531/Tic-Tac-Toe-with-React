import React, { useEffect, useState } from 'react'
import { NavLink,useLocation } from 'react-router-dom'

function Index() {
    const [clicked,setClicked] = useState(false)
    const location = useLocation()
    useEffect(()=>{
      if(location.state){
        setClicked(true)
        setTrue(true)
      }
    },[])
    const [True,setTrue] = useState(false)
    
  return (
    <div className='w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] mx-auto my-20 flex flex-col items-center '>
      {  !clicked && <button className='text-center bg-red-600 px-3 py-3 text-xl font-bold  text-white rounded-full hover:bg-teal-500' onClick={()=>{
            setClicked(true)
        }}>Start game</button> }
        {clicked &&  <div className='flex gap-8 flex-col items-center justify-center mt-12'>
            {!True && <NavLink to={'/multiplayer'} className={'px-3 py-3 text-xl bg-red-600 font-bold rounded-full text-white hover:bg-teal-500'}>1 vs 1</NavLink>}
            {!True && <NavLink className={'px-3 py-3 text-xl bg-red-600 font-bold rounded-full text-white hover:bg-teal-500'} onClick={()=>{
              setTrue(true)
            }}>1 vs Computer</NavLink>}
            {True && <NavLink to={'/computer'} className={'px-3 py-3 text-xl bg-red-600 font-bold rounded-full text-white hover:bg-teal-500'}>Easy</NavLink>}
            {True && <NavLink to={'/difficult'} className={'px-3 py-3 text-xl bg-red-600 font-bold rounded-full text-white hover:bg-teal-500'}>Medium</NavLink>}
            
        </div>}
    </div>
  )
}

export default Index