import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SelectedMenu from './SelectedMenu';
import CountryList from './CountryList';

const Home = () => {
    const [query, setQuery] = useState('');
    const [filterCountry, setFilterCountry] = useState('');
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