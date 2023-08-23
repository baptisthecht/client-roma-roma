import React from "react";
import Layout from "../components/Layout.jsx"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const PizzaPage = () => {
  const [plat, setPlat] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchPlat = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/pizzas/get/${id}`);
        setPlat(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchPlat();
  }, [id]);

  if (plat === null) {
    return <div>Loading...</div>; // Ou tout autre composant de chargement que vous préférez
  }

  console.log(plat);


      return (
        <Layout active={plat.name}>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
                
            </div>
        </Layout>
      );
    }

export default PizzaPage;