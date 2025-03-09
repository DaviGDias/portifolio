import Title from '@/components/Helper/Title/Title';
import Image from 'next/image';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';



const Contato = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [mensagem, setMensagem] = useState<string>("")

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (name === '' || email === '' || mensagem === '') {
            alert('Preencha o campo')
        }

        const templateParams = {
            from_name: name,
            message: mensagem,
            email: email
        }
        emailjs.send('service_61fomhp', 'template_i8k7g47', templateParams, 'e0fhW7jG1wGJ1xVdA')
            .then((response) => {
                console.log("Email Enviado", response.status, response.text)
                setName('')
                setEmail('')
                setMensagem('')
            }, (err) => {
                console.log("Erro ", err)
            })
    }


    return (
        <div id='fale_comigo' className='w-full mx-auto h-full bg-gray-950  text-white flex justify-center items-center flex-col'>
            <Title>Contato</Title>

            <div className='w-full flex p-8 mt-16 mb-16 justify-center flex-col  items-center '>

                <div className='flex gap-4 mt-6 items-center justify-center '>
                    <div className='flex items-center gap-2 flex-col '>
                        <h3 className='text-xl'>Fale comigo por minhas redes:</h3>

                        <div className='flex gap-4 mt-4 mb-12'>
                            <a href='https://www.linkedin.com/in/davigon%C3%A7alvesdias/' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-purple-500 transition duration-300'>
                                <FaLinkedin size={40} />
                            </a>



                            <a href='https://www.instagram.com/davidiasdev/' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-purple-500 transition duration-300'>
                                <FaInstagram size={40} />
                            </a>
                            <a href='https://wa.me/5553981247893' target='_blank' rel='noopener noreferrer' className='text-gray-400 hover:text-purple-500 transition duration-300' aria-label='Entrar em contato pelo WhatsApp'>
                                <FaWhatsapp size={40} />
                            </a>
                        </div>
                    </div>
                </div>



                <div className="w-full lg:w-[45%] md:w-[45%]">

                    <form
                        onSubmit={sendEmail}
                        className="shadow-md rounded px-8 flex justify-center flex-col gap-8"
                        noValidate
                    >
                        <div className='flex justify-center flex-col gap-2'>
                            <label>Nome</label>
                            <input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Digite seu nome'
                                className='w-full rounded border bg-gray-800 border-gray-700 bg-inherit p-3 shadow shadow-gray-700 mt-2 appearance-none outline-none text-gray- ... invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'

                            ></input>



                        </div>

                        <div className='flex justify-center flex-col gap-2'>
                            <label className='block'>E-mail</label>
                            <input
                                value={email}
                                type='email'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Digite seu email'
                                className='w-full rounded border bg-gray-800 border-gray-700 bg-inherit p-3 shadow shadow-gray-700 mt-2 appearance-none outline-none text-gray- ... peer invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
                                required
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            >
                            </input>
                            <span className="mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">
                                *Insira um e-mail válido
                            </span>
                        </div>


                        <div>
                            <textarea
                                value={mensagem}
                                className='w-full h-40 p-4 rounded border text-gray-50 bg-gray-900  border-gray-700 appearance-none'
                                placeholder='Digite sua mensagem'
                                onChange={(e) => setMensagem(e.target.value)}
                            >

                            </textarea>
                        </div>
                        <button
                            className="bg-purple-500 hover:bg-purple-700 transform duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline group-invalid:pointer-events-none group-invalid:opacity-30"
                            type='submit'>
                            Enviar
                        </button>
                    </form>

                </div>
            </div>
        </div>

    );
}

export default Contato;
