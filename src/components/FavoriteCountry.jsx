import React from 'react';
import { ListItem, ListItemText, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function FavoriteCountry({countryName, flags, textColor, onRemove}) {
    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="remove" onClick={() => onRemove(countryName)}>
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
                    src={flags.svg}
                    alt={`${countryName} flag`}

                    sx={{
                        width: 40,
                        height: 20,
                        borderRadius: '6px' , 
                        objectFit: 'cover', 
                    }}
                />
                <ListItemText primary={countryName} sx={{ color: textColor }} />
            </Box>
        </ListItem>
    );
}

export default FavoriteCountry;
