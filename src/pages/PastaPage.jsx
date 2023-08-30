import React, { useEffect } from "react";
import axios from 'axios';
import Layout from "../components/Layout.jsx"
import Card from "../components/Card.jsx"

const PastaPage = ({active}) => {

    const [plats, setPlats] = React.useState([])

    useEffect(() => {
        axios.get("http://localhost:8800/api/pastas/getall/")
            .then((response) => {
                setPlats(response.data);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, []); 
             
      if (!plats) return <Layout active={active}></Layout>;
        
      return (
        <Layout active={active}>
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
            {plats.map(plat => (
                <Card key={plat.id} plat={plat}/>
            ))}</div>
        </Layout>
      );
    }

export default PastaPage;