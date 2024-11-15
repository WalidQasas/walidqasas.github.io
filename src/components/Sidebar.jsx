import React, { useEffect, useState } from 'react';
import { SidebarWrapper } from "./styles"
import { Typography, Box, List } from "@mui/material";
import FavoriteCountry from "./FavoriteCountry";
// Still not done (needs drag and drop and dynamic way of adding to the list)
function Sidebar({backgroundColorSecond, textColor, countries}){
    const [favoriteCountries, setFavoriteCountries] = useState([]);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const favoriteData = countries.filter(country => favorites.includes(country.name.common));
        setFavoriteCountries(favoriteData);
    }, [countries]);

    const addFavorite = (country) => {
        if (favoriteCountries.some(fav => fav.name.common === country.name.common)) return;

        const updatedFavorites = [...favoriteCountries, country];
        setFavoriteCountries(updatedFavorites);

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites.map(country => country.name.common)));
    };

    const removeFavorite = (countryName) => {
        const updatedFavorites = favoriteCountries.filter(country => country.name.common !== countryName);
        setFavoriteCountries(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites.map(country => country.name.common)));
    };

    const onDrop = (e) => {
        const country = JSON.parse(e.dataTransfer.getData("country"));
        addFavorite(country);
        e.target.style.border = "";
      };
    
      const onDragOver = (e) => {
        e.preventDefault();
        e.target.style.border = "2px solid #27ae60";
      };


    return(
            <SidebarWrapper 
            backgroundColorSecond={backgroundColorSecond} 
            textColor={textColor} 
            onDrop={onDrop}
            onDragOver={onDragOver} 
            >
                <Typography variant="h2" >
                    Favourites
                </Typography>
                <Box
                    sx={{
                        overflowY: 'auto',
                        width: '230px',
                    }}
                >
                     <List>
                    {favoriteCountries.length > 0 ? (
                        favoriteCountries.map((countries) => (
                            <FavoriteCountry
                                key={countries.name.common}
                                countryName={countries.name.common}
                                flags={countries.flags}
                                onRemove={removeFavorite}
                                textColor={textColor}
                            />
                        ))
                    ) : (
                        <Typography sx={{ color: textColor, textAlign: 'center', mt: 2 }}>
                            No favorites added
                        </Typography>
                    )}
                </List>
                </Box>
            </SidebarWrapper>
    )
}
export default Sidebar;