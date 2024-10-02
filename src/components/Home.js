import React, { useContext, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SelectedMenu from './SelectedMenu';
import CountryList from './CountryList';
import { useWindowSize } from '../hooks/useWindowSize';


const Home = () => {
    const [query, setQuery] = useState('');
    const [filterCountry, setFilterCountry] = useState('');
    // const a = useContext(ThemeContext);
    const size = useWindowSize();
    // console.log(size)
    
    return (
        <main>
        <div className='search-filter-container' >
          <SearchBar  setQuery={setQuery} />
          <SelectedMenu setFilterCountry={setFilterCountry} />
        </div>
        <h1 style={{textAlign:'center'}}>Window Size :{size.width } X {size.height}</h1>
        <CountryList filterCountry={filterCountry} query={query}/>
      </main>
    );
};

export default Home;