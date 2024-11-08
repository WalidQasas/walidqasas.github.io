import './App.css';
import Header from './components/Header';
import { Box, ThemeProvider } from '@mui/material';
import { AppLayout} from './components/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountryPage from './components/CountryPage';
import { lightTheme, darkTheme, theme } from './assets/theme';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);
  const backgroundColor = isDarkMode ? lightTheme.palette.background.main : darkTheme.palette.background.main;
  const textColor = isDarkMode ? lightTheme.palette.text.primary : darkTheme.palette.text.primary;
  const backgroundColorSecond = isDarkMode ? lightTheme.palette.background.default : darkTheme.palette.background.default;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box sx={{
              bgcolor: backgroundColor,
              color: textColor,
              padding: 0,
              height: '100vh',
            }}>
            <AppLayout>
              <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
              <Routes>
                <Route path="/" element={<CountryPage backgroundColorSecond={backgroundColorSecond} textColor={textColor} isDarkMode={isDarkMode}/>} />
                <Route path="country/:countryName" element={<CountryDetails backgroundColorSecond={backgroundColorSecond} textColor={textColor}/>} />
              </Routes>
            </AppLayout>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
