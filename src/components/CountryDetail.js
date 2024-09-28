import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = () => {
  // const {name} = useParams();
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();
  // const location = useLocation();

  // const countryName = new URLSearchParams(location.search).get('name');
  const params = useParams()
  const countryName = params.country


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
     
          borders: [],

          
        
        
        })

        if(!data.borders){
          data.borders = [];
        }

        data.borders.map((border)=>{
          fetch(`https://restcountries.com/v3.1/alpha/${border}`)
           .then(res => res.json())
           .then(([borderCountry])=>{
              setCountryData((preState)=>({...preState, borders: [...preState.borders, borderCountry.name.common]}))
            })
        })
       })
       .catch(error =>{
        setNotFound(true);
        // console.error(error);
       })
       
  },[countryName])

  if(notFound){
    return <h1 style={{textAlign:'center'}}>Country not found</h1>
  }
    return countryData === null ?(
      <h1>Loading...</h1>
    ): (
        <main>
        <div className="country-details-container">
          <span className="back-button" onClick={()=> navigate(-1)}>
            Back 
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
              {countryData.borders.length !==0 && <div className="border-countries">
                <b>Border Countries: </b>&nbsp; 
                {
                  countryData.borders.map((border) => (
                    <Link to={`/${border}`} key={border}>
                      {border}
                    </Link>
                  ))
                }
              </div>}
            </div>
          </div>
        </div>
      </main>
    );
};

export default CountryDetail;