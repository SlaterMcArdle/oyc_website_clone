import { Grid, Typography, ThemeProvider, Link, Box } from '@mui/material';
import footerTheme from './footerStyles';
import grey from '@mui/material/colors/grey';

let Footer = () => {
    return (
        <Box sx={{backgroundColor: '#006E3A'}} py={2}>
            <ThemeProvider theme={footerTheme}>
                <Grid display="flex" container direction="row" justifyContent="start" alignItems="top"  color={grey}>
                    <Grid item xs={12} md={6}>
                        <Typography color="white">{"\u00A9"} 2023 Oceanside Yacht Club - All Right Reserved</Typography>
                        <Typography color="white" display="block">Inspiring seamanship through the Corinthian spirit.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography color="white">
                            1950 Harbor Dr N Oceanside, CA 92054 | 
                            <Link color="inherit" underline="hover" href="tel:760-722-5751">760-722-5751</Link> | 
                            <Link color="inherit" underline="hover" href="/">Privacy Policy</Link>
                        </Typography>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </Box>
    )
}

export default Footer;