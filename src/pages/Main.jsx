import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "./main.css"
import Home from '../components/home'
import Sobre from '../components/Sobre'
import Experiencia from '../components/Experiencia'
import Aos from 'aos'
import Projetcts from '../components/Projects'

const Main = () => {


useEffect(()=>{
Aos.init()
},[])





  return (
    <div >
      <header><Navbar /></header>
      <main className='flex flex-col'>
        <Home />
        <Sobre />
        <Experiencia/>
      </main>
      <footer></footer>

    </div>
  )
}

export default Main