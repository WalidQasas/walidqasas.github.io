import React from 'react';
import { Link } from 'react-router-dom';
import { CountryCardTextWrapper, CountryCardWrapper } from "./styles";
import { Typography, Box } from "@mui/material";

function CountryCard({ country }) {
    return (
        <CountryCardWrapper>
            <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                    <img src={country.flags?.svg || ''} alt={`${country.name.common} Flag`} className="country-img" />
                    <CountryCardTextWrapper>
                        <Typography variant="h2" sx={{ color: "#000", pb:"20px" }}>{country.name.common}</Typography>
                        
                        <Box display="flex" gap={1}>
                            <Typography variant="body1" sx={{ color: "#000" }}>Population:</Typography>
                            <Typography variant="body2" sx={{ color: "#000" }}>{country.population.toLocaleString()}</Typography>
                        </Box>

                        <Box display="flex" gap={1}>
                            <Typography variant="body1" sx={{ color: "#000" }}>Region:</Typography>
                            <Typography variant="body2" sx={{ color: "#000" }}>{country.region}</Typography>
                        </Box>

                        <Box display="flex" gap={1}>
                            <Typography variant="body1" sx={{ color: "#000" }}>Capital:</Typography>
                            <Typography variant="body2" sx={{ color: "#000" }}>{country.capital ? country.capital[0] : 'N/A'}</Typography>
                        </Box>
                    </CountryCardTextWrapper>
                </div>
            </Link>
        </CountryCardWrapper>
    );
}

export default CountryCard;
