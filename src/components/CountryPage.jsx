import React, { useState } from 'react';
import CountrySearch from './CountrySearch';
import CountryList from './CountryList';
import Sidebar from './Sidebar';
import { MainContentWrapper } from './styles';
import { Container } from '@mui/material';

// This page was needed to be able to utilize the search query in an easier way to pass it to other components (plus cleaner App.jsx code)
const CountryPage = ({backgroundColorSecond, textColor, isDarkMode}) => {
    const [searchQuery, setSearchQuery] = useState(""); // State for search query

    return (
      <Container maxWidth={false} disableGutters sx={{ px: { xs: "15px", md:"70px", lg:"70px" }, margin: 0 }}>
        <CountrySearch setSearchQuery={setSearchQuery} backgroundColorSecond={backgroundColorSecond} isDarkMode={isDarkMode} />
        <MainContentWrapper>
          <Sidebar backgroundColorSecond={backgroundColorSecond} textColor={textColor}/>
          <CountryList backgroundColorSecond={backgroundColorSecond} textColor={textColor} searchQuery={searchQuery} />
        </MainContentWrapper>
      </Container>
    );
  };

export default CountryPage;