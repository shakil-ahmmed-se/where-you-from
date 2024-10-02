import Header from './components/Header';
import './App.css';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Header setIsDark={setIsDark} />
      <Outlet />
    </ThemeContext.Provider>
  );
}

export default App;
