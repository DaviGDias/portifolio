import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav:boolean;
  closeNav: ()=>void
}

const MobileNav = ({closeNav, showNav}: Props) => {
  const navOpen = showNav?'translate-x-0':'translate-x-[-100%]'
  return (
    <div>
      {/*Overlay*/}
      <div className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
      {/*Nav_Links*/}
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#000000] space-y-6 z-[100000]`}>
        {/* Nav Link */}
        {navLinks.map((navlink) => {
          return <Link key={navlink.id} href={navlink.url}>
            <p className='nav__link text-[20px] ml-12 border-b-[1px] pb-2 border-white sm:text-[30px]'>{navlink.label}</p>
          </Link>
        })}

        {/*Close Buton*/}
        <CgClose onClick={closeNav} className='size-6 absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 text-white cursor-pointer'/>
      </div>

    </div>

  )
}

export default MobileNav
