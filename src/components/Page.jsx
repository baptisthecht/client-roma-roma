import React from 'react'
import { Link } from 'react-router-dom'

export default function Page({active, children}) {

  const [pageName, setPageName] = React.useState('')

  React.useEffect(() => {

    switch(active) {
      case 'classiques':
        setPageName('Les classiques')
        break;
      case 'incontournables':
        setPageName('Les incontournables')
        break;
      case 'romaroma':
        setPageName('Les Roma Roma')
        break;
      case 'pates':
        setPageName('Les pâtes')
        break;
      case 'desserts':
        setPageName('Les desserts')
        break;
      case 'drinks':
        setPageName('Les boissons')
        break;
      case 'divers':
        setPageName('Divers')
        break;
      case 'home':
        setPageName('Bienvenue chez Roma Roma Pizzeria !')
        break;
      default: 
        setPageName(active)
        break;
    }

  }, [active])

  return (
    <div className='flex-row lg:mr-5'>
      <div className='flex lg:flex-row flex-col items-center justify-between p-5'>
          <h1 className='text-4xl font-bold text-white m-5 mb-6'>{pageName}</h1>
          <div className="h-full flex items-center border-2 hover:bg-buttonhover text-white border-white rounded-xl px-4 duration-300 cursor-pointer">
              <Link to="/order" className="text-[15px] mx-auto font-bold p-4">Commander !</Link>
          </div>
      </div>
      <div className='p-5'>
        {children}
      </div>   
    </div>
  )
}
