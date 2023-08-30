import React from 'react'
import "./home.css"
import workHome from "../../Assets/imgs/imgHome.jpg"
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineGithub,AiFillLinkedin } from 'react-icons/ai';


const Home = () => {
    return (
        <section id='home' className='flex flex-col  w-screen border-b-[1px] h-[100vh] '>
            <div className='flex items-center justify-around h-[130%] pt-10'>
                <div className=' h-[50vh] w-[60vh] flex flex-col justify-center'>
                    <div className='flex flex-col gap-10 p-10 h-[70%] '>
                        <h2 className='text-2xl'>OLA, EU SOU:</h2>
                        <h1 className='text-6xl pt-3 writeText'>Gabriel Albanez</h1>
                        <hr className='bg-violet-300 h-1 ' />
                        <h2 className='text-2xl'>DESENVOLVEDOR FRONT-END</h2>

                    </div>
                    <div className='flex gap-10 items-center p-10'>
                        <button className='  flex gap-2 items-center text-md rounded-full border-black border-[2px] px-5 py-2 shadow-violet-300 transition shadow-xl hover:bg-zinc-900 hover:text-white animate-bounce  '>Linkedin <AiFillLinkedin size={25}/></button>
                        <button className=' flex gap-2 items-center text-md rounded-full border-black border-[2px] px-5 py-2 shadow-violet-300  transition shadow-xl hover:bg-zinc-900 hover:text-white animate-bounce '>GitHub <AiOutlineGithub size={25}/></button>
                    </div>
                </div>
                <div className='bg-blue-600 w-[60vh] h-[50vh] '>
                    <img src={workHome} alt="" className='w-[100vh] h-[50vh] ' />
                </div>
            </div>
            <div className='h-[20%] w-screen flex items-center justify-center'>
                <p className='flex gap-2 text-lg'>Scroll Dow <AiOutlineArrowDown size={25} className='animate-bounce'/></p>
            </div>

        </section>

    )
}

export default Home