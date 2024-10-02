import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const useTheme = () => {
     const [isDark, setIsDark] = useContext(ThemeContext);
    return (
        [isDark, setIsDark]
    );
};

export default useTheme;