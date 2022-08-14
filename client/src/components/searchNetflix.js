import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchNetflix = () => {

    const [title, setTitle] = useState('')
    const [searchResult, setSerchResult] = useState([])

    const options = {
        method: 'GET',
        url: 'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
        params: {term: title, country: 'us'},
        headers: {
            'X-RapidAPI-Key': '23a1cdb7d2msh546647029458caep10bf63jsn1ef5ee751bcd',
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
    };

    const getList = (event) => {
        event.preventDefault();
        axios.request(options).then(function (response) {
            console.log(response.data.results);
            setSerchResult(response.data.results)
            }).catch(function (error) {
                console.error(error);
            });
    }
    

    return (
        <div>
            <h1 className='text-white font-bold'>SEARCH</h1>
            <div>
                <form onSubmit={getList}>
                    <input 
                        type="text" 
                        onChange={(event) => {setTitle(event.target.value)}}
                        className='pl-2 rounded h-9 font-bold'
                    />
                </form>
            </div>
            <div className='flex gap-4 justify-center mt-8'>
                {searchResult.map((data, index)=> {
                    return (
                        <div key={index} className='flex'>
                            <div className='relative'>
                                    
                                    <div className='relative'>
                                        <img src={data.picture} alt={data.name} className='w-64 rounded'/>
                                        <div className='absolute bottom-0 left-4'>
                                        <h1  className='text-white font-bold'>{data.name} </h1>
                                        </div>
                                    </div>
                                    <div className='flex gap-4 mt-2'>
                                        {data.locations.map((service, ind)=>{
                                            return (
                                                <div className='bg-white rounded w-16 h-10'>
                                                    <img src={service.icon} alt="" className='p-1'/>
                                                    
                                                </div>
                                            )
                                        })}
                                    </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default SearchNetflix;