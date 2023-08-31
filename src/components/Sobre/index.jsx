import React from 'react'
import Person from "../../Assets/imgs/imgPortifolio.png"

import { AiOutlineCloudDownload } from 'react-icons/ai';

const Sobre = () => {
  return (
    <section data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' id='sobre' className='flex   w-screen justify-center gap-24   items-center  h-[90vh] '>
      <div className='rounded-lg shadow-xl flex items-center justify-between px-48 w-[95%] h-[90%] '>
        <div className=''>
          <img src={Person} alt="" className='object-cover w-[60vh] h-[100%] rounded-lg  shadow-violet-300 shadow-xl' />
        </div>
        <div className=' h-[60vh] w-[50%] flex flex-col  gap-12 p-10'>
          <h1 className='text-4xl'>SOBRE MIM</h1>
          <h2 className='text-2xl'>Campinas, São Paulo</h2>
          <p className='text-xl'>Ola, autalmente estou cursando 2 cursos de ti, um providenciado pela Fiec e o outro curso na instituição Senac,pretendo me tornar futuramente um desenvolvedor Front-End,em meus 4 primeiros meses de vida ja consegui autar na area como freelancer com alguns projetos que serão apresentados nesse portifolio</p>

          <button className=' flex mt-7 items-center gap-1 justify-center w-36 px-5 py-2 rounded-full border-black border-[2px] shadow-violet-300 transition shadow-xl hover:bg-zinc-900 hover:text-white animate-bounce-short '>Curriculo <AiOutlineCloudDownload size={30}/></button>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Sobre