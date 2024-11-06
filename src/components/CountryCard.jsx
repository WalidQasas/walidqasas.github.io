import React from 'react';
import { Link } from 'react-router-dom';
import { CountryCardTextWrapper, CountryCardWrapper } from "./styles";
import { Typography, Box } from "@mui/material";
import theme from "../assets/theme";

function CountryCard({ country }) {
    return (
        <CountryCardWrapper>
            <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                    <img src={country.flags?.svg || ''} alt={`${country.name.common} Flag`} className="country-img" />
                    <CountryCardTextWrapper>
                        <Typography variant="h2" sx={{ color: theme.typography.colorDark , pb:"20px" }}>{country.name.common}</Typography>
                        
                        <Box display="flex" gap={1}>
                            <Typography variant="body1" sx={{ color: theme.typography.colorDark }}>Population:</Typography>
                            <Typography variant="body2" sx={{ color: theme.typography.colorDark }}>{country.population.toLocaleString()}</Typography>
                        </Box>

                        <Box display="flex" gap={1}>
                            <Typography variant="body1" sx={{ color: theme.typography.colorDark }}>Region:</Typography>
                            <Typography variant="body2" sx={{ color: theme.typography.colorDark }}>{country.region}</Typography>
                        </Box>

                        <Box display="flex" gap={1}>
                            <Typography variant="body1" sx={{ color: theme.typography.colorDark }}>Capital:</Typography>
                            <Typography variant="body2" sx={{ color: theme.typography.colorDark }}>{country.capital ? country.capital[0] : 'N/A'}</Typography>
                        </Box>
                    </CountryCardTextWrapper>
                </div>
            </Link>
        </CountryCardWrapper>
    );
}

export default CountryCard;
