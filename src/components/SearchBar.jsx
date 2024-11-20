import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import {lightTheme, darkTheme} from "../assets/theme";


function SearchBar({ setSearchQuery , backgroundColorSecond, isDarkMode}) {

    const [searchText, setSearchText] = useState("");
    const textColor = isDarkMode ? lightTheme.palette.text.primary : darkTheme.palette.text.secondary;

    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchQuery(searchText);
        }, 300);

        return () => {
            clearTimeout(handler);
        };
    }, [searchText, setSearchQuery]);

    const handleChange = (event) => {
        setSearchText(event.target.value);
    };
    return (
        <TextField
            value={searchText}
            onChange={handleChange}
            placeholder="Search for a country..."
            variant="outlined"
            sx={{
                width: "100%",
                maxWidth: "400px",
                backgroundColor: backgroundColorSecond,
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1),0px -2px 4px rgba(0, 0, 0, 0.1)",
                "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        border: "none",
                    },
                    paddingRight: "8px",
                    color: textColor,
                },
                "& .MuiInputAdornment-root": {
                    color: textColor,
                    marginRight: "8px",
                },
                "& input": {
                    color: textColor,
                },
                "& input::placeholder": {
                    color: textColor,
                },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}

export default SearchBar;
