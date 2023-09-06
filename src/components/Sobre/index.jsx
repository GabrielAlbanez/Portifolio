import React from 'react'
import Person from "../../Assets/imgs/imgPortifolio.png"

import { AiOutlineCloudDownload } from 'react-icons/ai';
import { useTema } from '../../context/Tema';

const Sobre = () => {


  const { setTema, setColor, temaNavbar, setTemaNavbar, darkModeActive, setDarkModeActive } = useTema()


  const colorSobre = darkModeActive
  ? 'bg-zinc-900 text-white '
  : 'bg-white text-black ';

  const bordSobre = darkModeActive
  ? 'rounded-lg shadow-md shadow-violet-300 '
  : 'rounded-lg shadow-xl';

  const colorButtonHome = darkModeActive ? 
    'hover:bg-white hover:text-black hover: animate-bounce-short border-white border-[2px] '
    : 'hover:bg-zinc-900 hover:text-white animate-bounce-short border-black border-[2px] '


  return (
    <section data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300'  data-aos-once='true' id='sobre' className={`flex   w-screen justify-center gap-24   items-center  h-[90vh] ${colorSobre}`}>
      <div className={`${bordSobre} flex  items-center justify-center lg:justify-between px-10 lg:px-7  2xl:px-48 w-[95%] h-[90%]   `}>
        <div className='overflow-hidden w-[0px] h-[0px] lg:overflow-visible lg:w-[63vh] lg:h-[50vh]'>
          <img src={Person} alt="" className='object-cover w-[60vh] h-[100%] rounded-lg  shadow-violet-300 shadow-xl' />
        </div>
        <div className=' h-[100%] lg:h-[70vh]  xl:h-[60vh] w-[100%]   lg:w-[50%] flex flex-col justify-evenly items-center lg:items-start lg:justify-start  gap-9 sm:gap-12 p-10'>
          <h1 className=' text-3xl sm:text-5xl  lg:text-4xl '>SOBRE MIM</h1>
          <h2 className='text-md sm:text-2xl '>Campinas, São Paulo</h2>
          <p className=' text-justify text-sm sm:text-xl lg:text-start lg:text-sm  xl:text-start xl:text-xl '>Ola, autalmente estou cursando 2 cursos de ti, um providenciado pela Fiec e o outro curso na instituição Senac,pretendo me tornar futuramente um desenvolvedor Front-End,em meus 4 primeiros meses de vida ja consegui autar na area como freelancer com alguns projetos que serão apresentados nesse portifolio</p>

          <button className={` flex xl:mt-7 items-center gap-1 justify-center w-36 px-5 py-2 rounded-full border-black border-[2px] shadow-violet-300 transition shadow-xl ${colorButtonHome}`}>Curriculo <AiOutlineCloudDownload size={30}/></button>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default Sobre