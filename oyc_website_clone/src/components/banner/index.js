import './style.css';
import {Typography, ThemeProvider, Box, Container, Button, Grid} from '@mui/material';
import bannerTheme from './bannerStyles';

let Banner = () => {
    return (
        <div className="banner">
            <Container justifyContent="center"
                    alignItems="center" sx={{display: 'flex', height: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Box >
                    <ThemeProvider theme={bannerTheme}>
                        <Grid container direciont="column" justifyContent="center" alignItems="center" spacing={3}>
                            <Grid item>
                                <Typography variant="h2" color="white">
                                    Welcome to Oceanside Yacht Club
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h4" color="white">
                                    Yachting & Sailing At Its Finest
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button href="/" color="primary" variant="contained">
                                    <Typography sx={{fontFamily: 'Arial', textTransform: 'none'}} color="#006E3A">Membership Benefits</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </Box>
            </Container>
        </div>
    )
}

export default Banner;