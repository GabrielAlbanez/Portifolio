import React from 'react';
import Logo2 from "../../Assets/imgs/LogoWhite.png";
import Logo1 from "../../Assets/imgs/LogoDark2.png";
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { useTema } from '../../context/Tema';

const Navbar = () => {



    const { setTema, setColor, temaNavbar, setTemaNavbar, darkModeActive, setDarkModeActive } = useTema()



    const ActiveDarkMode = () => {
        setDarkModeActive(!darkModeActive);
    };


    const colorNavbar = darkModeActive
        ? 'bg-zinc-600 text-white border-white  border-b-[1px]'
        : 'bg-zinc-100 text-black border-b-[2px]    ';

    return (
        <div className={`fixed top-0 w-[100%] h-[9vh]  flex items-center justify-between px-3  sm:px-10 ${colorNavbar} z-50 overflow-hidden  transition-all duration-1000 ease-in-out transform ${
            darkModeActive ? 'scale-100' : ''
          }`}>
            <img src={darkModeActive === true ? Logo1 : Logo2 } alt="logo" width={100} height={100} className='w-20 h-10 ' />
            <div>
                <ul className='flex  flex-row items-center gap-5 text-sm sm:flex-row  sm:gap-10'>
                    <li className='hover:underline '>
                        <a href="#home">Home</a>
                    </li>
                    <li className='hover:underline '>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li className='hover:underline '>
                        <a href="#conhecimentos">Conhecimentos</a>
                    </li>
                    <li className='hover:underline '>
                        <a href="#projetos">Projetos</a>
                    </li>

                    <li >
                        {darkModeActive === false ? <BsSun size={27} onClick={ActiveDarkMode} className='cursor-pointer' /> : <BsMoonStars size={27} onClick={ActiveDarkMode} className='cursor-pointer' />}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
