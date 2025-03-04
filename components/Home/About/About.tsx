import Title from '@/components/Helper/Title/Title'
import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

const About = () => {
  return (
    <div className='w-full flex justify-center flex-col items-center text-black bg-white py-12 px-4'>
      <Title>Sobre mim</Title>
      <div id='sobre_mim' className='w-full overflow-hidden relative'>

        <div className='flex justify-center flex-col w-11/12 md:w-4/5 h-full mx-auto mt-8 lg:mt-24'>

          <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12'>

            {/* Image Content */}
            <div className='flex justify-center'>
              <div className='w-full  sm:w-auto sm:h-64 md:w-auto md:h-80 lg:w-auto lg:h-300 overflow-hidden'>
                <Image src='/undraw_hello_ccwj.svg' alt='Ilustração' width={500} height={500} className='object-cover w-full h-full' />
              </div>
            </div>

            {/* Text Content */}
            <div className='text-black text-sm sm:text-base'>
              <p>
                Olá! Sou Davi, formado em Análise e Desenvolvimento de Sistemas, com mais de 3 anos de experiência atuando como Web Designer e Analista UX. Minha paixão está em criar experiências digitais intuitivas e visuais atraentes, sempre focando na usabilidade e na melhor jornada para o usuário.
              </p>
              <br />
              <p>
                Ao longo da minha trajetória, trabalhei com design de interfaces para e-commerce, aplicativos e plataformas digitais, aplicando metodologias como Scrum para otimizar processos e entregar produtos eficientes. Minha abordagem une design estratégico e tecnologia, garantindo soluções inovadoras e funcionais.
              </p>
              <br />
              <p>
                Seja para aprimorar um projeto existente ou criar algo do zero, estou sempre em busca de novos desafios e oportunidades para transformar ideias em experiências incríveis!
              </p>
              
              <div className='flex gap-4 mt-6 items-center'>
                <a href='https://www.linkedin.com/in/davigon%C3%A7alvesdias/' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-purple-500 transition duration-300'>
                  <FaLinkedin size={35} />
                </a>
                <a href='https://www.instagram.com/davidiasdev/' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-purple-500 transition duration-300'>
                  <FaInstagram size={35} />
                </a>
                <a href='https://wa.me/5553981247893' target='_blank' rel='noopener noreferrer' className='text-gray-700 hover:text-purple-500 transition duration-300' aria-label='Entrar em contato pelo WhatsApp'>
                  <FaWhatsapp size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
