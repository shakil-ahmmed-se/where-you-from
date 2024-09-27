import React from "react";

const SelectedMenu = ({setFilterCountry}) => {
  return (
    <select onChange={(e)=>{setFilterCountry(e.target.value)}} className="filter-by-region">
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default SelectedMenu;
