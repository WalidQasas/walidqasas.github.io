import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";

function SearchBar({ setSearchQuery }) {

    const [searchText, setSearchText] = useState("");

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
                backgroundColor: "#fff",
                border: "none",
                borderRadius: "5px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1),0px -2px 4px rgba(0, 0, 0, 0.1)", 
                "& .MuiOutlinedInput-root": {

                "& fieldset": {
                        border: "none",       
                    },

                    paddingRight: "8px",
                },
                "& .MuiInputAdornment-root": {
                    color: "#858585",
                    marginRight: "8px",
                },
                "& input::placeholder": {
                    opacity: 0.6,
                }
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
