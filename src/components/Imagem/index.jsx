import React from 'react'

function ImagenZinha({url,width,height}) {
  return (
    <div className='flex flex-col gap-2 items-center rounded-xl w-[7%] h-[40%]  border-black  justify-center  py-1 shadow-violet-300 shadow-xl transition hover:bg-black hover:border-solid hover:border-1 hover:ring-4 ring-purple-300 hover:border-purple-500 '>
    <img src={url} alt="tecnologia" className='aspect-square object-contain' width={width} height={height}/>
    </div>
  )
}

export default ImagenZinha