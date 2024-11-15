import { Box } from '@mui/material';
import React, { useMemo } from 'react';
import CountryCard from './CountryCard';

const CountryList = ({ searchQuery, backgroundColorSecond, textColor, filterRegion, countries }) => {

  const filteredCountries = useMemo(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    return countries.filter((country) => {
      const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = filterRegion === "Favourites"
        ? favorites.includes(country.name.common)
        : filterRegion
        ? country.region === filterRegion
        : true;
      return matchesSearch && matchesRegion;
    });
  }, [countries, searchQuery, filterRegion]);

  
  return (
    <Box display="flex" flexWrap="wrap" gap={8} padding={0} sx={{ height: "480px", justifyContent: { xs: "center" } }}>
      {filteredCountries.map((country) => (
        <CountryCard key={country.cca3} country={country} backgroundColorSecond={backgroundColorSecond} textColor={textColor} />
      ))}
    </Box>
  );
};

export default CountryList;
