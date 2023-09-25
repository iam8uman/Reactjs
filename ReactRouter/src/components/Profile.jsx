// import React from 'react'
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <>
        <div className="text-4xl text-center bg-slate-700 text-white p-3">Profile Section</div>


    <div className={`main  p-3  bg-slate-800 flex flex-row-reverse  `}>
        
      <div className="text w-1/2 flex-col relative top-20">
        <h1 className="headline text-3xl text-white p-3 font-semibold underline-offset-auto sm:text-3xl md:text-4xl lg:text-5xl ">SumanDai Can Do anythings!</h1>
        <p className="subtext text-1.5xl p-3 text-sky-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellendus id totam perferendis, voluptatibus dolorem amet at hic dolor saepe cupiditate possimus consequatur. Qui sit, itaque molestias facere quo excepturi?</p>
      <button className='btn m-3 p-2 border-2 border-orange-700 my-5 rounded-md text-2xl text-orange-700 bg-white'>Get Me!</button>
      </div>
      <div className="imgbox   p-5 lg:relative lg:right-20 ">
        <img src={logo}  className='rounded-md max-w-full h-auto  border-2 border-white-700'  alt=""/>
      </div>
    </div>
      
    </>
  )
}

export default Home
