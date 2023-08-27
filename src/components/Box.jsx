import React, { useState } from 'react'

function Box({text,func,Index,End}) {
    const index = Index
    const [innerText ,setInnerText] = useState(Index + 1)
    const [clicked,setClicked] = useState(false)

    
  return (
    <div className={'border-4 w-auto h-full flex items-center justify-center text-[60px] font-bold text-white cursor-pointer ' + (clicked ? (End ? '' : 'bg-teal-500'):End ?'bg-cyan-400' : ('bg-cyan-400 hover:bg-teal-500'))} onClick={clicked ? null : (End ? null : ()=> {
        setInnerText(text)
        setClicked(true)
        func(index,text)
    })}>{innerText}</div>
  )
}

export default Box