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
        setPageName('Les pates')
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
        setPageName('Bienvenue chez Roma Roma !')
        break;
      default: 
        setPageName(active)
        break;
    }

  }, [active])

  return (
    <div className='p-2 ml-[-20px] lg:m-4 flex-row'>
      <div className='block lg:flex justify-between p-5'>
        <div>
          <h1 className='text-4xl font-bold text-white m-5 mb-6'>{pageName}</h1>

        </div>
        <div className=" mx-5 my-4 hidden lg:flex items-center border-2 border-white rounded-xl px-4 duration-300 cursor-pointer">
            <Link to="/avis" className="text-[15px] mx-auto font-bold text-white">Laisser un avis !</Link>
        </div>
      </div>
      <div className='p-5'>
        {children}
      </div>   
    </div>
  )
}
