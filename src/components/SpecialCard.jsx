import React from 'react'
import ImageCard from './ImageCard.jsx'

export default function SpecialCard({plat}) {

  return (
    <div className=' bg-gold shadow-2xl flex flex-col lg:flex-row justify-between rounded-3xl mx-auto h-auto cursor-pointer overflow-x-auto'>
        <div className='flex flex-col my-2 max-w-[700px] justify-between'>
            <div className='m-6'>
                <h1 className='text-white text-3xl mb-2  font-bold'>{plat.name}</h1>
                { plat.base === 'Sans' ? <span></span> : <span className=' text-lg font-bold text-white'>Base {plat.base.toLowerCase()}</span>}
                {plat.ingredients.map(ingredient => (
                <span className="text-white text-lg font-bold">, {ingredient.toLowerCase()}</span>
                ))}
            </div>
            <div className='m-6 shrink-0'>
                <h1 className='text-white text-4xl font-bold'>{plat.price.toFixed(2)} €</h1>
            </div>
        </div>
        <div className="max-w-[1300px] rounded-2xl"style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(218, 172, 80, 1))`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} ><ImageCard plat={plat}/></div>  

        
    </div>
  )
}
