// import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <div className="header bg-slate-700 text-white p-2">
        <nav className="nav flex justify-around">
            <div className="logo flex justify-between ">
              <img src={logo} alt="" className='h-12 w-12 rounded-full' />
              <h2 className=' p-1 text-3xl font-bold'>WSC?</h2>
            </div>

            <div className="navlinks ">
                <ul className="flex justify-between">
                    <li className="p-2">Home</li>
                    <li className="p-2">About</li>
                    <li className="p-2">Contact</li>
                    <li className="p-2">FAQs</li>
                    <li className="p-2">Queires</li>
                </ul>
            </div>
            <div className="btn ">
                <button className=' px-5 py-1 text-2xl
                 rounded-md border-orange-100 border-2 hover:bg-slate-100 hover:text-black'>Login</button>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
