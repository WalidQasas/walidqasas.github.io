import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from './components.module.css';
import { HeaderWrapper } from './styles';
import {theme, lightTheme, darkTheme} from "../assets/theme";


function Header({ onToggleDarkMode, isDarkMode }) {
  const backgroundColor = isDarkMode ? lightTheme.palette.background.default : darkTheme.palette.background.default;
  const textColor = isDarkMode ? lightTheme.palette.text.primary : darkTheme.palette.text.primary;

  return (
    <Box 
    sx={{
      backgroundColor: backgroundColor,
      color: textColor,
    }}>
      <HeaderWrapper>
        <AppBar position="static" elevation={0} 
        sx={{minHeight: "50px",
          backgroundColor: backgroundColor,
          color: textColor,
        }}>
          <Toolbar disableGutters className={styles.headerContent} sx={{ minHeight: "50px", alignItems: "center", padding: 0, margin: 0 }} >
            <Typography variant="h1" 
            sx={{ 
              fontSize: { xs: "14px", md:"18px", lg:"18px" },
              backgroundColor: backgroundColor,
              color: textColor, 
            }}>
              Where in the world?
            </Typography>

            <Box className={styles.darkMode}>
            <IconButton edge="end" aria-label="dark mode toggle" onClick={onToggleDarkMode}>
            {isDarkMode ? (
                  <LightModeIcon sx={{ color: lightTheme.palette.text.primary }} />
                ) : (
                  <DarkModeIcon sx={{ color: darkTheme.palette.text.primary }} />
                )}
              
            {isDarkMode ? (
              <Typography  sx={{ fontSize: { xs: "12px", md:"14px", lg:"14px" }, fontWeight:theme.typography.fontWeightMedium, color: lightTheme.palette.text.primary}}>
              Light Mode
              </Typography>) : (
                <Typography className={styles.darkModeText} sx={{ fontSize: { xs: "12px", md:"14px", lg:"14px" }, fontWeight:theme.typography.fontWeightMedium, color: darkTheme.palette.text.primary}}>
              Dark Mode
              </Typography>)}

            </IconButton>
            </Box>    
          </Toolbar>
        </AppBar>
      </HeaderWrapper>
    </Box>
  );
}

export default Header;
