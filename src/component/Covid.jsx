import React from 'react'
import { useState, useEffect } from 'react';

export const Covid = () => {
    
    const [covid, setCovid] = useState([]);
  
    useEffect(() => {
      const getCovid = async () => {
        const CovidFromServer = await fetchCovid();
        setCovid(CovidFromServer);
      };
  
      getCovid();
    }, []);

    const fetchCovid = async () => {
        const res = await fetch("https://kofoednet.systems/CA2BackEnd/api/fetch");
        const data = await res.json();
        return data;
      };

const newArray = covid.map(c19 => ([c19]));
console.log(newArray);


    return (
        <div>
            <ul>
            <li>{newArray}</li>
            </ul>
        </div>
    )
}

export default Covid