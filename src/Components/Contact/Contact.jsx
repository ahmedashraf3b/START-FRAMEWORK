import React from 'react'

export default function Contact() {
  return <>
<div className='h-[80vh] mx-auto bg-white pt-40 mb-9'>
<h2 className="text-5xl text-center font-extrabold mb-7">conatct section</h2>
            <div className="flex items-center justify-center translate-x-[-3.5%] rotate-x-[-45%] ms-24 mb-3">
              <div className=" h-[4px] z w-[80px] me-3 bg-black"></div>
              <i className="fa-solid fa-star"></i>
              <div className=" h-[4px] z w-[80px] ms-3 bg-black"></div>
            </div>
<div className="  flex justify-center items-center mb-5 group">
      <input type="name" name="floating_name" id="floating_name" className="block w-[40%]  py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="User Name " required />
      <label htmlFor="floating_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="  flex justify-center items-center mb-5 group">
      <input type="number" name="floating_password" id="floating_password" className="block w-[40%]  py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="User Age " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div> 
  <div className="  flex justify-center items-center mb-5 group">
      <input type="email" name="floating_email" id="floating_email" className="block w-[40%]  py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="User Email " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div className="  flex justify-center items-center mb-5 group">
      <input type="password" name="floating_password" id="floating_password" className="block w-[40%]  py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="User Password " required />
      <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div className='flex items-center justify-center'>
  <button type="button" className="focus:outline-none translate-x-[-188%]  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-5 mb-7 dark:bg-green-600">Send Massage</button>
  </div>
  </div>
  </>
  
}
