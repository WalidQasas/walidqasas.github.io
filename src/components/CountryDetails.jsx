import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import exampleImg from "../assets/flags/de.svg";
import theme from "../assets/theme";
import CustomButton from './CustomButton';

function CountryDetails() {
    //const { countryName } = useParams();
    const countryName  = "Belgium";
    const navigate = useNavigate();
    
    const countryData = {
        flag: exampleImg,
        nativeName: "België",
        population: "11,319,511",
        region: "Europe",
        subRegion: "Western Europe",
        capital: "Brussels",
        topLevelDomain: ".be",
        currencies: "Euro",
        languages: ["Dutch", "French", "German"],
        borderCountries: ["France", "Germany", "Netherlands"]
    };

    return (
        <Box sx={{ maxWidth: "1440px", margin: "0 100px" }}>
            <CustomButton onClick={() => navigate(-1)} startIcon={<span>←</span>}>
                Back
            </CustomButton>

            <Box display="flex" gap={8} alignItems="flex-start">
                <Box 
                    component="img"
                    src={countryData.flag}
                    alt={`${countryName} flag`}
                    sx={{
                        width: "500px",
                        height: "auto",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1),0px -2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                />

                <Box>
                    <Typography variant="h3" sx={{ fontWeight: theme.typography.fontWeightBold, marginBottom: "24px" }}>
                        {countryName}
                    </Typography>

                    <Box display="flex" gap={8}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Native Name:</Typography>
                                <Typography variant="body4">{countryData.nativeName}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Population:</Typography>
                                <Typography variant="body4">{countryData.population}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Region:</Typography>
                                <Typography variant="body4">{countryData.region}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Sub Region:</Typography>
                                <Typography variant="body4">{countryData.subRegion}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Capital:</Typography>
                                <Typography variant="body4">{countryData.capital}</Typography>
                            </Box>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={1}>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Top Level Domain:</Typography>
                                <Typography variant="body4">{countryData.topLevelDomain}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Currencies:</Typography>
                                <Typography variant="body4">{countryData.currencies}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Languages:</Typography>
                                <Typography variant="body4">{countryData.languages.join(", ")}</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box mt={2}>
                        <Box display="flex" alignItems="center" flexWrap="wrap" gap={1}>
                            <Typography variant="body3" sx={{ whiteSpace: "nowrap" }}>
                                Border Countries:
                            </Typography>
                            
                            <Box display="flex" flexWrap="wrap" gap={1}>
                                {countryData.borderCountries.map((border) => (
                                    <CustomButton 
                                        key={border} 
                                        size="small" 
                                        sx={{ 
                                            padding: "3px 10px", 
                                            backgroundColor: "inherit", 
                                            minWidth: "100px" 
                                        }}
                                    >
                                        {border}
                                    </CustomButton>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CountryDetails;
