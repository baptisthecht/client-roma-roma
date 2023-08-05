import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({plat}) {

  const [link, setLink] = React.useState('')
  React.useEffect(() => {
    if (plat.category === "Les classiques" || plat.category === "Les incontournables" || plat.category === "Les Roma Roma" || plat.category === "Pizza du moment" || plat.category === "Dessert") {
      setLink('/pizza/' + plat.id);
    } else if (!plat.category) {
      setLink('/pates/' + plat.id);
    }
  }, [plat.category, plat.id]);

  return (
    <Link to={link} className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] h-auto cursor-pointer p-2 max-w-[600px]'>
        <img className="w-auto h-[220px] object-cover mx-[15px] my-[15px] rounded-2xl" src={process.env.PUBLIC_URL + '/pizza-generic.jpeg'} alt="pizza" />
        <div className='flex items-end justify-between'>
            <div className='m-4'>
                <h1 className='text-white text-2xl font-bold'>{plat.name}</h1>
                { plat.base === 'Sans' ? <span></span> : <span className='font-bold text-white'>Base {plat.base.toLowerCase()}</span>}
                {plat.ingredients.map(ingredient => (
                <span className="text-white font-bold">, {ingredient.toLowerCase()}</span>
                ))}
            </div>
            <div className='m-4 shrink-0'>
                <h1 className='text-white text-3xl font-bold'>{plat.price.toFixed(2)} €</h1>
            </div>
        </div>
        
    </Link>
  )
}
