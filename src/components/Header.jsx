import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from './components.module.css';
import { HeaderWrapper } from './styles';
import theme from "../assets/theme";


function Header() {
  return (
    <HeaderWrapper>
      <AppBar position="static" elevation={0} className={styles.headerContainer} sx={{ minHeight: "50px" }}>
        <Toolbar disableGutters className={styles.headerContent} sx={{ minHeight: "50px", alignItems: "center", padding: 0, margin: 0 }} >
          <Typography variant="h1" sx={{ fontSize: { xs: "14px", md:"18px", lg:"18px" } }}>
            Where in the world?
          </Typography>

          <Box className={styles.darkMode}>
          <IconButton edge="end" aria-label="dark mode toggle" >
            
            <DarkModeIcon sx={{color: theme.typography.colorDark}}/>
            <Typography className={styles.darkModeText} sx={{ fontSize: { xs: "12px", md:"14px", lg:"14px" }, fontWeight:theme.typography.fontWeightMedium }}>
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
