import React from 'react'
import { useState } from 'react'

function ComputerBox(props) {
    let {text,Index,func,End,Pause} = props
    let index = Index + 1
    const [clicked,setClicked] = useState(false)
    const [innerText,setInnerText] = useState(index)
       
  return (
    <div className={'border-4 w-auto h-full flex items-center justify-center text-[60px] font-bold text-white cursor-pointer bg-cyan-400 '+ ( text=='X' ? 'bg-teal-500' : (clicked ? 'bg-teal-500':(End ? '' : ' hover:bg-teal-500')))} onClick={text != 'X' && !clicked && !Pause && !End ? ()=> {
        setClicked(true)
        setInnerText(text)
        func(Index,text)
  } : null }>{text=='X' ? 'X' : innerText}</div>
  )
}

export default ComputerBox