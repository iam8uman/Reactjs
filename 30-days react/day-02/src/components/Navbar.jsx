// import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between px-10 bg-slate-400 m-2 p-2 rounded-sm">
    
        <h2 className="font-bold text-2xl">Hamro Yatayat</h2>

        <ul className="inline-flex space-x-10">
          <li>
            <a href="/" className="hover:underline-offset-8 hover:ease-linear">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li> 
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
        </ul>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
