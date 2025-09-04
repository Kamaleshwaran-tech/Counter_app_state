import React, { useState } from 'react'

const Condition = () => {


    const [num,setNum]=useState(0);

  return (
    <div>
        <h1>Value:{num}</h1>
        <h2>{num%2 === 0?'Even Number':'Odd Number'}</h2>
        <button onClick={()=> setNum(num+1)}>Increment</button>
    </div>
  )
}

export default Condition