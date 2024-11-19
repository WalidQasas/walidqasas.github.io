import React, { useState } from 'react';
import CountrySearch from './CountrySearch';
import CountryList from './CountryList';
import Sidebar from './Sidebar';
import { MainContentWrapper } from './styles';
import { Container, CircularProgress, Box } from '@mui/material';

// This page was needed to be able to utilize the search query in an easier way to pass it to other components (plus cleaner App.jsx code)
const CountryPage = ({backgroundColorSecond, textColor, isDarkMode, allCountries}) => {
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [filterRegion, setFilterRegion] = useState(""); // This one is for the filter query

    const countries = Array.isArray(allCountries) ? allCountries : [];

    if (!countries.length) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh", width: "100vw", backgroundColor:'backgroundColorSecond'}}
    ><CircularProgress /></Box>
      );
    }

    return (
      <Container maxWidth={false} disableGutters sx={{ px: { xs: "15px", md:"70px", lg:"70px" }, margin: 0 }}>
        <CountrySearch 
        setSearchQuery={setSearchQuery} 
        backgroundColorSecond={backgroundColorSecond} 
        isDarkMode={isDarkMode} 
        setFilterRegion={setFilterRegion}
        />
        <MainContentWrapper>
          <Box className="sidebar">
            <Sidebar 
            backgroundColorSecond={backgroundColorSecond} 
            textColor={textColor}
            countries={countries}
            />
          </Box>
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