import React from 'react'
import "./Tag.css"
type TagProps={
    title:string
}
const Tag = (props:TagProps) => {
  return (
    <div className='tagdiv'>
    <div className='tag'>{props.title}</div>
    </div>
  )
}

export default Tag