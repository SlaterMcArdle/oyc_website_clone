import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        text: {
            primary: '#006E3A',
            secondary: '#FFFFFF',

        },
        typography: {
            fontFamily: 'Helvetica, Verdana, Arial, sans-serif'
        },
        primary: {
            main: '#000000',
            secondary: '#006E3A',
        }
    }
});

export default theme;