import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountryListShimmer from "./CountryListShimmer";
import './CountryListShimmer.css';



const CountryList = ({query, filterCountry}) => {
  const [countriesData, setCountriesData] = useState([]);
  // console.log(countriesData)
  // const [query, setQuery] = useState('');
  // const searchCountry = countriesData.filter((country) =>{
  //   return country.name.common.toLowerCase().includes(query.toLowerCase());
  // })

  // console.log(searchCountry)

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
     .then(res => res.json())
     .then(data => setCountriesData(data))
     .catch(error => console.log(error))

  },[])

  return (
    <>
    
    {/* <input type="text" onChange={(e)=>{setQuery(e.target.value)}} placeholder="Search for a country..." /> */}

   {!countriesData.length ?(<CountryListShimmer/>):
    (<div className="countries-container">
       {
          countriesData.filter((country) =>{
            if(query || filterCountry === ''){
              return country.name.common.toLowerCase().includes(query.toLowerCase())
            }
            if(filterCountry){
              return country.region.toLowerCase() === filterCountry.toLowerCase();
            }
            // if(){
            //   return country.name.common.toLowerCase().includes(query.toLowerCase());
            // }
            
          }).map(country =>{
           
           return (
           <CountryCard 
              key={country.name.common}
              name ={country.name.common}
              flag={country.flags.png}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}

            />
          )
          })
       }
    </div>)
    }
    </>
  );
};

export default CountryList;
