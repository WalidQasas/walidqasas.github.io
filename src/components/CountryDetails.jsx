import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import theme from "../assets/theme";
import CustomButton from './CustomButton';

function CountryDetails() {
    const { countryName } = useParams();
    const navigate = useNavigate();
    const [countryData, setCountryData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
                const data = await response.json();
                setCountryData(data[0]);
            } catch (error) {
                console.error("Error fetching country details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCountry();
    }, [countryName]);

    if (loading) return <CircularProgress />;

    return (
        <Box sx={{ maxWidth: "1440px", margin: "0 70px" }}>
            <CustomButton onClick={() => navigate(-1)} startIcon={<span>←</span>}>
                Back
            </CustomButton>

            <Box display="flex" gap={8} alignItems="flex-start">
                <Box 
                    component="img"
                    src={countryData.flags?.svg}
                    alt={`${countryData.name.common} flag`}
                    sx={{
                        width: "800px",
                        height: "450px",
                    }}
                />

                <Box>
                    <Typography variant="h3" sx={{ fontWeight: theme.typography.fontWeightBold, marginBottom: "24px", marginTop: "50px" }}>
                        {countryData.name.common}
                    </Typography>

                    <Box display="flex" gap={8}>
                        <Box display="flex" flexDirection="column" gap={2}>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Native Name:</Typography>
                                <Typography variant="body4">{countryData.name.nativeName?.common || countryData.name.common}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Population:</Typography>
                                <Typography variant="body4">{countryData.population.toLocaleString()}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Region:</Typography>
                                <Typography variant="body4">{countryData.region}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Sub Region:</Typography>
                                <Typography variant="body4">{countryData.subregion}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Capital:</Typography>
                                <Typography variant="body4">{countryData.capital}</Typography>
                            </Box>
                        </Box>

                        <Box display="flex" flexDirection="column" gap={1}>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Top Level Domain:</Typography>
                                <Typography variant="body4">{countryData.tld ? countryData.tld[0] : 'N/A'}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Currencies:</Typography>
                                <Typography variant="body4">{Object.keys(countryData.currencies || {}).join(", ")}</Typography>
                            </Box>
                            <Box display="flex" gap={1}>
                                <Typography variant="body3">Languages:</Typography>
                                <Typography variant="body4">{Object.values(countryData.languages || {}).join(", ")}</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box mt={2}>
                        <Box display="flex" alignItems="center" flexWrap="wrap" gap={1}>
                            <Typography variant="body3" sx={{ whiteSpace: "nowrap" }}>
                                Border Countries:
                            </Typography>
                            
                            <Box display="flex" flexWrap="wrap" gap={1}>
                                {countryData.borders?.map((border) => (
                                    <CustomButton 
                                        key={border} 
                                        size="small" 
                                        sx={{ 
                                            padding: "3px 10px", 
                                            backgroundColor: "inherit", 
                                            minWidth: "80px" 
                                        }}
                                    >
                                        {border}
                                    </CustomButton>
                                )) || "N/A"}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CountryDetails;
