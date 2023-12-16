import React from 'react'
import"./Card.css"
import Button from '../button/Button'
import Tag from '../tag/Tag'

const Card = () => {
  return (
    <>
    <div className='flex-container'>
    <div className='card'>
        <h1 className='cardtitle'>Title: </h1>
        <h2 className='carddes'>Description: </h2>
        <img className='cardimg' src="/fireman-38083_640.jpg" alt="" />
        <Tag title='No.1'/>
        {/* <Button title='Show'/> */}
    </div>
    
    </div>
    </>
  )
}

export default Card