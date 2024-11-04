import { SidebarWrapper } from "./styles"
import { Typography, Box, List } from "@mui/material";
import FavoriteCountry from "./FavoriteCountry";

function Sidebar(){
    return(
        <SidebarWrapper>
            <Typography variant="h2" >
                Favourites
            </Typography>
            <Box
                sx={{
                    overflowY: 'auto',
                    width: '230px',
                }}
            >
                <List>
                    <FavoriteCountry />
                    <FavoriteCountry />
                </List>
            </Box>
        </SidebarWrapper>
    )
}
export default Sidebar;