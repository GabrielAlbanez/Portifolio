import React from 'react';
import Logo2 from "../../Assets/imgs/Logo2.png";

const Navbar = () => {
    return (
        <div className='fixed top-0 w-screen h-[9vh] border-b-[1px] flex items-center justify-between px-10  bg-zinc-100 z-50'>
            <img src={Logo2} alt="logo" width={100} height={100} className='w-20 h-10' />
            <div>
                <ul className='flex gap-10'>
                    <li className='hover:underline hover:decoration-violet-300 hover:decoration-2'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='hover:underline hover:decoration-violet-300 hover:decoration-2'>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li className='hover:underline hover:decoration-violet-300 hover:decoration-2'>
                        <a href="#conhecimentos">Conhecimentos</a>
                    </li>
                    <li className='hover:underline hover:decoration-violet-300 hover:decoration-2'>
                        <a href="#projetos">Projetos</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
