import * as React from 'react';
import { AppBar, Container, Toolbar, Typography, Menu, Box, Button, IconButton, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import navTheme from './navbarStyles';
import { ThemeProvider } from '@mui/system';

const pages = ['Calendar', 'Racing', 'Juniors', 'Activities', 'Private Events', 'About', 'Contact'];

let Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <ThemeProvider theme={navTheme}>
            <AppBar position="static" color="primary">
                <Container maxWidth="x1">
                    <Toolbar>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}>
                                    <MenuIcon style={{color: "#006E3A"}} />
                                </IconButton>
                            <Menu 
                                id="menu-navbar" 
                                anchorEl={anchorElNav} 
                                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
                                keepMounted transformOrigin={{vertical: 'top', horizontal: 'left'}} 
                                open={Boolean(anchorElNav)} 
                                onClose={handleCloseNavMenu} 
                                sx={{display: {xs: 'block', md: 'none'},}}>
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    ))}
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'green ', display: 'block' }}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>
                    </Toolbar> 
                </Container>
            </AppBar>
        </ThemeProvider>
        
    );
}

export default Navbar;