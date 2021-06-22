import Reac from 'react';
import usePersistedState from './utils/usePersistedState.js';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global.js';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

export default function App() {
  const [theme, setTheme] = usePersistedState('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
}