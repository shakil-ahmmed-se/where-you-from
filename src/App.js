import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';
import SelectedMenu from './components/SelectedMenu';
import CountryList from './components/CountryList';
import { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Header setDarkMode={setDarkMode} />
      <main>
        <div className='search-filter-container' >
          <SearchBar  setQuery={setQuery} />
          <SelectedMenu setFilterCountry={setFilterCountry} />
        </div>
        <CountryList filterCountry={filterCountry} query={query}/>
      </main>
    </>
  );
}

export default App;
