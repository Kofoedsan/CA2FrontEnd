// import React from 'react'
// import { useState, useEffect } from 'react';

// export const Covid = () => {
    
//     const [covid, setCovid] = useState([]);
  
//     useEffect(() => {
//       const getCovid = async () => {
//         const CovidFromServer = await fetchCovid();
//         setCovid(CovidFromServer);
//       };
  
//       getCovid();
//     }, []);

//     const fetchCovid = async () => {
//         const res = await fetch("https://kofoednet.systems/CA2BackEnd/api/fetch");
//         const data = await res.json();
//         return data;
//       };

// const newArray = covid.map(c19 => ([c19]));
// console.log(newArray);


//     return (
//         <div>
//             <ul>
//             <li>{newArray}</li>
//             </ul>
//         </div>
//     )
// }

// export default Covid

import React, { useEffect, useState } from "react";

import URL from "./settings"

const FetchCovid = () => {
  const [covid, setCovid] = useState({
    covidinfo: "",
    country: "",
    code: "",
    confirmed: "",
    recovered: "",
    critical: "",
    deaths: "",
  });

  useEffect(() => {
    getCovidInfo();
  }, []);

  const getCovidInfo = async () => {
    const res = await fetch(URL + "/api/fetch");
    const covid = await res.json();
    setCovid({
      covidinfo: covid.covidReference,
      country: covid.covid[0].country,
      code: covid.covid[0].code,
      confirmed: covid.covid[0].confirmed,
      recovered: covid.covid[0].recovered,
      critical: covid.covid[0].critical,
      deaths: covid.covid[0].deaths,
    });
  };
 
  return (
    <div>
      <p> Country: {covid.country} </p>
      <p> Country Code: {covid.code} </p>
      <p> Confirmed Infected: {covid.confirmed} </p>
      <p>Confirmed Recovered: {covid.recovered} </p>
      <p> Confirmed Critical: {covid.critical} </p>
      <p> Confirmed Death: {covid.deaths} </p>
      <p>Ref: {covid.covidinfo} </p> 
    </div>
  );
};

export default function App() {
  return <FetchCovid />;
}