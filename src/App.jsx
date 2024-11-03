import './App.css';
import Header from './components/Header';

import { Box, Container, ThemeProvider } from '@mui/material';
import Sidebar from './components/Sidebar';
import { AppLayout, MainContentWrapper } from './components/styles';
import CountryList from './components/CountryList';
import CountrySearch from './components/CountrySearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import theme from "./assets/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{
            bgcolor: "#fafafa",
          }}>
          <AppLayout>
            <Header/>
            <Routes>
              <Route path="/" element={
                <Container maxWidth="lg">
                  <CountrySearch/>
                  <MainContentWrapper>
                    <Sidebar className="sidebar"/>
                    <CountryList className="country-list"/>
                  </MainContentWrapper>
                </Container>} />
              <Route path="country/:countryName" element={<CountryDetails />} />
            </Routes>
          </AppLayout>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
