import React from 'react'
import Layout from '../components/Layout'

export default function OrderNow() {
  return (
    <Layout active="Commandez maintenant !">
        <h1 className='font-bold text-white text-center text-[2rem] my-3'>Dégustez votre pizza :</h1>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 py-5">
            <div className='shadow-menu shadow-xl h-auto w-full p-8 flex flex-col gap-5 rounded-xl bg-menu items-center'>
                <h1 className='text-white font-bold text-[1.7rem] text-center'>Sur place</h1>
                <img width="70" height="70" src={process.env.PUBLIC_URL + 'icons8-table-64.png'} alt="motorcycle"/>
                <p className='text-white font-bold text-lg text-center'>Dégustez votre pizza en salle ou en terrasse.</p>
            </div>
            <div className='shadow-menu shadow-xl h-auto w-full p-8 flex flex-col gap-5 rounded-xl bg-menu items-center'>
                <h1 className='text-white font-bold text-[1.7rem] text-center'>À emporter</h1>
                <img width="70" height="70" src={process.env.PUBLIC_URL + 'icons8-sac-de-courses-90.png'} alt="motorcycle"/>
                <p className='text-white font-bold text-lg text-center'>Commandez-les, et passez les récuperer.</p>
            </div>
            <div className='shadow-menu shadow-xl h-auto w-full p-8 flex flex-col gap-5 rounded-xl bg-menu items-center'>
                <h1 className='text-white font-bold text-[1.7rem] text-center'>En livraison</h1>
                <img width="70" height="70" src={process.env.PUBLIC_URL + 'icons8-motorcycle-90.png'} alt="motorcycle"/>
                <p className='text-white font-bold text-lg text-center'>Nous livrons vos pizzas sans minimum de commmande.</p>
            </div>
        </div>
        <h1 className='font-bold text-white text-center text-[2rem] my-3'>Commandez :</h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 py-5">
            <div className='shadow-menu shadow-xl h-auto w-full p-8 flex flex-col gap-5 rounded-xl bg-menu items-center'>
                <h1 className='text-white font-bold text-[1.7rem] text-center'>Par téléphone</h1>
                <img width="70" height="70" src={process.env.PUBLIC_URL + 'icons8-téléphone-100.png'} alt="motorcycle"/>
                <p className='text-white font-bold text-lg text-center'>Commandez par téléphone au <a href="tel:0320388398" className='underline'>03 20 38 83 98</a></p>
            </div>
            <div className='shadow-menu shadow-xl h-auto w-full p-8 flex flex-col gap-5 rounded-xl bg-menu items-center'>
                <h1 className='text-white font-bold text-[1.7rem] text-center'>Au comptoir</h1>
                <img width="70" height="70" src={process.env.PUBLIC_URL + 'icons8-marqueur-64.png'} alt="motorcycle"/>
                <p className='text-white font-bold text-lg text-center'>Présentez-vous à la pizzeria et commandez.</p>
            </div>
        </div>
        <h1 className='font-bold text-white text-center text-[2rem] my-3'>Nous trouver :</h1>
        <div className="grid grid-cols-1 gap-5 py-5">
            <div className='shadow-menu shadow-xl h-auto w-full p-8 flex flex-col gap-5 rounded-xl bg-menu items-center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.687437504879!2d3.230480762008661!3d50.707184552440324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3266d7b5a9711%3A0x4b7b4406a0abe529!2sRoma%20Roma%20Pizzeria!5e0!3m2!1sfr!2sbe!4v1692790021371!5m2!1sfr!2sbe" className='w-full h-[400px] rounded-lg' title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </Layout>
  )
}
