import React from 'react'

type ButtonProps={
    title:string
}
const Button = (props:ButtonProps) => {
  return (
    <div className='btndiv'>
    <button className='btn'>{props.title}</button>
    </div>
  )
}

export default Button