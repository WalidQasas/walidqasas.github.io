import React, { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {lightTheme, darkTheme} from "../assets/theme";

function FilterList({ backgroundColorSecond, isDarkMode, setRegion}) {
    const [region, setLocalRegion] = useState(() => {
        return localStorage.getItem('selectedRegion') || '';
      });

      useEffect(() => {
        localStorage.setItem('selectedRegion', region);
        setRegion(region);
    }, [region, setRegion]);

    const handleChange = (event) => {
        const selectedRegion = event.target.value;
        setLocalRegion(selectedRegion);
        localStorage.setItem('selectedRegion', selectedRegion);
    };
    const textColor = isDarkMode ? lightTheme.palette.text.primary : darkTheme.palette.text.secondary;
    const hoverBackground = isDarkMode ? darkTheme.palette.text.main : lightTheme.palette.text.main;

    return (
        <FormControl variant="outlined" sx={{ minWidth: 200, mr:"35px", backgroundColor: backgroundColorSecond, }}>
            <InputLabel sx={{color:textColor,}}>Filter by</InputLabel>
            <Select
                value={region}
                onChange={handleChange}
                label="Filter by"
                sx={{
                    backgroundColor: backgroundColorSecond,
                    color:textColor,
                    "& .MuiSelect-icon": {
                    color: textColor,
                }, }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            backgroundColor: backgroundColorSecond,
                            "& .MuiMenuItem-root": {
                                color: textColor,
                                "&:hover": {
                                    backgroundColor: hoverBackground,
                                },
                            },
                        },
                    },
                }}
            >
                <MenuItem sx={{backgroundColor: backgroundColorSecond,color: textColor}} value="">No filter</MenuItem>
                <MenuItem sx={{backgroundColor: backgroundColorSecond,color: textColor}} value="Favourites">Favourites</MenuItem>
                <MenuItem sx={{backgroundColor: backgroundColorSecond,color: textColor}} value="Africa">Africa</MenuItem>
                <MenuItem sx={{backgroundColor: backgroundColorSecond,color: textColor}} value="Americas">Americas</MenuItem>
                <MenuItem sx={{backgroundColor: backgroundColorSecond,color: textColor}} value="Asia">Asia</MenuItem>
                <MenuItem sx={{backgroundColor: backgroundColorSecond,color: textColor}} value="Europe">Europe</MenuItem>
                <MenuItem sx={{backgroundColor: backgroundColorSecond,color: textColor}} value="Oceania">Oceania</MenuItem>
            </Select>
        </FormControl>
    );
}

export default FilterList;
