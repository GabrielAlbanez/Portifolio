import React from 'react'
import "./home.css"
import workHome from "../../Assets/imgs/imgHome.jpg"
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';


const Home = () => {
    return (
        <section id='home' className='flex flex-col w-[100%] border-b-[1px] h-[100vh] '>
            <div className='flex items-center justify-center xl:justify-around h-[130%] pt-10 '>
                <div className='h-[50vh] w-[60vh] flex flex-col justify-center '>
                    <div className='flex flex-col items-center xl:items-start bg-slate-300 w-[100%]  gap-10 xl:p-10 md:h-[90%] h-[80%]'>
                        <h2 className='text-2xl'>OLA, EU SOU:</h2>
                        <h1 className='text-3xl sm:text-6xl  sm:pt-3 xl: writeText '>Gabriel Albanez</h1>
                        <hr className='bg-violet-300 h-1 w-[70%] xl:w-[100%]  my-2' />
                        <h2 className='text-2xl'>DESENVOLVEDOR FRONT-END</h2>

                    </div>
                    <div className='flex gap-10 items-center justify-center sm:justify-start p-10'>
                        <button className='flex gap-2 items-center text-md rounded-full border-black border-[2px] px-5 py-2 shadow-violet-300 transition shadow-xl hover:bg-zinc-900 hover:text-white animate-bounce-short'>Linkedin <AiFillLinkedin size={25} /></button>
                        <button className='flex gap-2 items-center text-md rounded-full border-black border-[2px] px-5 py-2 shadow-violet-300 transition shadow-xl hover:bg-zinc-900 hover:text-white animate-bounce-short'>GitHub <AiOutlineGithub size={25} /></button>
                    </div>
                </div>
                <div className='w-[0px] h-[0px] xl:w-[60vh] xl:h-[50vh] overflow-hidden xl:overflow-visible '>
                    <img src={workHome} alt="" className='hidden sm:block w-[100vh] h-[50vh]' />
                </div>
            </div>
            <div className='h-[20%] w-screen flex items-center justify-center'>
                <p className='flex gap-2 text-lg'>Scroll Down <AiOutlineArrowDown size={25} className='animate-bounce' /></p>
            </div>
        </section>
    )
}

export default Home
