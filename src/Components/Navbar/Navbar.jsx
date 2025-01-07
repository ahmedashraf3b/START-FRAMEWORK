import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
const [last, setLast] = useState(null)
function active(e) {
  setLast(e)
}

  return <>
<nav className="border-gray-200 bg-[#2c3e50] fixed top-0 z-40  w-full p-4 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
    <Link to='START-FRAMEWORK' className={last == null? "self-center font-semibold whitespace-nowrap text-3xl  text-white":"self-center font-semibold whitespace-nowrap text-3xl  text-white"} onClick={()=> active(null)}>START FRAMEWORK</Link>
    </a>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 text-xl rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <Link to="about" className={last == 0? "block text-white py-2 px-3 md:p-0 active rounded":"block text-white py-2 px-3 md:p-2  rounded"} onClick={()=> active(0)}>ABOUT</Link>
        </li>
        <li>
          <Link to="protfolio" className={last == 1? "block text-white py-2 px-3 md:p-0 active rounded":"block text-white py-2 px-3 md:p-2  rounded"} onClick={()=> active(1)}>PROTFOLIO</Link>
        </li>
        <li>
          <Link to="contact" className={last == 2? "block text-white py-2 px-3 md:p-0 active rounded":"block text-white py-2 px-3 md:p-2  rounded"} onClick={()=> active(2)}>CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
}
