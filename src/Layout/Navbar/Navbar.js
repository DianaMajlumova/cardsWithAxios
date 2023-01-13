import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/product/:id"}>Product</NavLink>
    </>
  )
}

export default Navbar
