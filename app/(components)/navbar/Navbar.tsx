import React from 'react'
import "./Navbar.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav>
        <ul>
            <Link href="/"> <li>Home</li></Link>
            <Link href="/about"> <li>about</li> </Link>
            <Link href="/products"> <li>Products</li> </Link>
            <Link href="/contact"> <li>contact</li> </Link>
        </ul>
      </nav>
  )
}

export default Navbar