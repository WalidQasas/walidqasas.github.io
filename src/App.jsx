import './App.css';
import Header from './components/Header';
import { Box, ThemeProvider } from '@mui/material';
import { AppLayout} from './components/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import theme from "./assets/theme";
import CountryPage from './components/CountryPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{
            bgcolor: theme.typography.colorLight,
            padding: 0,
            height: '100vh',
          }}>
          <AppLayout>
            <Header/>
            <Routes>
              <Route path="/" element={<CountryPage />} />
              <Route path="country/:countryName" element={<CountryDetails />} />
            </Routes>
          </AppLayout>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
