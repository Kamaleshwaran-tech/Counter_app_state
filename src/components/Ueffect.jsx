import React, { useEffect, useState } from 'react'

const Ueffect = () => {

    const [name,setName]=useState('');

    useEffect( () =>{
        const saved = localStorage.getItem('name');
        if(saved) setName(saved);
    },[]
);

    const handleChange = (e)=>{
        setName(e.target.value);
        //store a value  to the local storage
        localStorage.setItem('name',e.target.value);

    }

  return (
    <div>
        <input type="text" placeholder='Your name' value={name} onChange={handleChange} />
        <p>Hello,{name || "Stanger"}</p>
    </div>
  )
}

export default Ueffect