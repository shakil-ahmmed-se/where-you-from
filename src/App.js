import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Header setDarkMode={setDarkMode} />
    <Outlet/>
      
    </>
  );
}

export default App;
