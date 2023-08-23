import { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import FormInputComponent from "../components/FormInputComponent";
import CheckBoxCategoryComponent from "../components/CheckBoxCategoryComponent";
import FormSelectComponent from "../components/FormSelectComponent";
import QuestionInputComponent from "../components/QuestionInputComponent";

const AddPizza = () => {
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
      await axios.post("http://localhost:8800/api/pizzas/add", inputs).then(console.log('Pizza ajoutée'));
    }catch(err){
      setErr(err.response.data)
      console.log(err);
    }
    
  }


 
  return (

    <Layout active="Ajouter une pizza">
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
              />
          
              <FormSelectComponent
                label="Base"
                name="base_id"
                onChange={handleChange}
                className="p-3 rounded-lg"
                options={['Tomate', "Crème", "Bolognaise", "Sans"]}
                id="base_id"
              />

              <FormSelectComponent
                label="Catégorie"
                name="category_id"
                onChange={handleChange}
                className="p-3 rounded-lg"
                options={['Les classiques', "Les incontournables", "Les Roma Roma", "Pizza du moment"]}
                id="category_id"
              />

              <FormInputComponent
              label="Prix"
              type="number"
              placeholder="10,90€"
              name="price"
                onChange={handleChange}
                className="p-3 rounded-lg"
                id="price"
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
            <CheckBoxCategoryComponent inputs={inputs} name="Viandes" onChange={handleIngredientClick} elements={['Poulet', 'Chorizo', 'Jambon', 'Lardons', 'Merguez', 'Steak']}/>
            <CheckBoxCategoryComponent inputs={inputs} name="Légumes" onChange={handleIngredientClick} elements={['Poivrons', 'Oignons', 'Champignons', 'Olives', 'Piments', 'Artichauts']}/>
            <CheckBoxCategoryComponent inputs={inputs} name="Poissons" onChange={handleIngredientClick} elements={['Saumon', 'Thon', 'Anchois', 'Câpres']}/>
            <CheckBoxCategoryComponent inputs={inputs} name="Fromages" onChange={handleIngredientClick} elements={['Mozzarella', 'Chèvre', 'Reblochon']}/>
            <CheckBoxCategoryComponent inputs={inputs} name="" onChange={handleIngredientClick} elements={['Gorgonzola', 'Gruyère', 'Parmesan','Cheddar']}/>
            <CheckBoxCategoryComponent inputs={inputs} name="Féculents" onChange={handleIngredientClick} elements={['Pommes de terre', 'Potatoes']}/>
            <CheckBoxCategoryComponent inputs={inputs} name="Sauces" onChange={handleIngredientClick} elements={['Sauce Curry', 'Sauce Burger', 'Sauce Cheddar']}/>
            <CheckBoxCategoryComponent inputs={inputs} name="" onChange={handleIngredientClick} elements={['Sauce BBQ', 'Sauce Samouraï', 'Sauce Poivre']}/>
            <CheckBoxCategoryComponent inputs={inputs} name="Extras" onChange={handleIngredientClick} elements={['Jambon de parme', 'Roquette', 'Miel', 'Noix', 'Ail']}/>
            <CheckBoxCategoryComponent inputs={inputs} name="" onChange={handleIngredientClick} elements={['Oignons frits', 'Cornichons', 'Origan', 'Oeuf', 'Ananas']}/>
            <button className="text-white font-bold bg-gold p-3 py-5 rounded-lg mt-6" onClick={handleClick}>Ajouter</button>
          </form>
        </div>
      </div>
    </div>
    </Layout>

   
  );
};

export default AddPizza;