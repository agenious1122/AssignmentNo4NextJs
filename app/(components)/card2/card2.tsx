import React from 'react'
import Image from 'next/image'
import "./card2.css"

const Card2 = ({Name="adnan", Desig="SI"}:{Name?:string; Desig?:string}) => {
  return (
    <>
    <h2>Card</h2>

<div className="card">
  {/* <Image src="img_avatar.png" alt="Avatar" > */}
  <div className="container">
    <h4><b>{Name}</b></h4> 
    <p>{Desig}</p> 
  </div>
</div>
</>
  )
}

export default Card2