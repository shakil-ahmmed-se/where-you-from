import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {
  // const {name} = useParams();
  const [countryData, setCountryData] = useState(null);
  const location = useLocation();
  const countryName = new URLSearchParams(location.search).get('name');
  console.log(countryName)

  useEffect(()=>{
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
       .then(res => res.json())
       .then(([data]) =>{
        setCountryData({
          name: data.name.common,
          flag: data.flags.png,
          population: data.population,
          region: data.region,
          capital: data.capital[0],
          nativeName: data.name.official,
          languages: Object.values(data.languages).join(', '),
          tld : data.tld,
          subregion: data.subregion,
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(', '),
        
        })
       })
       .catch(error => console.log(error))
       
  },[])


    return countryData === null ?(
      <h1>Loading...</h1>
    ): (
        <main>
        <div className="country-details-container">
          <span className="back-button">
            <Link to={'/'}>Back</Link> 
          </span>
          <div className="country-details">
            <img src={countryData.flag} alt='' />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p>
                  <b>Native Name: {countryData.nativeName}</b>
                  <span className="native-name"></span>
                </p>
                <p>
                  <b>
                    Population: {countryData.population}
                  </b>
                  <span className="population"></span>
                </p>
                <p>
                  <b>Region: {countryData.region}</b>
                  <span className="region"></span>
                </p>
                <p>
                  <b>Sub Region: {countryData.subregion}</b>
                  <span className="sub-region"></span>
                </p>
                <p>
                  <b>Capital: {countryData.capital}</b>
                  <span className="capital"></span>
                </p>
                <p>
                  <b>Top Level Domain: {countryData.tld}</b>
                  <span className="top-level-domain"></span>
                </p>
                <p>
                  <b>Currencies: {countryData.currencies}</b>
                  <span className="currencies"></span>
                </p>
                <p>
                  <b>Languages: {countryData.languages}</b>
                  <span className="languages"></span>
                </p>
              </div>
              <div className="border-countries">
                <b>Border Countries: {countryData.borders}</b>&nbsp;
              </div>
            </div>
          </div>
        </div>
      </main>
    );
};

export default CountryDetail;