import React from 'react';
import { ListItem, ListItemText, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import exampleImg from "../assets/flags/br.svg"


function FavoriteCountry() {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="remove">
                    <CloseIcon />
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
