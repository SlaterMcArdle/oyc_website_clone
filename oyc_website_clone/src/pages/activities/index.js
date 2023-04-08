import { Container, Box, Typography, List, ListSubheader, ListItem } from "@mui/material";

let Activities = () => {
    return (
        <Container maxWidth="xl" sx={{justifyContent: 'middle'}}>
            <Box>
                <Typography variant={"h2"}>Activities</Typography>
                <List sx={{listStyleType: 'disc', width: '500px'}}>
                    <ListSubheader>OYC Activities</ListSubheader>
                    <ListItem sx={{display: 'list-item'}}>
                        Junior Program
                    </ListItem>
                    <ListItem sx={{display: 'list-item'}}>
                        Racing
                    </ListItem>
                    <ListItem sx={{display: 'list-item'}}>
                        OYC Member Events
                    </ListItem>
                    <ListItem sx={{display: 'list-item'}}>
                        Boater Education
                    </ListItem>
                    <ListItem sx={{display: 'list-item'}}>
                        Learn to Sail
                    </ListItem>
                    <ListItem sx={{display: 'list-item'}}>
                        OYC Cruisers
                    </ListItem>
                    <ListItem sx={{display: 'list-item'}}>
                        Celebrations, Festivals and Fundraisers
                    </ListItem>
                </List>
                <Typography>Click on any of the activities above for more information.</Typography>
            </Box>
        </Container>
    )
}

export default Activities;