import React, { useState, useEffect, useMemo } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import CountryCard from './CountryCard';

const CountryList = ({ searchQuery }) => {
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

  const filteredCountries = useMemo(() => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [countries, searchQuery]);

  if (loading) return <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh", width: "100vw" }}
                      ><CircularProgress /></Box>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
      <Box display="flex" flexWrap="wrap" gap={8} padding={0} sx={{height:"480px", justifyContent:{xs: "center"}}}>
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </Box>
  );
};

export default CountryList;
