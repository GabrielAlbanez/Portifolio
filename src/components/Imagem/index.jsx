import React from 'react'

function ImagenZinha({url,width,height}) {
  return (
    <div className='flex flex-col gap-2 items-center rounded-xl w-[7%] h-[40%]  border-black  justify-center animate-bounce py-1 shadow-violet-300 shadow-xl transition hover:bg-black '>
    <img src={url} alt="tecnologia" className='aspect-square object-contain' width={width} height={height}/>
    </div>
  )
}

export default ImagenZinha