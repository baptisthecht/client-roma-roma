import React from 'react'
import ImageCard from './ImageCard';

export default function Card({plat}) {

  const [imgPath, setImgPath] = React.useState();
  
  React.useEffect(() => {
    if(plat.category){  // Si catégorie détéctée  -> c'est une pizza
      setImgPath(null)
    }else{              // Si pas de catégorie    -> c'est des pâtes
      switch(plat.name){
        case 'Pâtes Bolognaise':
          setImgPath('img_generator/pates/bolognaise.png')
          break;
        case 'Pâtes 3 fromages':
          setImgPath('img_generator/pates/3F.png')
          break;
        case 'Pâtes Carbonara':
          setImgPath('img_generator/pates/carbonara.png')
          break;
        case 'Pâtes Saumon':
          setImgPath('img_generator/pates/saumon.png')
          break;
        case 'Pâtes Roma Roma au Jambon':
          setImgPath('img_generator/pates/roma_j.png')
          break;
        case 'Pâtes Roma Roma au Poulet':
          setImgPath('img_generator/pates/roma_p.png')
          break;
        case 'Pâtes Poulet Curry':
          setImgPath('img_generator/pates/poulet_curry.png')
        break;
        case 'Pâtes Amatriciana':
          setImgPath('img_generator/pates/amatriciana.png')
        break;
        default:
          break;
      }
    }
    // eslint-disable-next-line
  }, [plat.id]);

  
  if(plat.category){
    return (
      <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
          <ImageCard plat={plat}/>
            <div className='flex items-end justify-between'>
              <div className='m-4'>
                  <h1 className='text-white text-2xl font-bold'>{plat.name}</h1>
                  { plat.base === 'Sans' ? <span></span> : <span className='font-bold text-white'>Base {plat.base.toLowerCase()}</span>}
                  {plat.ingredients.map(ingredient => (
                  <span className="text-white font-bold" key={ingredient}>, {ingredient.toLowerCase()}</span>
                  ))}
              </div>
              <div className='m-4 shrink-0'>
                  <h1 className='text-white text-3xl font-bold'>{plat.price.toFixed(2)} €</h1>
              </div>
          </div>
          
      </div>
    )
  }else{
    return (
      <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
          <ImageCard plat ={plat} path={imgPath}/>
            <div className='flex items-end justify-between'>
              <div className='m-4'>
                  <h1 className='text-white text-2xl font-bold'>{plat.name}</h1>
                  { plat.base === 'Sans' ? <span></span> : <span className='font-bold text-white'>Pâtes, {plat.base.toLowerCase()}</span>}
                  {plat.ingredients.map(ingredient => (
                  <span className="text-white font-bold" key={ingredient}>, {ingredient.toLowerCase()}</span>
                  ))}
              </div>
              <div className='m-4 shrink-0'>
                  <h1 className='text-white text-3xl font-bold'>{plat.price.toFixed(2)} €</h1>
              </div>
          </div>
          
      </div>
    )
  }
  
}
