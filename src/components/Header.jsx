import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from './components.module.css';
import { HeaderWrapper } from './styles';
import theme from "../assets/theme";


function Header() {
  return (
    <HeaderWrapper>
      <AppBar position="static" elevation={0} className={styles.headerContainer} sx={{ minHeight: "50px" , px: "75px"}}>
        <Toolbar className={styles.headerContent} sx={{ minHeight: "50px", alignItems: "center" }} >
          <Typography variant="h1">
            Where in the world?
          </Typography>

          <Box className={styles.darkMode}>
          <IconButton edge="end" aria-label="dark mode toggle" >
            
            <DarkModeIcon sx={{color: theme.typography.colorDark}}/>
            <Typography className={styles.darkModeText} sx={{ fontSize: "14px", fontWeight:theme.typography.fontWeightMedium }}>
              Dark Mode
            </Typography>

          </IconButton>
          </Box>    
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
  );
}

export default Header;
