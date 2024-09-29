import React, { useContext, useState } from 'react';
import SearchBar from './SearchBar';
import SelectedMenu from './SelectedMenu';
import CountryList from './CountryList';
import { ThemeContext } from '../contexts/ThemeContext';

const Home = () => {
    const [query, setQuery] = useState('');
    const [filterCountry, setFilterCountry] = useState('');
    const a = useContext(ThemeContext)
    console.log(a);
    return (
        <main>
        <div className='search-filter-container' >
          <SearchBar  setQuery={setQuery} />
          <SelectedMenu setFilterCountry={setFilterCountry} />
        </div>
        <CountryList filterCountry={filterCountry} query={query}/>
      </main>
    );
};

export default Home;