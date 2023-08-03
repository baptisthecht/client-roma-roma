import React from "react";

const Test = () => {

    return (
        <div>
            <span class="absolute text-persogray text-4xl top-5 left-4 cursor-pointer" onclick="Openbar()">
                <i class="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
            </span>
            <div class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
            p-2 w-[300px] overflow-y-auto text-center bg-menu m-4 rounded-3xl flex shadow h-auto ">
                <div class="text-persogray text-xl flex flex-col justify-between">
                    <div>
                        <div class="p-2.5 mt-1 mb-7 flex items-center rounded-md ">
                            <h1 class="text-[24px] text-left ml-7 mt-7 text-white font-bold">Roma Roma Pizzeria<span class="text-red">.</span></h1>
                            <i class="bi bi-x ml-20 cursor-pointer lg:hidden" onclick="Openbar()"></i>
                        </div>
                        <div class="mt-6">
                            <div class=" leading-7 text-left text-sm mt-2 w-4/5 mx-auto" id="submenu">
                                <h1 class="cursor-pointer p-2 text-[12px] rounded-md mt-1">Pizzas</h1>
                            </div>
                            <div class="p-2.5 mx-5 flex items-center border-2 border-gold rounded-xl px-4 duration-300 cursor-pointer  hover:bg-darkgold">
                                <i class="bi bi-emoji-heart-eyes text-gold "></i>
                                <span class="text-[15px] ml-5 text-gold">Pizza du moment !</span>
                            </div>
                            <div class="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer font-bold hover:text-light">
                                <i class="bi bi-palette text-light"></i>
                                <span class="text-[15px] ml-5 text-light">Les classiques</span>
                            </div>
                            <div class="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i class="bi bi-heart"></i>
                                <span class="text-[15px] ml-5 text-gray-200">Les incontournables</span>
                            </div>
                            <div class="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i class="bi bi-house"></i>
                                <span class="text-[15px] ml-5 text-gray-200">Les Roma Roma</span>
                            </div>
                        </div>
                        <div class="mt-6">
                            <div class=" leading-7 text-left text-sm mt-2 w-4/5 mx-auto" id="submenu">
                                <h1 class="cursor-pointer p-2 text-[12px] rounded-md mt-1">Plats</h1>
                            </div>
                            <div class="p-2.5 mt-1 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i class="bi bi-droplet"></i>
                                <span class="text-[15px] ml-5 text-gray-200">Pâtes</span>
                            </div>
                        </div>
                        <div class="mt-6">
                            <div class=" leading-7 text-left text-sm mt-2 w-4/5 mx-auto" id="submenu">
                                <h1 class="cursor-pointer p-2 text-[12px] rounded-md mt-1">Autres</h1>
                            </div>
                            <div class="p-2.5 mt-1 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i class="bi bi-cup-hot"></i>
                                <span class="text-[15px] ml-5 text-gray-200">Désserts</span>
                            </div>
                            <div class="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i class="bi bi-cup-straw"></i>
                                <span class="text-[15px] ml-5 text-gray-200">Boissons & Alcools</span>
                            </div>
                            <div class="p-2.5 mt-2 mx-5 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:text-light">
                                <i class="bi bi-balloon"></i>
                                <span class="text-[15px] ml-5 text-gray-200">Divers</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-2.5 mx-5 my-3 flex items-center border-2 border-white rounded-xl px-4 duration-300 cursor-pointer  hover:bg-persodark">
                        <span class="text-[15px] ml-3 text-white">Commandez maintenant !</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Test;