// import { title } from 'process'
import React from 'react'

// type ButtonProps={
//     title:string
// }
const Button = ({title="default"}:{title?:string})=>{
  return (
   <>
    <div className='btndiv'> 
    <button className='btn'>{title}</button>
    </div>
    </>
  )
}

export default Button