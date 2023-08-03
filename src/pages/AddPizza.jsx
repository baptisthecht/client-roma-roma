import { useState } from "react";
import axios from "axios";

const AddPizza = () => {
  const [inputs, setInputs] = useState({
    name: "",
    base_id: 0,
    chausson: 0,
    price: 0,
    available: 0,
  });

  const [err, setErr] = useState("");
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault()
    try{
      await axios.post("http://localhost:8800/api/pizzas/add", inputs).then(console.log('Pizza ajoutée'));
    }catch(err){
      setErr(err.response.data)
    }
  }

console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Ajouter une pizza</h1>
        </div>
        <div>
          <form>

            <input
              type="text"
              placeholder="name"
              name="name"
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="base_id"
              name="base_id"
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="chausson"
              name="chausson"
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="price"
              name="price"
              onChange={handleChange}
            />

            <input
              type="number"
              placeholder="available"
              name="available"
              onChange={handleChange}
            />
            
            <button onClick={handleClick}>Ajouter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPizza;