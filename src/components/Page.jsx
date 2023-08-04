import React from 'react'
import { Link } from 'react-router-dom'

export default function Page({active, children}) {
  return (
    <div className='p-2 ml-[-20px] lg:m-4 flex-row'>
      <div className='block lg:flex justify-between p-5'>
        <div>
          <h1 className='text-4xl font-bold text-white m-5 mb-6'>{active === 'classiques' ? <span>Les classiques</span> : <span></span>}</h1>
          <h1 className='text-4xl font-bold text-white m-5 mb-6'>{active === 'incontournables' ? <span>Les incontournables</span> : <span></span>}</h1>
          <h1 className='text-4xl font-bold text-white m-5 mb-6'>{active === 'romaroma' ? <span>Les Roma Roma</span> : <span></span>}</h1>
          <h1 className='text-4xl font-bold text-white m-5 mb-6'>{active === 'pates' ? <span>Les pâtes</span> : <span></span>}</h1>
          <h1 className='text-4xl font-bold text-white m-5 mb-6'>{active === 'desserts' ? <span>Les desserts</span> : <span></span>}</h1>
          <h1 className='text-4xl font-bold text-white m-5 mb-6'>{active === 'drinks' ? <span>Les boissons & alcools</span> : <span></span>}</h1>
          <h1 className='text-4xl font-bold text-white m-5 mb-6'>{active === 'divers' ? <span>Divers</span> : <span></span>}</h1>
        </div>
        <div className=" mx-5 my-4 hidden lg:flex items-center border-2 border-white rounded-xl px-4 duration-300 cursor-pointer">
            <Link to="/avis" className="text-[15px] mx-auto font-bold text-white">Laisser un avis !</Link>
        </div>
         </div>
          {children}
    </div>
  )
}
