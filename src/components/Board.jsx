import React, { useState } from 'react'
import Box from './Box'
import Result from './Result'

function Board() {
    const [text,setText] = useState(false)
    const [resultText ,setResultText] = useState('')
    const [end ,setEnd] = useState(false)

    function winner(text) {
        let End = false
        const Arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        Arr.forEach(item => {
            const Filter = item.filter(key => (arr[key] == text))
            if(Filter.length == 3){
                setResultText(`Player ${text} Won the game!`)
                setEnd(true)
                End = true
            }     
        })

        if(End) {
            return 'ended'
        }
    
        if(arr.filter(item => item=='').length == 0 ) {           
                setResultText(`Match Drawn!`)
            setEnd(true)
            
        }
    }

    function SetText(index,innertext) {
        arr[index] = innertext
        winner(innertext)
        setText(prev => (!prev))
    }

    const [arr,setArr] = useState(['','','','','','','','',''])

    let elements = arr.map((item,index) => {
        return (<Box text={text ? 'X' : 'O'} func={SetText} End={end}  key={index} Index={index}/>)
    })


  return (
    <div className='w-[400px] lg:w-[600px] mx-auto  grid grid-cols-3 grid-rows-3 lg:h-[600px] h-[400px] my-20 border shadow-lg relative'>
        {elements}  
        { resultText &&     
        <>
            <div className='absolute top-40 mt-[13px] ml- xl:-left-10 bg-white rounded-xl'>
                <Result text={resultText} result={'multiplayer'}/>
            </div>
        </>}
    </div>
  )
}

export default Board