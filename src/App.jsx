import './App.css';
import Header from './components/Header';
import { Box, CircularProgress, Container, ThemeProvider, Typography } from '@mui/material';
import { AppLayout} from './components/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import CountryPage from './components/CountryPage';
import { lightTheme, darkTheme, theme } from './assets/theme';
import { useEffect, useState } from 'react';

function App() {
  
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [allCountries, setAllCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
  };

  const backgroundColor = isDarkMode ? lightTheme.palette.background.main : darkTheme.palette.background.main;
  const textColor = isDarkMode ? lightTheme.palette.text.primary : darkTheme.palette.text.primary;
  const backgroundColorSecond = isDarkMode ? lightTheme.palette.background.default : darkTheme.palette.background.default;

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setAllCountries(data);
      } catch (err) {
        setError('Error fetching countries');
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, []);

  if (loading) {
    return (
        <Container maxWidth={false} disableGutters sx={{ width :'100vw', height :'100vh', px: { xs: "15px", md:"70px", lg:"70px" }, margin: 0 }}>
            <CircularProgress />
        </Container>
    );
  }

  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme} >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box sx={{
              bgcolor: backgroundColor,
              color: textColor,
              height: '100vh',
            }}>
            <AppLayout>
              <Header onToggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
              <Routes>
                <Route path="/" element={
                  <CountryPage 
                  backgroundColorSecond={backgroundColorSecond} 
                  textColor={textColor} 
                  isDarkMode={isDarkMode}
                  allCountries={allCountries}
                  />} 
                />
                <Route path="country/:countryName" element={
                  <CountryDetails 
                  backgroundColorSecond={backgroundColorSecond} 
                  textColor={textColor}
                  allCountries={allCountries}
                  />} 
                />
              </Routes>
            </AppLayout>
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeProvider>
  );
}

export default App;
