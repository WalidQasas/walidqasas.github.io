import React from 'react';
import { ListItem, ListItemText, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import exampleImg from "../assets/flags/br.svg"
// Fix the flag size and add a functionality for the x button

function FavoriteCountry({textColor}) {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="remove">
                    <CloseIcon 
                    sx={{color:textColor,
                    "& .MuiSelect-icon": {
                    color: textColor,
                    }, }}/>
                </IconButton>
            } 
        >
            <Box display="flex" alignItems="center" gap={1}>
                <Box
                    component="img"
                    src={exampleImg}
                    
                    sx={{
                        width: 40,
                        height: 20,
                        borderRadius: '8px' , 
                        objectFit: 'cover', 
                    }}
                />
                <ListItemText primary="Brazil" />
            </Box>
        </ListItem>
    );
}

export default FavoriteCountry;
