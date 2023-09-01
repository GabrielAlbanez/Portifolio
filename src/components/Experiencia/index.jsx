import React from 'react'

import { BiLogoReact } from 'react-icons/bi';
import ImagenZinha from '../Imagem';

function Experiencia() {
    return (
        <section id='conhecimentos' data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' className='flex flex-col  w-screen  items-center h-[47vh]'>
            <h1 className='text-4xl'>Conhecimentos</h1>
            <div className='w-[80%] flex flex-wrap justify-between items-center h-[55%] mt-10 p-10'>
                <ImagenZinha width={40} height={40} url={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'} />
                <ImagenZinha width={40} height={40} url={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'} />
                <ImagenZinha width={40} height={40} url={'https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-1.png'} />
                <ImagenZinha width={50} height={50} url={'https://startupstash.com/wp-content/uploads/2022/04/a_op8KnL_400x400.jpg'} />
                <ImagenZinha width={50} height={50} url={'https://cdn.icon-icons.com/icons2/2415/PNG/512/php_plain_logo_icon_146397.png'} />
                <ImagenZinha width={50} height={50}  url={'https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png'} />
                <ImagenZinha width={50} height={50}  url={'https://logospng.org/download/html-5/logo-html-5-1536.png'} />
                <ImagenZinha width={50} height={50}  url={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png'} />
            </div>


        </section>
    )
}

export default Experiencia