import React from 'react'
import Image from 'next/image'
import fireman from "../../public/fireman.jpg"
const Photos = () => {
  return (
    <>
        <div>
        <Image 
        src={fireman} 
        alt="" 
        // width={200}
        // height={200}
        className='w-[200px] h-[200px] ml-5'
        />
        </div>
        <div>
        <Image 
        src={require("../../public/firefighters day - Made with PosterMyWall.jpg")} 
        alt="" 
        // width={200}
        // height={200}
        className='w-[200px] h-[200px] ml-5'
        />
        </div>
    </>
  )
}

export default Photos