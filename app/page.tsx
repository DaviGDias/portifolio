import Footer from '@/components/Home/Footer/Footer'
import Hero from '@/components/Home/Hero/Hero'
import Home from '@/components/Home/Home'
import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-slate-900 h-screen scroll-smooth'>
      <Home />
      <Footer />
    </div>
  )
}

export default HomePage