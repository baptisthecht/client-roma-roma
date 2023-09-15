import React, { useEffect } from "react";
import axios from 'axios';
import Layout from "../components/Layout.jsx"
import Card from "../components/Card.jsx"



const CategoryPage = ({active}) => {

    const [catId, setCatId] = React.useState(1)
    const [plats, setPlats] = React.useState([])
    const [type, setType] = React.useState("")
    const [url, setUrl] = React.useState("")

    useEffect(() => {
        switch (active) {
            case "classiques":
                setCatId(1);
                setType('pizza')
                break;
            case "incontournables":
                setCatId(2);
                setType('pizza')
                break;
            case "romaroma":
                setCatId(3);
                setType('pizza')
                break;
            case "pates":
                setType('pates')
                break;
            case "desserts":
                setCatId(5);
                setType('pizza')
                break;
            case "pizzadumoment":
                setCatId(4);
                setType('pizza')
                break;
            default:
                break;
        }
    },[active])


    useEffect(() => {
        if(type === 'pizza'){
            setUrl("https://1api-roma-roma.vercel.app/api/pizzas/getfromcategory/" + catId);
        }else if(type === 'pates'){
            setUrl("https://1api-roma-roma.vercel.app/api/pastas/getall/");
        }

    }, [catId, type])

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                 console.log(response.data); // Vérifiez ici que response.data est un tableau
                setPlats(response.data);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, [url]); 
             
      if (!plats) return <Layout active={active}></Layout>;
      if (!Array.isArray(plats)) return <Layout active={active}></Layout>;
        
      return (
        <Layout active={active}>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
            {plats.map(plat => (
                <Card key={plat.id} plat={plat}/>
            ))}</div>
        </Layout>
      );
    }

export default CategoryPage;
