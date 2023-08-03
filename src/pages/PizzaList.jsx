import React, { useEffect } from "react";
import axios from 'axios';
import Layout from "../components/Layout.jsx"



const PizzaList = ({active}) => {

    const [catId, setCatId] = React.useState(1);
    const [pizzas, setPizzas] = React.useState([]);

    useEffect(() => {
        switch (active) {
            case "classiques":
                setCatId(1);
                break;
            case "incontournables":
                setCatId(2);
                break;
            case "romaroma":
                setCatId(3);
                break;
            default:
                setCatId(1);
                break;
        }
    }, [active]); // Ajouter active en tant que dépendance

    useEffect(() => {
        const baseURL = "http://localhost:8800/api/pizzas/getfromcategory/" + catId;
        axios.get(baseURL)
            .then((response) => {
                setPizzas(response.data);
            })
            .catch(error => {
                console.error("Error fetching pizzas:", error);
            });
    }, [catId]); // Ajouter catId en tant que dépendance

    

   
             
      if (!pizzas) return null;

      return (
        <Layout active={active}>
            <div>
            {pizzas.map(pizza => (
                <div className="m-5 text-white" key={pizza.id}>
                    <h1 className="text-3xl font-bold text-white underline">{pizza.name}</h1>
                    <p>{pizza.available}</p>
                    <p>Base : {pizza.base}</p>
                    {pizza.ingredients.map(ingredient => (
                        <span>{ingredient}, </span>
                    ))}
                </div>
            ))}
            </div>
        </Layout>
      );
    }

export default PizzaList;