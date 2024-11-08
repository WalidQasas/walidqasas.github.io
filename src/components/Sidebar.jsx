import { SidebarWrapper } from "./styles"
import { Typography, Box, List } from "@mui/material";
import FavoriteCountry from "./FavoriteCountry";
// Still not done (needs drag and drop and dynamic way of adding to the list)
function Sidebar({backgroundColorSecond, textColor}){
    return(
            <SidebarWrapper backgroundColorSecond={backgroundColorSecond} textColor={textColor} >
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
                        <FavoriteCountry textColor={textColor}/>
                        <FavoriteCountry textColor={textColor}/>
                    </List>
                </Box>
            </SidebarWrapper>
    )
}
export default Sidebar;