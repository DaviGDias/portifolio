import Image from 'next/image'
import React from 'react'

const Section4 = () => {
  return (
    <div className='w-full pt-[4vh] md:pt=[12vh] bg-gray-200 overflow-hidden relative'>
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>

             {/* Image Content*/}
             <div data-aos="fade-right" className='mx-auto lg:block overflow-hidden'>
             <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block rounded-lg transition-transform duration-300 hover:scale-110"
                        >
                          <Image
                            src='/IpcargaIMG.png'
                            alt="Ipacarga"
                            width={200}
                            height={200}
                            className="w-full h-auto"
                          />
                        </a>

          </div>

        
          {/* Text Content*/}
          <div>
            <h1 className='text-2xl sm:text-3xl md:text-3xl xl:text-3xl font-bold md:leading-[3rem] lg:leading-[4.5rem] xl:leading-[5rem]'>
              Ipicarga - Ipiranga
            </h1>
            <p>Ipiranga é uma empresa brasileira, pertencente ao Grupo Ultra, e uma das maiores empresas brasileiras de distribuição de combustíveis e varejo.</p> <br />
            <p>Atuei como UI Designer no desenvolvimento do App Ipicarga, um projeto da Ipiranga voltado para os colaboradores que transportam os combustiveis facilitando todo o processo necessario para entrega a seus clientes. Seguindo a metodologia Scrum. Minha responsabilidade foi criar interfaces intuitivas e visualmente atrativas, garantindo a melhor experiência para os usuários. Trabalhei sempre junto aos desenvolvedores, participando ativamente das sprints para alinhar design, usabilidade e viabilidade técnica.</p>
            
            {/*<ul className='list-disc flex flex-col gap-4 mt-6'>
              <li>Pesquisa e Benchmarking – Análise de concorrentes e tendências de design para embasar as decisões visuais.</li>
              <li>Wireframes e Protótipos – Criação de esboços e versões interativas para validação das telas.</li>
              <li>Design de Interfaces (UI) – Desenvolvimento de telas funcionais, aplicando conceitos de usabilidade e acessibilidade.</li>
              <li>Criação de Componentes Visuais – Definição de botões, ícones, tipografia e paleta de cores alinhados à identidade da Ipiranga.</li>
              <li>Experiencia do Usuário (UX) – Construindo a interface atendendo às necessidades dos usuários</li>
              <li>Participação em Cerimônias do Scrum – Envolvimento em dailies, plannings e reviews para garantir entregas alinhadas ao projeto</li>
              <li>Acompanhamento do Desenvolvimento – Suporte à equipe técnica para garantir fidelidade ao design aprovado.</li>
            </ul>*/}
          </div>
      
        </div>
      </div>
    </div>
  )
}

export default Section4
