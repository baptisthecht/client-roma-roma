import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';
import { useSignOut } from 'react-auth-kit';
import { useAuthUser } from 'react-auth-kit';
import { useState } from 'react';

export default function AdminPage() {

const auth = useAuthUser();
const signOut = useSignOut();
const navigate = useNavigate();

const logout = () => {
    signOut();
    navigate('/login');
}

function formatPrenomNom(input) {
    var mots = input.split('_');
    var resultat = '';
    for (var i = 0; i < mots.length; i++) {
      var mot = mots[i];
      mot = mot.charAt(0).toUpperCase() + mot.substring(1).toLowerCase();
      resultat += mot;
      if (i < mots.length - 1) {
        resultat += ' ';
      }
    }
  
    return resultat;
  }

const [plats, setPlats] = React.useState([])

    useEffect(() => {
        axios.get("http://localhost:8800/api/pizzas/getall/")
            .then((response) => {
                setPlats(response.data);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            });
    }, []); 

    const [err, setErr] = useState("");

const deleteClickButton = async (id) => {
    try{
        const url = "http://localhost:8800/api/pizzas/delete/" + id;
        await axios.delete(url).then(console.log('Pizza supprimée'));
        window.location.reload(false);
    }catch(err){
      setErr(err.response.data)
      console.log(err);
    }
    
  }

  return (
<div>
    <div className='flex flex-row justify-between gap-5 w-full bg-menu items-center p-5 px-10'>
        <h1 className='text-white font-bold'>Connecté en tant que : {formatPrenomNom(auth().username)}</h1>
        <button className='text-white border-2 font-bold border-white p-2 px-3 rounded-lg' onClick={logout}>Déconnection</button>
    </div>
    <div className='p-10 flex flex-col items-center gap-5'>
        <h1 className='text-[2rem] text-white font-bold'>Page d'administration</h1>
        <h1 className='text-[1.2rem] text-white font-bold'>Ajouter, modifier, ou supprimer une pizza</h1>
        <Link to="/addpizza">
            <div className='border-2 border-white p-3 px-5 mt-2 font-bold text-white rounded-xl'>
            Ajouter une pizza
            </div>
            </Link>
            {
               err ? <h1 className='text-[1rem] text-red border-2 font-bold p-3 rounded-lg'>{err}</h1> : <span></span> 
            } 
            <h1 className='text-[1.2rem] text-white font-bold pt-7'>Liste des pizzas :</h1>
            <div className=' w-[90%] h-1 rounded-2xl flex justify-between items-center font-bold p-5 pt-10 text-white'>
                <div className=' w-[300px]'>Nom</div>
                <div className=' w-[300px]'>Catégorie</div>
                <div className=' w-[300px]'>Prix</div>
                <div className='w-[200px]'>Actions 
            </div> 
        </div>
        {plats.map(plat => (
            <div key={plat.name} className='bg-menu w-[90%] h-20 rounded-2xl flex justify-between flex-col md:flex-row items-center font-bold p-5 text-white'>
                <div className=' w-[300px]'>{plat.name}</div>
                <div className=' w-[300px]'>{plat.category}</div>
                <div className=' w-[300px]'>{plat.price.toFixed(2)} €</div>
                <div className='flex gap-3'> 
                <Link to='/editpizza' state={{ plat: plat }} className=' p-3 rounded-xl '>Modifier</Link>
                    <button onClick={() => deleteClickButton(plat.id)} className='bg-persodark p-3 rounded-xl '>Supprimer</button>
                </div>
            </div>
        ))}
    </div>
</div>
    
  )
}
