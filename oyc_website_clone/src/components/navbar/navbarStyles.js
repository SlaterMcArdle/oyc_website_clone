import { createTheme } from '@mui/material/styles';

const navTheme = createTheme({
    palette: {
        text: {
            primary: '#006E3A',
            secondary: '#FFFFFF',

        },
        typography: {
            fontFamily: 'Helvetica, Verdana, Arial, sans-serif'
        },
        primary: {
            main: '#006E3A',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    spacing: 8
});

export default navTheme;