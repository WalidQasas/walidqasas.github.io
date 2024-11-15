import React, { useState, useEffect } from 'react';
import CountrySearch from './CountrySearch';
import CountryList from './CountryList';
import Sidebar from './Sidebar';
import { MainContentWrapper } from './styles';
import { Container, CircularProgress, Typography } from '@mui/material';

// This page was needed to be able to utilize the search query in an easier way to pass it to other components (plus cleaner App.jsx code)
const CountryPage = ({backgroundColorSecond, textColor, isDarkMode}) => {
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [filterRegion, setFilterRegion] = useState(""); // This one is for the filter query
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchCountries = async () => {
          try {
              setLoading(true);
              const response = await fetch('https://restcountries.com/v3.1/all');
              const data = await response.json();
              setCountries(data);
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
          <Container maxWidth={false} disableGutters sx={{ px: { xs: "15px", md:"70px", lg:"70px" }, margin: 0 }}>
              <CircularProgress />
          </Container>
      );
  }

  if (error) return <Typography color="error">{error}</Typography>;


    return (
      <Container maxWidth={false} disableGutters sx={{ px: { xs: "15px", md:"70px", lg:"70px" }, margin: 0 }}>
        <CountrySearch 
        setSearchQuery={setSearchQuery} 
        backgroundColorSecond={backgroundColorSecond} 
        isDarkMode={isDarkMode} 
        setFilterRegion={setFilterRegion}
        />
        <MainContentWrapper>
          <Sidebar 
          backgroundColorSecond={backgroundColorSecond} 
          textColor={textColor}
          countries={countries}
          />
          <CountryList 
          backgroundColorSecond={backgroundColorSecond} 
          textColor={textColor} 
          countries={countries}
          searchQuery={searchQuery} 
          filterRegion={filterRegion}
          />
        </MainContentWrapper>
      </Container>
    );
  };

export default CountryPage;