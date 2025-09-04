import React, { useState } from 'react'

const Toggle = () => {

    const[isDark,setDark]=useState(false);




  return (
    <div style={{
        backgroundColor: isDark ? ' #222':'#fff',
        color:isDark? '#ffff':'#222',
        height:'100vh',
        textAlign:'center'
    }}>
        <h3>{!isDark?'White Theme':'Dark Theme'}</h3>
        <button onClick={()=> setDark(!isDark)}>Toggle Theme</button>
    </div>
  )
}

export default Toggle