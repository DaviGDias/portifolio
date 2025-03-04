import Image from 'next/image'
import React from 'react'

const Section5 = () => {
  return (
    <div className='w-full pt-[4vh] md:pt=[12vh] h-screen bg-gray-200 overflow-hidden relative '>
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>

        
          {/* Text Content*/}
          <div className='order-2 lg:order-1'>
            <h1 className='text-bg  text-3xl sm:text-4xl md:text-4xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[4.5rem] xl:leading-[5rem]'>
              Portal Ipicarga'
            </h1>
            <p>Com mais de 3 anos de experiência em UI/UX na Compass.uol. Meu foco é entender as necessidades dos usuários e transformá-las em experiências digitais que superam expectativas, sempre guiado por empatia e excelência.</p>
          </div>
           {/* Image Content*/}
           <div className='mx-auto overflow-x-hidden order-1 lg:order-2'>
                <a
                        href="https://www.lavoroagro.com/app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block rounded-lg transition-transform duration-300 hover:scale-110"
                      >
                        <Image
                          src='/PortalIpcargaImg.png'
                          alt="Lavoro Agro"
                          width={200}
                          height={200}
                          className="w-full h-auto"
                        />
                      </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section5
