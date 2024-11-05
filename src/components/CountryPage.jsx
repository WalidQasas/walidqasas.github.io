import React, { useState } from 'react';
import CountrySearch from './CountrySearch';
import CountryList from './CountryList';
import Sidebar from './Sidebar';
import { MainContentWrapper } from './styles';
import { Container } from '@mui/material';

const CountryPage = () => {
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
  
    return (
      <Container maxWidth={false} disableGutters sx={{ px: '70px', margin: 0 }}>

        <CountrySearch setSearchQuery={setSearchQuery} />
  
        <MainContentWrapper>
          <Sidebar />
          
          <CountryList searchQuery={searchQuery} />
        </MainContentWrapper>
      </Container>
    );
  };

export default CountryPage;