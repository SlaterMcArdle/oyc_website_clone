import { createTheme } from '@mui/material/styles';

const activitiesTheme = createTheme({
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
            secondary: '#FFFFFF',
        },
        listsubheader: {
            main: '#006E3A',
            secondary: '#FFFFFF',
        }
    },
    spacing: 8
});

export default activitiesTheme;