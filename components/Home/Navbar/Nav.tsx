'use client'
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
  openNav: () => void
}

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true)
      } if (window.scrollY < 90) {
        setNavBg(false)
      }
    }
    window.addEventListener("scroll", handler)

    return () => {
      window.addEventListener("scroll", handler)
    }
  })

  return (
    <div className={`fixed ${navBg ? 'bg-[#000000]' : 'fixed'} h-[12vh] z-[10] w-full transition-all duration-200 `}>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] wl:w-[80%] mx-auto'>
        {/*Logo*/}
        <span className='text-white font-bold text-2xl '> Davi <span className='text-purple-600'>Dias</span></span>

        {/* Nav Link */}
        <div className='hidden lg:flex items-center space-x-10 scroll-smooth'>
          {navLinks.map((navlink) => {
            return <Link key={navlink.id} href={navlink.url}>
              <p className='nav__link'>{navlink.label}</p>
            </Link>
          })}
        </div>
        {/* Burguer */}
        <HiBars3BottomRight onClick={openNav} className='size-6 w-8 cursor-pointer text-white lg:hidden' />
      </div>
    </div>
  )
}

export default Nav