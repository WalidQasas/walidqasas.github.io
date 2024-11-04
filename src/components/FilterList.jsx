import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

function FilterList() {
    const [region, setRegion] = useState('');

    const handleChange = (event) => {
        setRegion(event.target.value);
    };

    return (
        <FormControl variant="outlined" sx={{ minWidth: 200, mr:"35px"}}>
            <InputLabel>Filter by Region</InputLabel>
            <Select
                value={region}
                onChange={handleChange}
                label="Filter by Region"
            >
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="America">America</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
            </Select>
        </FormControl>
    );
}

export default FilterList;
