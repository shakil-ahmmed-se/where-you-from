import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={[darkMode, setDarkMode]}>
      <Header setDarkMode={setDarkMode} />
    <Outlet/>
      
    </ThemeContext.Provider>
  );
}

export default App;
