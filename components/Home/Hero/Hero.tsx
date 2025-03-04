'use client'
import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-gray-900 overflow-hidden relative scroll-smooth">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

          {/* Text Content */}
          <div className='order-2 lg:order-1'>
            <h1 data-aos='fade-left' className="text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-300 font-semibold">
              Eu sou Davi
            </h1>
            <h1 data-aos="zoon-in" data-aos-delay='100' className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold md:leading-[3rem] lg:leading-[4.5rem] xl:leading-[5rem] text-white">
              Web Design <span className="text-purple-500">UI/UX</span>
            </h1>
            <p  className="mt-4 text-gray-400">
              Com mais de 3 anos de experiência em UI/UX na Compass.uol. Meu foco é entender as necessidades dos usuários e transformá-las em experiências digitais que superam expectativas, sempre guiado por empatia e excelência.
            </p>

            <div className="flex gap-4 mt-6 items-center">
              <a href="https://www.linkedin.com/in/davigonçalvesdias/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition duration-300">
                <FaLinkedin size={40} />
              </a>
              <a href="https://www.instagram.com/davidiasdev/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition duration-300">
                <FaInstagram size={40} />
              </a>
              <a
                href="https://wa.me/5553981247893" // Substitua pelo seu número no formato internacional, ex: 55XXXXXXXXXX
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-500 transition duration-300"
                aria-label="Entrar em contato pelo WhatsApp"
              >
                <FaWhatsapp size={40} />


              </a>
              <a href="CurriculoDaviGDiass.pdf" download="CurriculoDaviDias" className='rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-purple-500 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 transition duration-300' >Meu curriculo</a>

            </div>
          </div>

          {/* Image Content */}
          <div data-aos="fade-left" className="mx-auto lg:block rounded-[3rem] border-[3.5px] border-purple-500 overflow-hidden order-1 lg:order-2">
            <Image src="/imagemDavi.png" alt="Foto de Davi" width={500} height={500} className="object-cover" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
