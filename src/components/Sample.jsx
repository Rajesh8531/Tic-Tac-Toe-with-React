import React from 'react'

function Sample() {
    function expert(end) {
        const Arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
        Arr.forEach((item,index)=>{
            let entered = false
        const Filter = item.filter(key=>arr[key]=='O')
        const ComputerFilter = item.filter(key=>arr[key]=='X')
        if(Filter.length == 2){
            for (const i of Arr[index]){
                if(i != Filter[0] && i != Filter[1]) 
                    {  if(arr[i] == '' ){
                        console.log('blocked')
                         setter(i,end)

                            } }
                 }
            } 
        else if(ComputerFilter.length == 2){
            console.log(ComputerFilter)
                    for (const i of Arr[index]){
                        if(i != Filter[0] && i != Filter[1]) 
                    {  if(arr[i] == '' ){
                        console.log('allowed')
                         setter(i,end)
                            } }
                        }
                } 

        else { 
            // let Index =  randomGenerator()
            //  setter(Index,end)
            }                    
        } )
        
    }


  return (
    <div>Sample</div>
  )
}

export default Sample