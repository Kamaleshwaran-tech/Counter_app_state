import React, { useState } from 'react'

const Counter = () => {

    //syntax for state
    const [count,setCount] = useState(0);

    // Increment Function
    // const increment = () =>{
    //     setCount(count+1);

    // }
    // const decrement = () =>{
    //     if(count>0){
    //         setCount(count-1);
    //     }
    // }



  return (
    <div style={{display:'flex', gap:'10px'}}>
        <button style={{borderRadius:'10px'}} onClick={() =>{ if(count>0){ setCount (count- 1) }}} >-</button>

        <form action="">
            <input style={{width:'25px'}} type="number" value={count} />
        </form>
        
        <button style={{borderRadius:'10px'}} onClick={()=> setCount(count+1) }>+</button>
    </div>
  )
}

export default Counter