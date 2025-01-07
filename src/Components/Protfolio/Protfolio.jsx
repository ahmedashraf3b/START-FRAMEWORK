import React, { useState } from 'react'
import im1 from '../../assets/im1.png'
import im2 from '../../assets/im2.png'
import im3 from '../../assets/im3.png'

export default function Protfolio() {
const [first, setfirst] = useState(0)
const [last, setLast] = useState(false)
var list = [im1,im2,im3]
 
function gogo() {
    setLast(false)
}

    function  Go(e) {
        setfirst(e)
            setLast(true)
    }

    
    // w-full fixed top-0  flex justify-center  items-center bg-opacity-5 bg-blue-500 z-50 h-full

  return <>
  <div className={last == true? "w-full fixed top-0  flex justify-center  items-center bg-opacity-5 bg-blue-800 z-50 h-full":"w-full fixed top-0   justify-center hidden  items-center bg-opacity-5 bg-blue-800 z-50 h-full"} onClick={()=> gogo()}>
    <div className='w-[40%] h-[40%]  bg-red-800'>
        <img src={list[first]} className='w-full h-full md:h-[130%]' alt="" srcset="" />
    </div>
  </div>
    <h2 className="text-5xl text-center font-extrabold mt-[10%] mb-7">portfolio component</h2>
    <div className="flex items-center justify-center translate-x-[-3.5%] rotate-x-[-45%] ms-24 mb-0">
              <div className=" h-[4px] z w-[80px] me-3 bg-black"></div>
              <i className="fa-solid fa-star"></i>
              <div className=" h-[4px] z w-[80px] ms-3 bg-black"></div>
    </div>
  <div className="container md:h-[100vh] flex justify-center items-center  ">
  <div className="grid grid-cols-1 md:grid-cols-3   gap-4">
    <div className='flex justify-center relative hover:grayscale cursor-pointer ' onClick={() => Go(0)}>
        <div className='flex justify-center hover:opacity-100'>
        <img className="h-auto max-w-[70%]  transition-all rounded-lg" src={im1} alt=""/>
        </div>
    </div>
    <div className='flex justify-center relative hover:grayscale cursor-pointer 'onClick={() => Go(1)}>
        <div className='flex justify-center hover:opacity-100'>
        <img className="h-auto max-w-[70%]  transition-all rounded-lg" src={im2} alt=""/>
        </div>
    </div>
    <div className='flex justify-center relative hover:grayscale cursor-pointer 'onClick={() => Go(2)}>
        <div className='flex justify-center hover:opacity-100'>
        <img className="h-auto max-w-[70%]  transition-all rounded-lg" src={im3} alt=""/>
        </div>
    </div>
    <div className='flex justify-center relative hover:grayscale cursor-pointer ' onClick={() => Go(0)}>
        <div className='flex justify-center hover:opacity-100'>
        <img className="h-auto max-w-[70%]  transition-all rounded-lg" src={im1} alt=""/>
        </div>
    </div>
    <div className='flex justify-center relative hover:grayscale cursor-pointer 'onClick={() => Go(1)}>
        <div className='flex justify-center hover:opacity-100'>
        <img className="h-auto max-w-[70%]  transition-all rounded-lg" src={im2} alt=""/>
        </div>
    </div>
    <div className='flex justify-center relative hover:grayscale cursor-pointer 'onClick={() => Go(2)}>
        <div className='flex justify-center hover:opacity-100'>
        <img className="h-auto max-w-[70%]  transition-all rounded-lg" src={im3} alt=""/>
        </div>
    </div>
</div>
  </div>
  </>
}
