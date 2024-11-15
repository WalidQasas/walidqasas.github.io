import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CountryCardTextWrapper, CountryCardWrapper } from "./styles";
import { Typography, Box, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/StarBorderOutlined';

function CountryCard({ country, backgroundColorSecond, textColor}) {
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favorites.includes(country.name.common));
    }, [country.name.common]);

    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        let updatedFavorites;
        
        if (isFavorite) {
            updatedFavorites = favorites.filter(name => name !== country.name.common);
        } else {
            updatedFavorites = [...favorites, country.name.common];
        }

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    };
    
    return (
        <Box sx={{bgcolor: backgroundColorSecond, color: textColor, height:'350px',   borderRadius: '8px'}}>
            <CountryCardWrapper>
                <Link to={`/country/${country.name.common}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div>
                        <img src={country.flags?.svg || ''} alt={`${country.name.common} Flag`} className="country-img" />
                        <CountryCardTextWrapper>
                            <Typography variant="h2" sx={{ pb:"20px" }}>{country.name.common}</Typography>
                            
                            <Box display="flex" gap={1}>
                                <Typography variant="body1" >Population:</Typography>
                                <Typography variant="body2" >{country.population.toLocaleString()}</Typography>
                            </Box>

                            <Box display="flex" gap={1}>
                                <Typography variant="body1" >Region:</Typography>
                                <Typography variant="body2" >{country.region}</Typography>
                            </Box>

                            <Box display="flex" gap={1}>
                                <Typography variant="body1" >Capital:</Typography>
                                <Typography variant="body2" >{country.capital ? country.capital[0] : 'N/A'}</Typography>
                            </Box>
                            
                        </CountryCardTextWrapper>
                    </div>
                </Link>
                <Box className="favourites" display="flex" justifyContent="flex-end" sx={{mt:'5px', paddingBottom:{sm:'15px'}}} gap={1}>
                    <IconButton onClick={toggleFavorite} aria-label="toggle favorite" sx={{display:{xs:'flex', sm:'none' }}}>
                        {isFavorite ? <FavoriteIcon sx={{ color: "gold" }} /> : <FavoriteBorderIcon />}
                    </IconButton>
                </Box>
            </CountryCardWrapper>
        </Box>
    );
}

export default CountryCard;
