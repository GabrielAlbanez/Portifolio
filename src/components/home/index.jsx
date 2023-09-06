import React from 'react'
import "./home.css"
import workHome from "../../Assets/imgs/imgP2.png"
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { useTema } from '../../context/Tema';



const Home = () => {



    const { setTema, setColor, temaNavbar, setTemaNavbar, darkModeActive, setDarkModeActive } = useTema()



    const colorHome = darkModeActive
    ? 'bg-zinc-900 text-white border-white  border-b-[2px]'
    : 'bg-white text-black border-b-[2px]    ';


    const colorButtonHome = darkModeActive ? 
    'hover:bg-white hover:text-black hover: animate-bounce-short border-white border-[2px] '
    : 'hover:bg-zinc-900 hover:text-white animate-bounce-short border-black border-[2px] '


    return (
        <section id='home' className={`flex flex-col w-[100%] border-b-[1px] h-[100vh] ${colorHome} transition-all duration-1000 ease-in-out transform ${
            darkModeActive ? 'scale-100' : ''
          }`}>
            <div className='flex items-center justify-center xl:justify-around h-[170%] sm:h-[130%] pt-10 '>
                <div className='h-[50vh] w-[60vh] flex flex-col justify-center '>
                    <div className='flex flex-col items-center xl:items-start  w-[100%]  gap-10 xl:p-10 md:h-[90%] h-[80%]'>
                        <h2 className='text-2xl'>OLA, EU SOU:</h2>
                        <h1 className='text-4xl sm:text-6xl  sm:pt-3 writeText2 '>Gabriel Albanez</h1>
                        <hr className='bg-violet-300 h-1 w-[70%]  lg:w-[100%]  my-2' />
                        <h2 className='text-2xl'>DESENVOLVEDOR FRONT-END</h2>

                    </div>
                    <div className='flex gap-10 items-center justify-center xl:justify-start pt-24 lg:pt-16 xl:pt-6 p-10'>
                        <button className={`flex gap-2 items-center text-md rounded-full px-5 py-2 shadow-violet-300  transition shadow-xl ${colorButtonHome}`}>Linkedin <AiFillLinkedin size={25} /></button>
                        <button className={`flex gap-2 items-center text-md rounded-full px-5 py-2 shadow-violet-300  transition shadow-xl ${colorButtonHome}`} >GitHub <AiOutlineGithub size={25} /></button>
                    </div>
                </div>
                <div className='w-[0px] h-[0px] xl:w-[63vh] xl:h-[50vh] overflow-hidden xl:overflow-visible '>
                    <img src={workHome} alt="" className='hidden sm:block w-[100vh] h-[60vh]' />
                </div>
            </div>
            <div className='h-[20%] w-screen flex items-center justify-center'>
                <p className='flex gap-2 text-lg'>Scroll Down <AiOutlineArrowDown size={25} className='animate-bounce' /></p>
            </div>
        </section>
    )
}

export default Home
