import { CountryCardTextWrapper, CountryCardWrapper } from "./styles";
import exampleImg from "../assets/flags/br.svg";
import { Typography, Box } from "@mui/material";

function CountryCard({ country }) {
    return (
        <CountryCardWrapper>
            <div>
                <img src={exampleImg} alt={`${country.name} Flag`} className="country-img" />
                <CountryCardTextWrapper>

                    <Typography variant="h2" sx={{ color: "#000", pb:"20px" }}>{country.name}</Typography>
                    
                    <Box display="flex" gap={1}>
                        <Typography variant="body1" sx={{ color: "#000" }}>Population:</Typography>
                        <Typography variant="body2" sx={{ color: "#000" }}>123,456,789</Typography>
                    </Box>

                    <Box display="flex" gap={1}>
                        <Typography variant="body1" sx={{ color: "#000" }}>Region:</Typography>
                        <Typography variant="body2" sx={{ color: "#000" }}>Example Region</Typography>
                    </Box>

                    <Box display="flex" gap={1}>
                        <Typography variant="body1" sx={{ color: "#000" }}>Capital:</Typography>
                        <Typography variant="body2" sx={{ color: "#000" }}>Example Capital</Typography>
                    </Box>
                </CountryCardTextWrapper>
            </div>
        </CountryCardWrapper>
    );
}

export default CountryCard;
