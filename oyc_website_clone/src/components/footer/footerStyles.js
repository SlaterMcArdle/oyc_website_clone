import { createTheme } from '@mui/material/styles';

const footerTheme = createTheme({
    palette: {
        text: {
            primary: '#FFFFFF',
            secondary: '#006E3A',

        },
        typography: {
            footer: {
                fontFamily: 'Helvetica, Verdana, Arial, sans-serif',
                fontSize: '.75rem',
                color: '#FFFFFF'
            }
        },
        primary: {
            main: '#006E3A',
            secondary: '#FFFFFF',
        }
    },
    spacing: 8
});

export default footerTheme;