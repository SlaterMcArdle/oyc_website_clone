import { Typography, Box, Button } from "@mui/material";

let RacingAdvert = () => {
    return (
        <Box sx={{backgroundColor: "#9E9E9E", width: "100vw", padding: "3rem"}}>
            <Typography color="secondary" variant="h4" sx={{ textAlign: "center" }}>Feel The Adrenaline Rush of Racing</Typography>
            <Typography color="secondary" variant="h6"  sx={{textAlign: "center"  }}>Enjoy the thrills, the memories and excitement of racing with Oceanside Yacht Club</Typography>
            <Typography color="secondary" variant="h6" sx={{textAlign: "center"  }}>Whether you have your own boat or are looking for a boat for your crew, we are here to help you.  We provide you with information and knowledge about activities and events so you can get out on the water.</Typography>
            <Button href="/racing" color="primary" variant="contained" sx={{marginTop: "2rem"}}>Learn More</Button>
        </Box>
    )
};

export default RacingAdvert;