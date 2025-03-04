import Image from 'next/image'
import React from 'react'
import SwiperComponent from '../Carrosel/Slider';


const images = [
  { src: "/Dellys.png", alt: "Dellys" },
  { src: "/MercadoOxxo.png", alt: "Mercado Oxxo" },
  { src: "/Dellys.png", alt: "Dellys" },
  { src: "/MercadoOxxo.png", alt: "Mercado Oxxo" },
];

const Section3 = () => {
  return (
    <div className='w-full pt-[4vh] md:pt=[12vh] bg-gray-200 overflow-hidden relative'>
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>

        
          {/* Text Content*/}
          <div className='order-2 lg:order-1'>
            <h1 className='text-2xl sm:text-3xl md:text-3xl xl:text-3xl font-bold md:leading-[3rem] lg:leading-[4.5rem] xl:leading-[5rem]'>
              Mercado OXXO (Grupo Nós)
            </h1>
            <p className='mb-4'>O OXXO é um mercado de proximidade fundado em 1978 pela FEMSA Comércio, no México, e é uma das maiores redes varejistas do mundo. Presente em diversos países da América Latina com mais de 19 mil lojas.</p>
            <p className='mb-8'>Atuei como UI Designer no desenvolvimento do Ecommerce da OXXO, criando interfaces para versão desktop e mobile. O projeto foi focado em proporcionar uma experiência de compra intuitiva e eficiente, garantindo usabilidade e identidade visual alinhadas à marca. Trabalhei na concepção, prototipação e entrega do design, colaborando com equipes de UX e desenvolvimento para garantir uma implementação fiel e otimizada.
            </p>
          { /* <ul className='list-disc flex flex-col gap-4 mt-6 mb-6'>
              <li>Pesquisa e Benchmarking – Análise de concorrentes e tendências para definir a melhor experiência de ecommerc</li>
              <li>Wireframes e Prototipação - Desenvolvimento de wireframes, mockups e protótipos interativos de alta fidelidade utilizando ferramentas como Figma</li>
              <li>Design de Interfaces (UI) – Desenvolvimento de telas para versões desktop e mobile, garantindo consistência e acessibilidade</li>
              <li>Criação de Componentes Visuais – Definição de botões, ícones, tipografia e cores alinhados à identidade da OXXO.</li>
              <li>Design Responsivo – Adaptação do layout para diferentes tamanhos de tela, garantindo uma experiência fluida.</li>
              <li>Participação em Reuniões e Alinhamentos – Colaboração com desenvolvedores e stakeholders para garantir a viabilidade técnica</li>
              <li>Colaboração com Desenvolvedores: Trabalho conjunto com a equipe de desenvolvimento para garantir a implementação fiel do design e a melhor performance da plataforma.</li>
              <li>Entrega de Design System – Estruturação e documentação de um guia visual para manter a padronização do ecommerce.</li>
              
            </ul> */}
            {/*<SwiperComponent images={images} slidesPerView={2} spaceBetween={50} />*/}
          </div>
           {/* Image Content*/}
           <div data-aos="fade-left"  className='mx-auto lg:block overflow-x-hidden order-1 lg:order-2 h-full' >
            <a href='https://www.oxxo.com.br/home' target='_blank 'className='block rounded-lg transition-transform duration-300 hover:scale-110'  ><Image src='/MercadoOxxo.png' alt='Mockup do site do Mercado OXXO nos formatos, desktop, mobile e tablet' width={500} height={500} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
