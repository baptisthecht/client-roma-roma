import { useState } from "react";
import React from "react";
import axios from "axios";
import FormInputComponent from "../components/FormInputComponent";
import CheckBoxCategoryComponent from "../components/CheckBoxCategoryComponent";
import FormSelectComponent from "../components/FormSelectComponent";
import QuestionInputComponent from "../components/QuestionInputComponent";
import { useAuthUser } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddPizza = () => {
 
const signOut = useSignOut();
const navigate = useNavigate();

const logout = () => {
    signOut();
    navigate('/login');
}
const [inputs, setInputs] = useState({
  name: "",
  base_id: 1,
  chausson: 0,
  price: 0,
  available: 0,
  category_id: 1,
  ingredients: [

  ]
});

const [err, setErr] = useState("");

const handleChange = (e) => {
  const { name, value, type } = e.target;
  const newValue = type === "checkbox" ? Number(value) : value;
  setInputs((prev) => ({ ...prev, [name]: newValue }));
};

const auth = useAuthUser();

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

const handleIngredientClick = (ingredient) => {
  setInputs((prev) => {
    if (prev.ingredients.includes(ingredient)) {
      return {
        ...prev,
        ingredients: prev.ingredients.filter((item) => item !== ingredient)
      };
    } else {
      return {
        ...prev,
        ingredients: [...prev.ingredients, ingredient]
      };
    }
  });
};

const handleClick = async (e) => {
  e.preventDefault()
  console.warn(inputs)
  try{
    await axios.post("https://1api-roma-roma.vercel.app/api/pizzas/add", inputs).then(console.log('Pizza ajoutée'));
    navigate('/admin')
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
    <div className='flex flex-row justify-start gap-5 w-full items-center p-5 px-10'>
        <Link to="/admin" className='text-white border-2 font-bold border-white p-2 px-5 rounded-lg'>Retour</Link>
        <div>
          {
            err ? <span>{err}</span> : <span></span>
          }
        </div>
    </div>
    <div>
       <div className="register">
      <div className="card m-3">
        <div>
          <form className="flex flex-col gap-5 w-full max-w-[800px] min-w-[300px] m-auto">

              <FormInputComponent
                label="Nom de la pizza"
                type="text"
                placeholder="Bolognaise..."
                name="name"
                onChange={handleChange}
                className="p-3 rounded-lg"
                id="name"
                value={inputs.name}
              />
          
              <FormSelectComponent
                label="Base"
                name="base_id"
                onChange={handleChange}
                className="p-3 rounded-lg"
                options={['Tomate', "Crème", "Bolognaise", "Sans"]}
                id="base_id"
                value={inputs.base_id}
              />

              <FormSelectComponent
                label="Catégorie"
                name="category_id"
                onChange={handleChange}
                className="p-3 rounded-lg"
                options={['Les classiques', "Les incontournables", "Les Roma Roma", "Pizza du moment"]}
                id="category_id"
                value={inputs.category_id}
              />

              <FormInputComponent
              label="Prix"
              type="number"
              placeholder="10,90€"
              name="price"
                onChange={handleChange}
                className="p-3 rounded-lg"
                id="price"
                value={inputs.price}
              />

              <QuestionInputComponent
                name="chausson"
                id="chausson"
                onChange={handleChange}
                question="La pizza est en chausson"
                inputs={inputs}
              />


              <QuestionInputComponent 
              name="available"
              id="available"
              onChange={handleChange}
              question="La pizza est disponible actuellement"
              inputs={inputs} 

              />

            <p className="text-white font-bold">Composition :</p>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="Viandes" onChange={handleIngredientClick} elements={['Poulet', 'Chorizo', 'Jambon', 'Lardons', 'Merguez', 'Steak']}/>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="Légumes" onChange={handleIngredientClick} elements={['Poivrons', 'Oignons', 'Champignons', 'Olives', 'Piments', 'Artichauts']}/>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="Poissons" onChange={handleIngredientClick} elements={['Saumon', 'Thon', 'Anchois', 'Câpres']}/>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="Fromages" onChange={handleIngredientClick} elements={['Mozzarella', 'Chèvre', 'Reblochon']}/>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="" onChange={handleIngredientClick} elements={['Gorgonzola', 'Gruyère', 'Parmesan','Cheddar']}/>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="Féculents" onChange={handleIngredientClick} elements={['Pommes de terre', 'Potatoes']}/>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="Sauces" onChange={handleIngredientClick} elements={['Sauce Curry', 'Sauce Burger', 'Sauce Cheddar']}/>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="" onChange={handleIngredientClick} elements={['Sauce BBQ', 'Sauce Samouraï', 'Sauce Poivre']}/>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="Extras" onChange={handleIngredientClick} elements={['Jambon de parme', 'Roquette', 'Miel', 'Noix', 'Ail']}/>
            <CheckBoxCategoryComponent ingredients={inputs.ingredients} inputs={inputs} name="" onChange={handleIngredientClick} elements={['Oignons frits', 'Cornichons', 'Origan', 'Oeuf', 'Ananas']}/>
            <button className="text-white font-bold bg-gold p-3 py-5 rounded-lg mt-6 mb-10" onClick={handleClick}>Ajouter</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default AddPizza;
