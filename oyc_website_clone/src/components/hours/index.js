import {Typography, ThemeProvider, Box, Container, Button, Grid} from '@mui/material';
import "./style.css";

let Hours = () => {
    return (
        <div className="hours">
            <Container justifyContent="center"
                    alignItems="center" sx={{display: 'flex', height: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Box >
                    <img class="hoursImage" src="https://i0.wp.com/oceansideyc.net/wp-content/uploads/2023/04/2023-03-21_Hours_of_Operation_OYC-scaled.jpg?resize=1187%2C1536&ssl=1" alt="hours flyer"></img>
                </Box>
            </Container>
        </div>
    )
}

export default Hours;