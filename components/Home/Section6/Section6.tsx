



import Image from 'next/image'
import React from 'react'

const Section6 = () => {
  return (
    <div className='w-full pt-[4vh] md:pt=[12vh] bg-gray-200 overflow-hidden relative'>
      <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>

             {/* Image Content*/}
             <div className='mx-auto  rounded-[3rem] overflow-hidden order-1 lg:order-2 ' data-aos="fade-left" >
            <a
              href="https://www.lavoroagro.com/app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg transition-transform duration-300 hover:scale-110"
            >
              <Image
                src="/LavoroAgro.png"
                alt="Lavoro Agro"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </a>

          </div>
        
          {/* Text Content*/}
          <div className='order-1'>
            <h1 className='text-2xl sm:text-3xl md:text-3xl xl:text-3xl font-bold md:leading-[3rem] lg:leading-[4.5rem] xl:leading-[5rem]  h-full'>
            App Minha Lavoro
            </h1>
            <p>Grupo Lavoro foi criado em 2017 e hoje mantém ampla presença na América Latina, com operações no Brasil, Colômbia e Uruguai. Por meio de aquisições de mais de 20 pequenas e médias empresas, a Lavoro tornou-se a maior distribuidora de insumos agrícolas do Brasil, em receita e participação de mercado.</p> <br />
            <p>Com o APP Minha Lavoro é muito mais fácil fazer cotações de insumos agrícolas, alterar limite de crédito e acessar as informações de seus pedidos.
              Além disso, o app reúne informações importantes para o dia a dia na fazenda.</p> <br />

            <p className='mb-32'>No projeto do app Minha Lavoro, atuei como UI/UX Designer, desenvolvendo interfaces intuitivas e focadas na melhor experiência do usuário. Trabalhei na criação de layouts responsivos, garantindo usabilidade e alinhamento com a identidade da marca, além de contribuir para a estruturação de fluxos e interações eficientes dentro do aplicativo.</p>
            
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

export default Section6
