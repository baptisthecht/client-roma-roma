import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({active}) => {

    const OpenNavBar = () => {
        document.querySelector('.sidebar').classList.remove('hidden');
        document.querySelector('.sidebar').classList.add('left-[0px]');

    }
    
    const CloseNavBar = () => {
        document.querySelector('.sidebar').classList.add('hidden');
        document.querySelector('.sidebar').classList.add('left-[-300px]');
    }
    


    return (
        <div>
            <span className="absolute text-persogray lg:hidden text-4xl top-5 left-4 cursor-pointer" onClick={OpenNavBar}>
                <i className="bi bi-list-nested px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
            p-2 w-auto lg:w-[300px] overflow-y-auto text-center bg-menu m-4 rounded-3xl hidden lg:flex h-auto">
                <div className="text-persogray text-xl flex flex-col justify-between">
                    <div>
                        <div className="p-2.5 mb-7 flex items-center rounded-md ">
                            <h1 className="text-[25px] text-left ml-7 mt-7 text-white font-bold">Roma Roma Pizzeria<span className="text-red">.</span></h1>
                            <i className="bi bi-x ml-20 mr-5 cursor-pointer lg:hidden" onClick={CloseNavBar}></i>
                        </div>
                        <div className="mt-6">
                            <div className=" leading-7 text-left text-sm mt-2 w-4/5 mx-auto">
                                <h1 className="cursor-pointer p-2 text-[12px] rounded-md mt-1">Pizzas</h1>
                            </div>
                            <div className="p-2.5 mx-5 flex items-center border-2 border-gold rounded-xl px-4 duration-300 cursor-pointer  hover:bg-darkgold">
                                <i className="bi bi-emoji-heart-eyes text-gold "></i>
                                <Link to="/pizzadumoment" onClick={CloseNavBar} className="text-[15px] ml-5 text-gold">Pizza du moment !</Link>
                                
                            </div>
                            {active === "classiques" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-palette text-light"></i>
                                    <Link to="/classiques" onClick={CloseNavBar} className="text-[15px] ml-5 text-light ">Les classiques</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-palette"></i>
                                    <Link to="/classiques" onClick={CloseNavBar} className="text-[15px] ml-5 text-gray-200">Les classiques</Link>
                                </div>
                            }

                            {active === "incontournables" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-heart text-light"></i>
                                    <Link to="/incontournables" onClick={CloseNavBar} className="text-[15px] ml-5 text-light ">Les incontournables</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-heart"></i>
                                    <Link to="/incontournables" onClick={CloseNavBar} className="text-[15px] ml-5 text-gray-200">Les incontournables</Link>
                                </div>
                            }
                            
                            {active === "romaroma" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-house text-light"></i>
                                    <Link to="/romaroma" onClick={CloseNavBar} className="text-[15px] ml-5 text-light ">Les Roma Roma</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-house"></i>
                                    <Link to="/romaroma" onClick={CloseNavBar} className="text-[15px] ml-5 text-gray-200">Les Roma Roma</Link>
                                </div>
                            }
                            

                            
                            
                        </div>
                        <div className="mt-6">
                            <div className=" leading-7 text-left text-sm mt-2 w-4/5 mx-auto">
                                <h1 className="cursor-pointer p-2 text-[12px] rounded-md mt-1">Plats</h1>
                            </div>
                            {active === "pates" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-droplet text-light"></i>
                                    <Link to="/pates" onClick={CloseNavBar} className="text-[15px] ml-5 text-light ">Pâtes</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-1 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-droplet"></i>
                                    <Link to="/pates" onClick={CloseNavBar} className="text-[15px] ml-5 text-gray-200">Pâtes</Link>
                                </div>
                            }
                            
                        </div>
                        <div className="my-6">
                            <div className=" leading-7 text-left text-sm mt-2 w-4/5 mx-auto">
                                <h1 className="cursor-pointer p-2 text-[12px] rounded-md mt-1">Autres</h1>
                            </div>
                            {active === "desserts" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-cup-hot text-light"></i>
                                    <Link to="/desserts" onClick={CloseNavBar} className="text-[15px] ml-5 text-light ">Désserts</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-1 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-cup-hot"></i>
                                    <Link to="/desserts" onClick={CloseNavBar} className="text-[15px] ml-5 text-gray-200">Désserts</Link>
                                </div>
                            }
                            {active === "drinks" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-cup-straw text-light"></i>
                                    <Link to="/drinks" onClick={CloseNavBar} className="text-[15px] ml-5 text-light ">Boissons & Alcools</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-cup-straw"></i>
                                    <Link to="/drinks" onClick={CloseNavBar} className="text-[15px] ml-5 text-gray-200">Boissons & Alcools</Link>
                                </div>
                            }
                            {active === "divers" ? 
                                <div className="before:content-[''] before:bg-white before:rounded-xl before:-translate-x-8 before:w-1.5 before:h-6 p-2.5 mt-2 mx-5 flex items-center rounded-md px-2.5 duration-300 cursor-pointer font-bold hover:text-light">
                                    <i className="bi bi-balloon text-light"></i>
                                    <Link to="/divers" onClick={CloseNavBar} className="text-[15px] ml-5 text-light ">Divers</Link>
                                </div>
                            :
                                <div className="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                    <i className="bi bi-balloon"></i>
                                    <Link to="/divers" onClick={CloseNavBar} className="text-[15px] ml-5 text-gray-200">Divers</Link>
                                </div>
                            }
                            
                            
                        </div>
                    </div>
                    <div className="p-2.5 mx-5 mb-4 flex items-center border-2 border-white rounded-xl px-4 duration-300 cursor-pointer  hover:bg-persodark">
                        <span className="text-[15px] mx-auto font-bold text-white">Commandez maintenant !</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default NavBar;