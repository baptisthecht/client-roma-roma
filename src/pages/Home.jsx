import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SpecialCard from '../components/SpecialCard'
import Card from '../components/Card'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home({active}) {
// eslint-disable-next-line
    const [allPizzas, setAllPizzas] = useState([])
    const [pizzasClassiques, setPizzasClassiques] = useState([])
    const [pizzasDuMoment, setPizzasDuMoment] = useState([])
    const [pizzasIncontournables, setPizzasIncontournables] = useState([])
    const [pizzasRomaRoma, setPizzasRomaRoma] = useState([])
    // eslint-disable-next-line
    const [allPastas, setAllPastas] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://1api-roma-roma.vercel.app/api/pizzas/getall/');
                const pizzas = response.data;

                const classiques = pizzas.filter(pizza => pizza.category === "Les classiques");
                setPizzasClassiques(classiques);

                const incontournables = pizzas.filter(pizza => pizza.category === "Les incontournables");
                setPizzasIncontournables(incontournables);

                const romaroma = pizzas.filter(pizza => pizza.category === "Les Roma Roma");
                setPizzasRomaRoma(romaroma);

                const pizzadumoment = pizzas.filter(pizza => pizza.category === "Pizza du moment");
                setPizzasDuMoment(pizzadumoment);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

  

  return (
    <Layout active={active}>
        <div className='mb-8' id="pizzadumoment">
            <h1 className='text-3xl font-bold text-white ml-5 mb-2'>Infos pratiques <i className="bi ml-2 bi-info-circle text-white "></i></h1>
            <div className="p-3 pt-5">
                <Link to="/order" className='card bg-bordeaux shadow-2xl flex flex-col lg:flex-row justify-between rounded-3xl h-auto cursor-pointer p-2'>
                    <div className='grid xl:grid-cols-3 grid-cols-1 w-full'>
                    <div className='m-2 p-10 bg-darkbordeaux rounded-2xl flex flex-col justify-center items-center gap-8'>
                        <img width="70" height="70" src={process.env.PUBLIC_URL + 'icons8-téléphone-100.png'} alt="motorcycle"/>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-white text-xl font-bold'>Commande par téléphone</h1>
                                <h1 className='text-white text-xl font-bold'>03 20 38 83 98</h1>
                            </div>
                        </div>

                        <div className='m-2 p-10 bg-darkbordeaux rounded-2xl flex flex-col justify-center items-center gap-8'>
                        <img width="70" height="70" src={process.env.PUBLIC_URL + 'icons8-motorcycle-90.png'} alt="motorcycle"/>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-white text-xl font-bold'>Livraison à domicile</h1>
                                <h1 className='text-white text-xl font-bold'>*Supplément de 2€</h1>
                            </div>
                        </div>
                        <div className='m-2 p-10 bg-darkbordeaux rounded-2xl flex flex-col justify-center items-center gap-8'>
                            <img width="70" height="70" src={process.env.PUBLIC_URL + 'icons8-marqueur-64.png'} alt="motorcycle"/>
                            <div className='flex flex-col items-center'>
                                <h1 className='text-white text-xl font-bold'>109 Rue de la Baillerie</h1>
                                <h1 className='text-white text-xl font-bold'>59150 Wattrelos</h1>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className='mb-8' id="pizzadumoment">
            <h1 className='text-3xl font-bold text-gold ml-5 mb-2'>Pizza du moment <i className="bi ml-2 bi-emoji-heart-eyes text-gold "></i></h1>
            <div className="p-3 pt-5">
                {pizzasDuMoment.map(plat => (
                <SpecialCard plat={plat}/>
                ))}
            </div>
        </div>
        <div className='mb-8'>
            <Link to="/classiques" className='text-3xl font-bold text-white ml-5 mb-2'>Les classiques</Link>
            <div className=''>
            <div className="gap-5 flex items-center justify-start overflow-x-auto">
            {pizzasClassiques.map((plat) => (
                <div><Card plat={plat} /></div>
            ))}
            </div>  
            </div>
           
        </div>
        <div className='mb-8'>
        <Link to="/incontournables" className='text-3xl font-bold text-white ml-5 mb-2'>Les incontournables</Link>
            <div className=''>
            <div className="gap-5 flex items-center justify-start overflow-x-auto">
            {pizzasIncontournables.map((plat) => (
                <div><Card plat={plat} /></div>
            ))}
            </div>  
            </div>  
        </div>
        <div className='mb-8'>
        <Link to="/romaroma" className='text-3xl font-bold text-white ml-5 mb-2'>Les Roma Roma</Link>
            <div className=''>
            <div className="gap-5 flex items-center justify-start overflow-x-auto">
            {pizzasRomaRoma.map((plat) => (
                <div><Card plat={plat} /></div>
            ))}
            </div>  
            </div>  
        </div>
          
    </Layout>

  )
}
