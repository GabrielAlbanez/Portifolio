import React from 'react'
import Navbar from '../components/Navbar'
import workHome from "../Assets/imgs/imgHome.jpg"

const Main = () => {
    return (
        <>
            <header><Navbar /></header>
            <main className='flex p-10 h-screen'>
                <section className='flex items-center justify-around  w-screen border-b-[1px] h-[70vh] '>
                    <div className=' h-[50vh] w-[60vh] flex flex-col justify-center'>
                        <div className='flex flex-col gap-10 p-10 h-[70%] '>
                            <h2 className='text-2xl'>OLA, EU SOU:</h2>
                            <h1 className='text-6xl pt-3'>Gabriel Albanez</h1>
                            <hr className='bg-violet-300 h-1 '/>
                            <h2 className='text-2xl'>DESENVOLVEDOR FRONT-END</h2>

                        </div>
                        <div className='flex gap-10 items-center p-10'>
                            <button className='text-md rounded-full border-black border-[2px] px-5 py-2 shadow-violet-300 shadow-xl'>Linkedin</button>
                            <button className='text-md rounded-full border-black border-[2px] px-5 py-2 shadow-violet-300  shadow-xl'>GitHub</button>
                        </div>
                    </div>
                    <div className='bg-blue-600 w-[60vh] h-[50vh]'>
                        <img src={workHome} alt="" className='w-[100vh] h-[50vh] ' />
                    </div>
                </section>
            
            </main>
            <footer></footer>

        </>
    )
}

export default Main