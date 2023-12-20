"use client"
import React from 'react'
import { useState } from 'react'

const Usestate = () => {
    const[name, setname] = useState("Adnan")

    const changeName = ()=>{
        setname("Ghani")
    }

    return (
     <>
    <div>{name}</div>
    <button onClick={changeName}>Click Me</button>
    </>
  )
}

export default Usestate