import React from 'react'
import "./timeLine.css"
import { useTema } from '../../context/Tema'

const Projetcts = () => {
  

  const { setTema, setColor, temaNavbar, setTemaNavbar, darkModeActive, setDarkModeActive } = useTema()

  const colorTimeline = darkModeActive
        ? 'bg-zinc-900 text-white '
        : 'bg-white-100   ';

        const colorTimelineCard = darkModeActive
        ? 'text-box-dark'
        : 'text-box ';

        const timeLineRule = darkModeActive
        ? 'timeline-dark'
        : 'timeline ';

  return (
    <div id='projetos'  className={`flex flex-col gap-10 ${colorTimeline}`}>
      <h1 className='w-[100%] text-5xl text-center'>my projects </h1>
      <div   className='timeline  '>

      <div    className='container left-container  '>
        <img src="https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?pid=ImgDet&rs=1" alt="" />
        <div data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' className={colorTimelineCard}>
          <h2>Project1</h2>
          <small>2018 - 2019</small>
          <p>project complect</p>
          <span className='left-container-arrow'></span>
        </div>
      </div>


      <div className='container right-container'>
        <img src="https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?pid=ImgDet&rs=1" alt="" />
        <div data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' className={colorTimelineCard}>
          <h2>Project2</h2>
          <small>2018 - 2019</small>
          <p>project complect</p>
          <span className='right-container-arrow'></span>
        </div>
      </div>


      <div className='container left-container'>
        <img src="https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?pid=ImgDet&rs=1" alt="" />
        <div data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' className={colorTimelineCard}>
          <h2>Project3</h2>
          <small>2018 - 2019</small>
          <p>project complect</p>
          <span className='left-container-arrow'></span>
        </div>
      </div>



      <div className='container right-container'>
        <img src="https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?pid=ImgDet&rs=1" alt="" />
        <div data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' className={colorTimelineCard}>
          <h2>Project3</h2>
          <small>2018 - 2019</small>
          <p>project complect</p>
          <span className='right-container-arrow'></span>
        </div>
      </div>

      <div className='container left-container'>
        <img src="https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?pid=ImgDet&rs=1" alt="" />
        <div data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' className={colorTimelineCard}>
          <h2>Project3</h2>
          <small>2018 - 2019</small>
          <p>project complect</p>
          <span className='left-container-arrow'></span>
        </div>
      </div>
      <div className='container right-container'>
        <img src="https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?pid=ImgDet&rs=1" alt="" />
        <div data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' className={colorTimelineCard}>
          <h2>Project3</h2>
          <small>2018 - 2019</small>
          <p>project complect</p>
          <span className='right-container-arrow'></span>
        </div>
      </div>
      <div className='container left-container'>
        <img src="https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?pid=ImgDet&rs=1" alt="" />
        <div data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' className={colorTimelineCard}>
          <h2>Project3</h2>
          <small>2018 - 2019</small>
          <p>project complect</p>
          <span className='left-container-arrow'></span>
        </div>
      </div>

      <div className='container right-container'>
        <img src="https://th.bing.com/th/id/OIP.KhEi6z8wYQZVa0IFYmaUXAHaHa?pid=ImgDet&rs=1" alt="" />
        <div data-aos='fade-right' data-aos-duration='1000'data-aos-delay='300' className={colorTimelineCard}>
          <h2>Project3</h2>
          <small>2018 - 2019</small>
          <p>project complect</p>
          <span className='right-container-arrow'></span>
        </div>
      </div>

      </div>
      </div>


  )
}

export default Projetcts