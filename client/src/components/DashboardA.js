import React, {useEffect} from 'react';
import date from 'date-and-time';
import 'animate.css';

import Services from '../data/services'
import Phrases from '../data/phrases'

let randomPhrase = Math.floor(Math.random()*20);
const today = new Date();


const DashboardA = () => {
    return (
        <div>
            <div className="bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-900 ...  h-screen flex items-center justify-center ">
                <div>
                    {/*PHRASES*/}
                    <h1 className="text-center text-white text-4xl">{Phrases[randomPhrase].phrase}</h1>
                    {/*-----------------------*/}

                    {/*MAIN APPS MAPPING*/}
                    <div className="flex flex-wrap gap-6 justify-center p-12">
                        {Services.map((service, index)=>{
                            return (
                                <div key ={index}>
                                    <a target="_blank" rel="noopener noreferrer"
                                       href = {service.url}>
                                        <img src={service.logo} className="animate__animated animate__zoomIn w-52 rounded drop-shadow-2xl opacity-70 hover:opacity-100"/>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                    {/*---------------------------*/}
                    {/*GOOGLE SEARCH BOX*/}
                    <div className="text-center mt-12">
                        <form action="https://www.google.com/search" method="get" target="_blank" id="search-form">
                            <input className="text-white rounded opacity-70 bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-900 ... "
                                   name="q" type="text" placeholder=" googolealo cabron ..." autoComplete="off" autoFocus/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardA;