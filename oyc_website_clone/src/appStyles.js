import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        text: {
            primary: '#006E3A',
            secondary: '#FFFFFF',
        },
        primary: {
            main: '#006E3A',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: 'Helvetica, Verdana, Arial, sans-serif'
    },
});

export default theme;