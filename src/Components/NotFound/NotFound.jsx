import React from 'react'
import icon from '../../assets/confused.png'

export default function NotFound() {
  return<>
       <div className="h-[70vh] flex justify-center items-center  mt-24 bg-white pb-14">
        <h1 className='text-5xl flex justify-center'><img className='w-14' src={icon} alt="icon"  /><span>هتبطل تفاهة امتي؟</span></h1>
        </div>
  </>
}
