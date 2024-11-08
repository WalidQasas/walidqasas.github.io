import React from 'react';
import { Box } from '@mui/material';
import FilterList from "./FilterList";
import SearchBar from "./SearchBar";
import { CountrySearchWrapper } from './styles';

function CountrySearch({ setSearchQuery, backgroundColorSecond, isDarkMode}) {

    return (
        <CountrySearchWrapper>
        <Box    display="flex"
                gap={2}
                sx={{
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "left", md: "center"},
                }}
>
            <Box flexGrow={1}>
                <SearchBar setSearchQuery={setSearchQuery} backgroundColorSecond={backgroundColorSecond} isDarkMode={isDarkMode}/>
            </Box>

            <Box sx={{
                    mt:{xs: "20px"} ,
                }}>
                <FilterList backgroundColorSecond={backgroundColorSecond} isDarkMode={isDarkMode}/>
            </Box>
        </Box>
        </CountrySearchWrapper>
        
    );
}

export default CountrySearch;
