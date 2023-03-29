import * as React from 'react';
import { AppBar, Container, Toolbar, Typography, Menu, Box, Button, IconButton, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import navTheme from './navbarStyles';
import { ThemeProvider } from '@mui/system';

const pages = ['Calendar', 'Racing', {page: 'Juniors', subpages: ['Summer Sailing Camps', 'Weekend & After School Sailing']}, 'Activities', 'Private Events', 'About', 'Contact'];

let Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElJuniors, setAnchorElJuniors] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleOpenJuniorMenu = (event) => {
        setAnchorElJuniors(event.currentTarget);
    };

    const handleCloseJuniorMenu = () => {
        setAnchorElJuniors(null);
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
                                    {/* {pages.map((page) => {if(page.hasOwnProperty('page'))
                                        return <Menu key={page[0]}>
                                            {page.subpages.map((subPage) => (
                                                <MenuItem key={subPage} onClick={handleCloseNavMenu}>
                                                    <Typography textAlign="center">{subPage}</Typography>
                                                </MenuItem>
                                            ))} 
                                        </Menu>
                                        return <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                        </MenuItem>
                                    })} */}
                                    <MenuItem key='Calendar' onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">Calendar</Typography>
                                    </MenuItem>
                                    <Menu id="junior-menu" 
                                    key="Juniors" 
                                    anchorEl={anchorElJuniors}
                                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}} 
                                    keepMounted 
                                    open={Boolean(anchorElNav)} 
                                    onClose={handleCloseNavMenu}>
                                        <MenuItem key='Summer_Sailing_Camps' onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">Summer Sailing Camps</Typography>
                                        </MenuItem>
                                    </Menu>
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}} spacing={2}>
                            {/* {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'green ', display: 'block' }}
                            >
                                {page}
                            </Button>
                            ))} */}
                            <Button key="Calendar" onClick={handleCloseNavMenu} sx={{ my: 2, color: "#006E3A", display: 'block' }}>Calendar</Button>
                            <Button key="Racing" onClick={handleCloseNavMenu} sx={{ my: 2, color: "#006E3A", display: 'block' }}>Racing</Button>
                            <Button key="Juniors" onClick={handleOpenJuniorMenu} sx={{ my: 2, color: "#006E3A", display: 'block' }}>Juniors</Button>
                            <Button key="Activities" onClick={handleCloseNavMenu} sx={{ my: 2, color: "#006E3A", display: 'block' }}>Activities</Button>
                            <Button key="Private_Events" onClick={handleCloseNavMenu} sx={{ my: 2, color: "#006E3A", display: 'block' }}>Private Events</Button>
                            <Button key="About" onClick={handleCloseNavMenu} sx={{ my: 2, color: "#006E3A", display: 'block' }}>About</Button>
                            <Button key="Contact" onClick={handleCloseNavMenu} sx={{ my: 2, color: "#006E3A", display: 'block' }}>Contact</Button>
                        </Box>
                    </Toolbar> 
                </Container>
            </AppBar>
        </ThemeProvider>
        
    );
}

export default Navbar;