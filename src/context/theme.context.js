import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProviderWrapper(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') { 
      setTheme('dark');
    } else {
      setTheme('light');
    };
  }  

  // This is a HOC and must not render HTML per se. 
  // It only returns its children with added functionality
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProviderWrapper };