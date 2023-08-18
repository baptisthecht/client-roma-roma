import React from 'react'

export default function SpecialCard({plat}) {

  return (
    <div className=' bg-gold shadow-xl flex flex-col 2xl:flex-row justify-between rounded-3xl max-w-[1200px] h-auto cursor-pointer overflow-x-auto'>
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
        <div className="w-full max-w-[1300px] min-w-[200px] h-[300px] hidden 2xl:block rounded-2xl "style={{
          backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(218, 172, 80, 1)), url(${process.env.PUBLIC_URL}/pizza-generic.jpeg)`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
        }} ></div>  
        <div className="w-full max-w-[600px] min-w-[200px] h-[300px] block 2xl:hidden rounded-2xl "style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(218, 172, 80, 1)), url(${process.env.PUBLIC_URL}/pizza-generic.jpeg)`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
        }} ></div>

        
    </div>
  )
}
