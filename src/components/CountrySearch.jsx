import React from 'react';
import { Box } from '@mui/material';
import FilterList from "./FilterList";
import SearchBar from "./SearchBar";
import { CountrySearchWrapper } from './styles';

function CountrySearch({ setSearchQuery }) {

    return (
        <CountrySearchWrapper>
        <Box display="flex" alignItems="center" gap={2}>
            <Box flexGrow={1}>
                <SearchBar setSearchQuery={setSearchQuery} />
            </Box>

            <Box>
                <FilterList />
            </Box>
        </Box>
        </CountrySearchWrapper>
        
    );
}

export default CountrySearch;
