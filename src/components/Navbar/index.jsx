import React from 'react';
import Logo2 from "../../Assets/imgs/Logo2.png";

const Navbar = () => {
    return (
        <div className=' fixed top-0 w-screen h-[9vh] border-b-[1px] flex items-center justify-between px-10 backdrop-blur-md bg-zinc-300/10'>
            <img src={Logo2} alt="logo" width={100} height={100} className='w-20 h-10 ' />
            <div>
                <ul className='flex gap-10'>
                    <a href="home"><li className=' transition transform-300 hover:underline hover:decoration-violet-300 hover:decoration-2 '>Home</li></a>
                    <a href=""> <li className=' hover:underline hover:decoration-violet-300 hover:decoration-2 '>Sobre</li></a>
                    <a href=""> <li className=' hover:underline hover:decoration-violet-300 hover:decoration-2 '>Experiencia</li></a>
                    <a href=""><li className=' hover:underline hover:decoration-violet-300 hover:decoration-2 '>Projetos</li></a>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
