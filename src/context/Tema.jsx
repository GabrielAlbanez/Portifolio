import React, { createContext, useContext, useState } from 'react'


const TemaContext  = createContext()

export default function TemaProvider({children}) {

    const [temaNavbar,setTemaNavbar] = useState()
    const [tema,setTema] = useState()
    const [color,setColor] = useState()
    const [darkModeActive, setDarkModeActive] = useState(false);



  return (

    <TemaContext.Provider value={{tema,setTema,color,setColor,temaNavbar,setTemaNavbar,darkModeActive,setDarkModeActive}}>
        {children}
    </TemaContext.Provider>

  )
}

export function useTema(){
    const Tema = useContext(TemaContext)
    return Tema;
  }
