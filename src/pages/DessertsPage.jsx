import React from "react";
import Layout from "../components/Layout.jsx"

const DessertsPage = ({active}) => {
             
      return (
        <Layout active={active}>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
            <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
            <div className='relative '>
            <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl absolute top-0 left-0" src={process.env.PUBLIC_URL + 'img_generator/bases/nutella.png'} alt="pizza" />
              <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/base.png"} alt="pizza" />
              <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl absolute top-0 left-0" src={process.env.PUBLIC_URL + 'img_generator/autres/sucre_glace.png'} alt="pizza" />
         
        </div>
            <div className='flex items-end justify-between'>
              <div className='m-4'>
                  <h1 className='text-white text-2xl font-bold'>Pizza Nutella</h1>
                  <span className='font-bold text-white'>Nutella, sucre glace</span>
              </div>
              <div className='m-4 shrink-0'>
                  <h1 className='text-white text-3xl font-bold'>6 €</h1>
              </div>
          </div>
          
      </div>
      <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
      <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/tiramisu.png"} alt="pizza" />
            <div className='flex items-end justify-between'>
            <div className='m-4'>
                  <h1 className='text-white text-2xl font-bold'>Tiramisu</h1>
                  <span className='font-bold text-white'>Fait maison !</span>
              </div>
              <div className='m-4 shrink-0'>
                  <h1 className='text-white text-3xl font-bold'>4,20 €</h1>
              </div>
          </div>
          
      </div>
            </div>
        </Layout>
      );
    }

export default DessertsPage;