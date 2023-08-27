import React, {  useState } from 'react'
import ComputerBox, {} from './ComputerBox'
import Result from './Result'

function Computer() {

    const [arr,setArr] = useState(['','','','','','','','',''])
    const [resultText ,setResultText] = useState('')
    const [finish ,setFinish] = useState(false)
    const [pause,setPause] = useState(false)

    let check = false
     function winner(text) {
        let end= false
        
        const Arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        for(let i=0;i<Arr.length;i++) {
            const Filter = Arr[i].filter(key => (arr[key] == text))
            if(Filter.length == 3){
                if (text == 'X') {
                    setResultText(`You Lose the game!`)
                    end = true
                    check=true           
                } else {
                    setResultText(`You Won the game!`)
                    setFinish(true)
                    end =true
                    check=true
                    console.log('Win End',end)
                }
                
            }
            }
            
            if(check){
                return 'ended'
            }

            if(arr.filter(item => item=='').length == 0 ) {
                    console.log('Draw',end)
                    !check && setResultText(`Match Drawn!`)
                
                
                end =true
            }
        return end
    }
    
    let [elements,setElements] = useState('')
    function computerturn(index,text) {
            arr[index] = text
            let end =  winner(text)
            setPause(true)
            
            let Index =  randomGenerator()
            setTimeout(()=>{
                setArr(prev=>{
                   !end && (prev[Index] = 'X')
                    setPause(false)
                    setElements(prev.map((item,index) => {
                        return (<ComputerBox text={item =='X' ? 'X' : 'O'} Index={index} func={computerturn} key={index} End={end} Pause={pause} />) 
                    }))
                    winner('X')
                    return prev
                })
            } ,300)
        }

        function randomGenerator() {
            let Arr = []
            let number = 0
            arr.map((item,index)=>{
                if(item == ''){
                    Arr.push(index)
                    number ++
                }
            })
            const selectedIndex = Math.floor(Math.random() * number)
            return Arr[selectedIndex]        
        }

    

  return (
    <>
    <div className='w-[400px] lg:w-[600px] mx-auto  grid grid-cols-3 grid-rows-3 lg:h-[600px] h-[400px] my-20 border shadow-lg relative'>
        { elements ? (elements) :
           (arr.map((item,index) => {

            return (<ComputerBox text={item =='X' ? 'X' : 'O'} Index={index} func={computerturn} key={index} End={finish} Pause={pause} />) 
        }))
        }{ resultText &&     
            <>
                <div className='absolute top-40 mt-[13px] ml- xl:-left-10 bg-white rounded-xl'>
                    <Result text={resultText} result={'computer'} />
                </div>
            </>}
    </div>
    </>
  )
}

export default Computer