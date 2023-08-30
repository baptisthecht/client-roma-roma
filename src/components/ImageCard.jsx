import React from 'react'

export default function ImageCard({plat, path}) {

  const [basePath, setBasePath] = React.useState('')

  React.useEffect(() => {
    switch(plat.base){
      case 'Tomate':
        setBasePath("/img_generator/bases/tomate.png")
        break;
      case 'Crème':
        setBasePath("/img_generator/bases/creme.png")
        break;
      case 'Bolognaise':
        setBasePath("/img_generator/bases/bolognaise.png")
        break;
      default:
        setBasePath(null)
        break;
  
    }
  }, [plat])
  console.log(plat)

  const paths = {
    "artichauts": "/img_generator/crudites/artichaut.png",
    "nutella": "/img_generator/bases/nutella.png",
    "champignons": "/img_generator/crudites/champignons.png",
    "cornichons": "/img_generator/crudites/cornichons.png",
    "oignons": "/img_generator/crudites/oignons.png",
    "poivrons": "/img_generator/crudites/poivrons.png",
    "piments": "/img_generator/crudites/piments.png",
    "olives": "/img_generator/crudites/olives.png",
    "poulet": "/img_generator/viandes/poulet.png",
    "chorizo": "/img_generator/viandes/chorizo.png",
    "jambon de parme": "/img_generator/viandes/j_parme.png",
    "jambon": "/img_generator/viandes/jambon.png",
    "lardons": "/img_generator/viandes/lardons.png",
    "merguez": "/img_generator/viandes/merguez.png",
    "steak": "/img_generator/viandes/steak.png",
    "cheddar": "/img_generator/fromages/cheddar.png",
    "chevre": "/img_generator/fromages/chevre.png",
    "chèvre": "/img_generator/fromages/chevre.png",
    "gorgonzola": "/img_generator/fromages/gorgonzola.png",
    "gruyere": "/img_generator/fromages/gruyère.png",
    "mozzarella": "/img_generator/fromages/mozzarella.png",
    "parmesan": "/img_generator/fromages/parmesan.png",
    "reblochon": "/img_generator/fromages/reblochon.png",
    "anchois": "/img_generator/poissons/anchois.png",
    "saumon": "/img_generator/poissons/saumon.png",
    "thon": "/img_generator/poissons/thon.png",
    "potatoes": "/img_generator/autres/potatoes.png",
    "ananas": "/img_generator/autres/ananas.png",
    "noix": "/img_generator/autres/noix.png",
    "pommes de terre": "/img_generator/autres/pdt.png",
    "roquette": "/img_generator/autres/roquette.png",
    "sucre glace": "/img_generator/autres/sucre_glace.png",
    "oeuf": "/img_generator/autres/oeuf.png",
    "oignons fris": "/img_generator/autres/oignons_fris.png",
    "origan": "/img_generator/autres/origan.png",
    "capres": "/img_generator/autres/capres.png",
    "câpres": "/img_generator/autres/capres.png",
    "sauce bbq": "/img_generator/sauces/bbq.png",
    "sauce curry": "/img_generator/sauces/curry.png",
    "sauce samouraï": "/img_generator/sauces/samourai.png",
    "sauce burger": "/img_generator/sauces/samourai.png",
    "sauce poivre": "/img_generator/sauces/poivre.png",
    "miel": "/img_generator/sauces/miel.png",
    "ail": "/img_generator/fromages/mozzarella.png",
    "fruits de mer": "/img_generator/poissons/saumon.png",
    "scampis": "/img_generator/poissons/saumon.png"
  };
 
  

  // Récupérer les chemins d'accès en fonction des ingrédients de la pizza

    const ingredientsPaths = plat.ingredients.map(ingredient => paths[ingredient.toLowerCase()])
 
 
console.log(ingredientsPaths)
  if(path){
    return (
      <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + path} alt="pizza" />
    
    )
  }

  if(!path){ 
     // eslint-disable-next-line
    if(plat.chausson == 1){
      return(
        <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/calzone.png"} alt="pizza" />
      )
      // eslint-disable-next-line
    }else if(plat.chausson == 0) {
      return (
        <div className='relative'>
          {
            basePath 
            ? 
            <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl absolute top-0 left-0" src={process.env.PUBLIC_URL + basePath} alt="pizza" />
             :
            <></>
          }
              <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl" src={process.env.PUBLIC_URL + "img_generator/base.png"} alt="pizza" />
          
               {
            ingredientsPaths.map(path => (
              <img className="w-full max-h-[400px] h-auto object-cover rounded-2xl absolute top-0 left-0" src={process.env.PUBLIC_URL + path} alt="pizza" />
            ))
          }
         
        </div>
           
      )
    }
  }
  
  
}
