import { SidebarWrapper } from "./styles"
import { Typography, Box, List } from "@mui/material";
import FavoriteCountry from "./FavoriteCountry";

function Sidebar(){
    return(
        <SidebarWrapper>
            <Typography variant="h6" >
                Favourites
            </Typography>
            <Box
                sx={{
                    maxHeight: 200,
                    overflowY: 'auto',
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