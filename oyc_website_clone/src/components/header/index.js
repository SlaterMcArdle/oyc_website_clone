import { Typography, Grid, Box, Link } from "@mui/material"

export default function Header() {
    return (
        <Grid container spacing={2} sx={{px: 2}}>
            <Grid item xs={12} md={6}>
                <a href="/">
                    <img src={process.env.PUBLIC_URL + "/Oceanside_Yacht_Club_Logo_150x79.jpg"} alt="OYC Logo"/>
                </a>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box display='flex' justifyContent={{xs:'center'}} px={10} sx={{height: 1, alignItems: 'center'}}>
                    <Typography align="right" color="textPrimary">Call Us Today <Link color="inherit" underline="hover" href="tel:760-722-5751" alt="Call 760-722-5751">760-723-5751</Link></Typography>
                </Box>
            </Grid>
        </Grid>
    )
};