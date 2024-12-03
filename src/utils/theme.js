import { createContext, useState } from 'react';
import { createGlobalStyle } from 'styled-components';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};


export const lightTheme = {
  body: '#fff',
  text: '#000',
  toggleBorder: '#FFF',
  background: '#363537',
};

export const darkTheme = {
  body: '#000',
  text: '#fff',
  toggleBorder: '#6B8096',
  background: '#999',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all 0.50s linear;
  }
`;

export default ThemeContext;
