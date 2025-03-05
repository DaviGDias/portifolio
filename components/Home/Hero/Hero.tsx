'use client'
import Image from 'next/image'
import React from 'react'
import { FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] min-h-screen bg-gray-900 overflow-hidden relative scroll-smooth flex items-center">
      <div className="flex flex-col w-11/12 md:w-4/5 h-full mx-auto text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12">

          {/* Text Content */}
          <div className='order-2 lg:order-1 text-left'>
            <h1 data-aos='fade-left' className="text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-300 font-semibold">
             Sou Davi
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay='100' className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Web Design <span className="text-purple-500">UI/UX</span>
            </h1>
            <p className="mt-4 text-gray-400 text-sm sm:text-base">
              Com mais de 3 anos de experiência em UI/UX na Compass.uol. Meu foco é entender as necessidades dos usuários e transformá-las em experiências digitais que superam expectativas, sempre guiado por empatia e excelência.
            </p>

            <div className="flex justify-start gap-4 mt-6 items-center flex-wrap">
              <a href="https://www.linkedin.com/in/davigonçalvesdias/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition duration-300">
                <FaLinkedin size={35} />
              </a>
              <a href="https://www.instagram.com/davidiasdev/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition duration-300">
                <FaInstagram size={35} />
              </a>
              <a href="https://wa.me/5553981247893" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500 transition duration-300" aria-label="Entrar em contato pelo WhatsApp">
                <FaWhatsapp size={35} />
              </a>
              <a href="curriculoDavi.pdf" download="CurriculoDaviDias" className='flex items-center gap-2 rounded-md bg-gray-300 px-4 py-2 text-sm font-semibold text-black shadow-xs hover:bg-purple-500 hover:text-white transition duration-300'>
                <IoMdDownload size={20}/>Meu currículo
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div data-aos="fade-left" className="mx-auto lg:block rounded-3xl border-[3.5px] border-purple-500 overflow-hidden order-1 lg:order-2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex justify-center items-center">
            <Image src="/imagemDavi.png" alt="Foto de Davi" width={500} height={500} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
