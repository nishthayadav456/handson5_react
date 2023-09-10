import { useState } from "react"
function update(OriginalCompo){
    function  Newcompo(){
        const[cost,setCost]=useState(10);
        let costHandler=()=>{
            setCost(cost+10)
        };
       
        return(
           <OriginalCompo costHandler={costHandler} cost={cost}/> 
          
        
           
          
        )
    }
    return Newcompo
}
export default update