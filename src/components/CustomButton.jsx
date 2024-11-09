import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';
import {theme} from '../assets/theme';

// The styled button which will be used in the Country Details (Back / Border Countries)
const StyledButton = styled(Button)(({ backgroundColorSecond, textColor }) =>({
    color: textColor,
    backgroundColor: backgroundColorSecond,
    borderColor: "transparent",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1),0px -2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "4px",
    padding: "5px 35px",
    fontWeight: theme.typography.fontWeightMedium,
    textTransform: "none",
    fontSize: "16px",
    marginBottom: "40px",
    marginTop: "40px",
}));

export default function CustomButton({ backgroundColorSecond ,textColor, children, ...props }) {
    return (
        <StyledButton backgroundColorSecond={backgroundColorSecond} textColor={textColor} variant="outlined" size="small" {...props}>
            {children}
        </StyledButton>
    );
}
