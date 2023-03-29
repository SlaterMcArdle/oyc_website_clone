import { createTheme } from '@mui/material/styles';

const bannerTheme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        }
    },
    typography: {
        fontFamily: 'Philosopher, sans-serif',
        color: "#006E3A",
    },
    spacing: 8
});

export default bannerTheme;