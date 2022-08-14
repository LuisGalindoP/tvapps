import React, {useEffect, useState} from 'react';
import 'animate.css';
import axios from 'axios'

import Services from '../data/services'
import Phrases from '../data/phrases'
import SearchNetflix from '../components/searchNetflix'



let randomPhrase = Math.floor(Math.random()*20);
const today = new Date();



const DashboardA = (props) => {

    

    return (
        <div>
            <div className="bg-gradient-to-r from-indigo-900 via-purple-500 to-pink-900 ...   ">
                
                <div className='h-screen flex-col items-center justify-center pt-96'>
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
                    <div className='text-center'>
                    <SearchNetflix/>
                </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default DashboardA;