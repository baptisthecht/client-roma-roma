import React from "react";
import Layout from "../components/Layout.jsx"

const BoissonsPage = ({active}) => {
             
      return (
        <Layout active={active}>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-white ml-5 mb-2'>Les softs</h1>
                 <div className="gap-5 flex items-center justify-start overflow-x-auto">
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/coca.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Coca Cola</h1>
                                <span className='font-bold text-white'>Classique, Zéro, Cherry</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>1,50 €</h1>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/fuze-tea.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Fuze Tea</h1>
                                <span className='font-bold text-white'>Pêche</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>1,50 €</h1>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/tropico.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Tropico</h1>
                                <span className='font-bold text-white'>L'original, Pomme Fruits Rouges, Tropical</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>4,20 €</h1>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/fanta.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Fanta</h1>
                                <span className='font-bold text-white'>Orange, Citron</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>4,20 €</h1>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/eau.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Eau</h1>
                                <span className='font-bold text-white'>Plate, pétillante</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>1,50 €</h1>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/caprisun.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Capri-sun</h1>
                                <span className='font-bold text-white'>Multifruits, Orange</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>1 €</h1>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-white ml-5 mb-2'>Les alcools</h1>
                 <div className="gap-5 flex items-center justify-start overflow-x-auto">
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/despe.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Bières</h1>
                                <span className='font-bold text-white'>Leffe, Perroni, Moretti, Desperados</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>3 €</h1>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/vin rouge.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Vin rouge</h1>
                                <span className='font-bold text-white'>Bouteille</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>9,60 €</h1>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/vin rosé.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Vin Rosé</h1>
                                <span className='font-bold text-white'>Bouteille</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>9,60 €</h1>
                            </div>
                        </div>
                    </div>
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/lambrusco.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Lambrusco</h1>
                                <span className='font-bold text-white'>Rouge, Rosé, Blanc (pétillant)</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>9,80 €</h1>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className='mb-8'>
                <h1 className='text-3xl font-bold text-white ml-5 mb-2'>Boissons chaudes</h1>
                 <div className="gap-5 flex items-center justify-start overflow-x-auto">
                    <div className='card mx-auto my-4 bg-menu shadow-lg flex-col flex justify-between rounded-3xl w-full min-w-[400px] cursor-pointer p-2 max-w-[600px]'>
                        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/café.png"} alt="pizza" />
                        <div className='flex items-end justify-between'>
                            <div className='m-4'>
                                <h1 className='text-white text-2xl font-bold'>Café</h1>
                                <span className='font-bold text-white'>Expresso</span>
                            </div>
                            <div className='m-4 shrink-0'>
                                <h1 className='text-white text-3xl font-bold'>1 €</h1>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </Layout>
      );
    }

export default BoissonsPage;
