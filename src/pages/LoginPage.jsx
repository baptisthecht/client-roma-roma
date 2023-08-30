import { useState } from "react";
import axios from "axios";
import FormInputComponent from "../components/FormInputComponent";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    
  const [err, setErr] = useState("");

  const signIn = useSignIn();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === "checkbox" ? Number(value) : value;
    setInputs((prev) => ({ ...prev, [name]: newValue }));
  };


  const handleClick = async (e) => {
    e.preventDefault()
    console.warn(inputs)
    try{
        const response = await axios.post("http://localhost:8800/api/auth/login", inputs);
        signIn({
            token: response.data.token,
            expiresIn: 3600*24,
            tokenType: "Bearer",
            authState: { username: inputs.username }
        })
        navigate('/admin');
    }catch(err){
      setErr(err.response.data)
    }
    
  }


 
  return (

    <div>
       <div className="register">
      <div className="card m-3">
        <div>
          <form className="flex flex-col gap-5 w-full max-w-[800px] min-w-[300px] m-auto">
            <h1 className="text-center text-[2rem] font-bold text-white py-5">Connexion</h1>
            {
                err ? <div className="border-2 border-red p-3 px-5 rounded-lg text-red font-bold">{err}</div> : <div></div>
            }
            
              <FormInputComponent
                label="Nom d'utilisateur"
                type="text"
                placeholder=""
                name="username"
                onChange={handleChange}
                className="p-3 rounded-lg"
                id="username"
              />
          
          <FormInputComponent
                label="Mot de passe"
                type="password"
                placeholder=""
                name="password"
                onChange={handleChange}
                className="p-3 rounded-lg"
                id="password"
              />
            <button className="text-white font-bold bg-buttonhover shadow-lg p-3 py-5 rounded-lg mt-6" onClick={handleClick}>Connexion</button>
          </form>
        </div>
      </div>
    </div>
    </div>

   
  );
};

export default LoginPage;