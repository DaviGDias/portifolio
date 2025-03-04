"use client"

import React, { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

const responsivNav = () => {
  const [showNav, setShowNav] = useState(false)

  const showNavHandler = () =>(setShowNav(true))
  const closeShowNav  = () => (setShowNav(false))
  return (
    <div>
      <Nav openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeShowNav} />
    </div>
  )
}

export default responsivNav
