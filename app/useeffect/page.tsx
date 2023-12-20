"use client"
import React from 'react'
import {useState, useEffect} from 'react'



const Useeffect = () => {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log("useeffect");},[count]
  )
  
    return (
    <>
    <div>Useeffect page</div>
    <button onClick={()=>setCount(count+1)}>Counter Increament={count}</button>
    </>
  )
}

export default Useeffect