import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SpecialCard from '../components/SpecialCard'
import Card from '../components/Card'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import axios from 'axios'

export default function Home({active}) {

    const [allPizzas, setAllPizzas] = useState([])
    const [pizzasClassiques, setPizzasClassiques] = useState([])
    const [pizzasDuMoment, setPizzasDuMoment] = useState([])
    const [pizzasIncontournables, setPizzasIncontournables] = useState([])
    const [pizzasRomaRoma, setPizzasRomaRoma] = useState([])
    const [allPastas, setAllPastas] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8800/api/pizzas/getall/');
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
        <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gold ml-5 mb-2'>Pizza du moment <i className="bi ml-2 bi-emoji-heart-eyes text-gold "></i></h1>
            <div className="p-5">
                {pizzasDuMoment.map(plat => (
                <SpecialCard plat={plat}/>
                ))}
            </div>
        </div>
        <div className='mb-8'>
            <h1 className='text-3xl font-bold text-white ml-5 mb-2'>Les classiques</h1>
            <div className="gap-5 flex items-center justify-start overflow-x-auto max-w-[1200px]">
            {pizzasClassiques.map((plat) => (
                <div><Card plat={plat} /></div>
            ))}
            </div>  
        </div>
        <div className='mb-8'>
            <h1 className='text-3xl font-bold text-white ml-5 mb-2'>Les incontournables</h1>
            <div className="gap-5 flex items-center justify-start overflow-x-auto max-w-[1200px]">
            {pizzasIncontournables.map((plat) => (
                <div><Card plat={plat} /></div>
            ))}
            </div>  
        </div>
        <div className='mb-8'>
            <h1 className='text-3xl font-bold text-white ml-5 mb-2'>Les Roma Roma</h1>
            <div className="gap-5 flex items-center justify-start overflow-x-auto max-w-[1200px]">
            {pizzasRomaRoma.map((plat) => (
                <div><Card plat={plat} /></div>
            ))}
            </div>  
        </div>
          
    </Layout>

  )
}
