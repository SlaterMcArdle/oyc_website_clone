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
            main: '#FFFFFF',
            secondary: '#006E3A',
        }
    }
});

export default navTheme;