import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import {theme} from "../assets/theme";
import CustomButton from './CustomButton';

// Fix the border countries call (display the common name) 
function CountryDetails({backgroundColorSecond, textColor}) {
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

    if (loading) return <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100vh", width: "100vw" }}
    ><CircularProgress /></Box>;

    return (
        <Box sx={{ maxWidth: "1440px", margin:{xs:"0 15px", md:"0 70px", lg:"0 70px"}}}>
            <CustomButton backgroundColorSecond={backgroundColorSecond} textColor={textColor} sx={{ padding:{xs:"5px 30px"}, ml:{xs:"10px"}, mt:{xs:"30px"}, mb:{xs:"70px"}   }}
             onClick={() => navigate(-1)} startIcon={<span>←</span>}>
                Back
            </CustomButton>

            <Box display="flex" alignItems="flex-start" sx={{flexDirection:{xs:"column", md:"row", lg:"row"}, gap:{xs:"36px", md:"64px", lg:"64px"}}}>
                <Box 
                    component="img"
                    src={countryData.flags?.svg}
                    alt={`${countryData.name.common} flag`}
                    
                    sx={{
                        width: {xs:"320px", md:"800px"},
                        height: {xs:"190px", md:"450px"},
                        justifyContent: {xs:"center"},
                        ml:{xs:"10px"},
                    }}
                />

                <Box sx={{ml:{xs:"10px"} ,}}>
                    <Typography variant="h3" sx={{ fontWeight: theme.typography.fontWeightBold, fontSize:{xs:"24px", md:"32px"}
                    ,marginBottom: "24px",
                         marginTop:{xs:"0px", md:"50px"} }}>
                        {countryData.name.common}
                    </Typography>

                    <Box display="flex" gap={8} sx={{gap:{xs:"36px", md:"64px", lg:"64px"}, flexDirection:{xs:"column", md:"row"}}}>
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
                                            backgroundColor: backgroundColorSecond,
                                            color: textColor, 
                                            minWidth: {xs:"40px", md:"80px" }
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
