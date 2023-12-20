"use client"
import React from 'react'
import { useState } from 'react'

const OnChangeEvent = () => {
  const [inputval, setInpulVal] = useState("");
  const [radioVal, setRadioVal] = useState("");
  
  
    return (
        <>
    <div>OnChangeEvent page</div><br />
    <input type="text" 
    placeholder='Write Something'
    onChange={(e)=>setInpulVal(e.target.value)} />
    <br />
    
    <label>
        <input type="radio" value={"Haan"} name='abc' onChange={(e)=>setRadioVal(e.target.value)} /> {" "}Yes
    </label>

    <label>
        <input type="radio" value={"Nahi"} name='abc' onChange={(e)=>setRadioVal(e.target.value)} />{" "} No
    </label><br />
    <p>{inputval} {radioVal}</p><br />
    


    </>
  )
}

export default OnChangeEvent