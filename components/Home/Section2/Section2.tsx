
import Title from '@/components/Helper/Title/Title'
import Image from 'next/image'
import React from 'react'




const Section2 = () => {
  return (
    <div className='w-full flex justify-center flex-col items-center  bg-gray-200'>
        <Title>Alguns dos projetos que trabalhei:</Title>
    <div id='projeto' className='w-full md:pt=[12vh] bg-gray-200 overflow-hidden relative'>
    
        
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto mt-8 lg:mt-32'>

        <div className='grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-12'>
        

          {/* Image Content*/}
          <div data-aos="fade-right" className='mx-auto lg:block overflow-hidden h-full'>
            <a href='https://www.dellys.com.br/' target='_blank' className='block rounded-lg transition-transform duration-300 hover:scale-110' ><Image src='/Dellys.png' alt='Mockup do site da Dellys nos formatos, desktop, mobile e tablet' width={500} height={500} /></a>

          </div>
          {/* Text Content*/}
          <div>
            <h1 className='text-2xl sm:text-3xl md:text-3xl xl:text-3xl font-bold md:leading-[3rem] lg:leading-[4.5rem] xl:leading-[5rem]'>
              Delly's Food Service
            </h1>
            <p>A Delly’s é a maior distribuidora Food Service do Brasil. Fundado em 2015, o Grupo Delly’s tem como objetivo profissionalizar e melhorar a distribuição de alimentos para operadores de restaurantes, padarias, confeitarias, hotéis, supermercados, entre outros. Com presença nacional e expertise de 17 distribuidoras regionais que se juntaram ao grupo, durante este período, a Delly’s se consolidou como a maior distribuidora do Brasil no segmento.</p>
            <br />
            {/*<h1 className='text-bg font-bold text-xl '>Minha Atuação:</h1>*/}
            <p >Atuei como UX/UI Design na concepção e aprimoramento da experiência do usuário no e-commerce da Delly's Food Service, garantindo uma interface intuitiva, acessível e eficiente para milhares de clientes do setor alimentício. Minhas principais atividades incluíram:</p>
           {/* <ul className='list-disc flex flex-col gap-4 mt-6'>
              <li>Wireframes e Prototipação: Desenvolvimento de wireframes, mockups e protótipos interativos de alta fidelidade utilizando ferramentas como Figma</li>
              <li>Design de Interface (UI): Criação de layouts responsivos e design system para proporcionar consistência visual e usabilidade em dispositivos móveis e desktop.</li>
              <li>Colaboração com Desenvolvedores: Trabalho conjunto com a equipe de desenvolvimento para garantir a implementação fiel do design e a melhor performance da plataforma.</li>
              <li>Acessibilidade e Performance: Aplicação de boas práticas de acessibilidade (WCAG) e otimização de elementos visuais para melhor experiência do usuário.</li>
            </ul>*/}
            <div className=' w-full flex justify-center items-center p-16'>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Section2
