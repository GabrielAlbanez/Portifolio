import React from 'react'

function ImagenZinha({url,width,height}) {
  return (
    <div className='flex flex-col gap-2 items-center bg-zinc-900  rounded-full  w-[17%]  h-[35%] sm:w-[15%] sm:h-[45%] md:w-[13%] md:h-[43%] lg:w-[13%] lg:h-[50%]  xl:w-[6%] xl:h-[50%] shadow-xl shadow-violet-400     justify-center  sm:py-1  '>
    <img src={url} alt="tecnologia" className='aspect-square object-contain' width={width} height={height}/>
    </div>
  )
}

export default ImagenZinha