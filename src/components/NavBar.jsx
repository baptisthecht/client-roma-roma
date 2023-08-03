import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({active}) => {

    const Openbar = () => {
      }


    return (
        <div>
            <span className="absolute text-persogray text-4xl top-5 left-4 cursor-pointer" onClick={Openbar()}>
                <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
            p-2 w-[300px] overflow-y-auto text-center bg-menu m-4 rounded-3xl flex shadow h-auto ">
                <div className="text-persogray text-xl flex flex-col justify-between">
                    <div>
                        <div className="p-2.5 mb-7 flex items-center rounded-md ">
                            <h1 className="text-[25px] text-left ml-7 mt-7 text-white font-bold">Roma Roma Pizzeria<span className="text-red">.</span></h1>
                            <i className="bi bi-x ml-20 cursor-pointer lg:hidden" onClick={Openbar()}></i>
                        </div>
                        <div className="mt-6">
                            <div className=" leading-7 text-left text-sm mt-2 w-4/5 mx-auto">
                                <h1 className="cursor-pointer p-2 text-[12px] rounded-md mt-1">Pizzas</h1>
                            </div>
                            <div className="p-2.5 mx-5 flex items-center border-2 border-gold rounded-xl px-4 duration-300 cursor-pointer  hover:bg-darkgold">
                                <i className="bi bi-emoji-heart-eyes text-gold "></i>
                                <Link to="/pizzadumoment" className="text-[15px] ml-5 text-gold">Pizza du moment !</Link>
                                
                            </div>
                            {active === "classiques" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-palette text-light"></i>
                                    <Link to="/classiques" className="text-[15px] ml-5 text-light ">Les classiques</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-palette"></i>
                                    <Link to="/classiques" className="text-[15px] ml-5 text-gray-200">Les classiques</Link>
                                </div>
                            }

                            {active === "incontournables" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-heart text-light"></i>
                                    <Link to="/incontournables" className="text-[15px] ml-5 text-light ">Les incontournables</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-heart"></i>
                                    <Link to="/incontournables" className="text-[15px] ml-5 text-gray-200">Les incontournables</Link>
                                </div>
                            }
                            
                            {active === "romaroma" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-house text-light"></i>
                                    <Link to="/romaroma" className="text-[15px] ml-5 text-light ">Les Roma Roma</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-house"></i>
                                    <Link to="/romaroma" className="text-[15px] ml-5 text-gray-200">Les Roma Roma</Link>
                                </div>
                            }
                            

                            
                            
                        </div>
                        <div className="mt-6">
                            <div className=" leading-7 text-left text-sm mt-2 w-4/5 mx-auto">
                                <h1 className="cursor-pointer p-2 text-[12px] rounded-md mt-1">Plats</h1>
                            </div>
                            <div className="p-2.5 mt-1 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i className="bi bi-droplet"></i>
                                <span className="text-[15px] ml-5 text-gray-200">Pâtes</span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <div className=" leading-7 text-left text-sm mt-2 w-4/5 mx-auto">
                                <h1 className="cursor-pointer p-2 text-[12px] rounded-md mt-1">Autres</h1>
                            </div>
                            <div className="p-2.5 mt-1 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i className="bi bi-cup-hot"></i>
                                <span className="text-[15px] ml-5 text-gray-200">Désserts</span>
                            </div>
                            <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i className="bi bi-cup-straw"></i>
                                <span className="text-[15px] ml-5 text-gray-200">Boissons & Alcools</span>
                            </div>
                            <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i className="bi bi-balloon"></i>
                                <span className="text-[15px] ml-5 text-gray-200">Divers</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2.5 mx-5 my-4 flex items-center border-2 border-white rounded-xl px-4 duration-300 cursor-pointer  hover:bg-persodark">
                        <span className="text-[15px] ml-2 font-bold text-white">Commandez maintenant !</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NavBar;