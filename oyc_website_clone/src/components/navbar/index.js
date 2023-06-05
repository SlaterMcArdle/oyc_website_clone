import * as React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Menu,
  MenuList,
  Box,
  Button,
  IconButton,
  MenuItem,
  Popper,
  ClickAwayListener,
  Paper,
  Grow,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import navTheme from "./navbarStyles";
import { ThemeProvider } from "@mui/system";

const pages = [
  "Calendar",
  "Racing",
  {
    page: "Juniors",
    subpages: ["Summer Sailing Camps", "Weekend & After School Sailing"],
  },
  "Activities",
  "Private Events",
  "About",
  "Contact",
];

let Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElJuniors, setAnchorElJuniors] = React.useState(null);
  const raceAnchorRef = React.useRef(null);
  const juniorAnchorRef = React.useRef(null);
  const activitiesAnchorRef = React.useRef(null);
  const aboutAnchorRef = React.useRef(null);

  const [raceOpen, setRaceOpen] = React.useState(false);
  const prevRaceOpen = React.useRef(raceOpen);
  const [juniorOpen, setJuniorOpen] = React.useState(false);
  const prevJuniorOpen = React.useRef(juniorOpen);
  const [activitiesOpen, setActivitiesOpen] = React.useState(false);
  const prevActivitiesOpen = React.useRef(activitiesOpen);
  const [aboutOpen, setAboutOpen] = React.useState(false);
  const prevAboutOpen = React.useRef(aboutOpen);  

//   Desktop Race Menu Functions
// #region
  const handleRaceToggle = () => {
    setRaceOpen((prevRaceOpen) => !prevRaceOpen);
  };

  const handleRaceClose = (event) => {
    if (raceAnchorRef.current && raceAnchorRef.current.contains(event.target)) {
      return;
    }
    setRaceOpen(false);
  };

  const handleRaceListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setRaceOpen(false);
    } else if (event.key === 'Escape') {
      setRaceOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    if (prevRaceOpen.current === true && raceOpen === false) {
        raceAnchorRef.current.focus();
    }
    prevRaceOpen.current = raceOpen;
  }, [raceOpen]);
// #endregion
  
//   Desktop Junior Menu Functions
// #region
  const handleJuniorToggle = () => {
    setJuniorOpen((prevJuniorOpen) => !prevJuniorOpen);
  };

  const handleJuniorClose = (event) => {
    if (juniorAnchorRef.current && juniorAnchorRef.current.contains(event.target)) {
      return;
    }
    setJuniorOpen(false);
  };

  const handleJuniorListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setJuniorOpen(false);
    } else if (event.key === 'Escape') {
      setJuniorOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    if (prevJuniorOpen.current === true && juniorOpen === false) {
        juniorAnchorRef.current.focus();
    }
    prevJuniorOpen.current = juniorOpen;
  }, [juniorOpen]);
//   #endregion

// Desktop Activities Menu Functions
// #region
const handleActivitiesToggle = () => {
    setActivitiesOpen((prevActivitiesOpen) => !prevActivitiesOpen);
  };

  const handleActivitiesClose = (event) => {
    if (activitiesAnchorRef.current && activitiesAnchorRef.current.contains(event.target)) {
      return;
    }
    setActivitiesOpen(false);
  };

  const handleActivitiesListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setActivitiesOpen(false);
    } else if (event.key === 'Escape') {
      setActivitiesOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    if (prevActivitiesOpen.current === true && activitiesOpen === false) {
        activitiesAnchorRef.current.focus();
    }
    prevActivitiesOpen.current = activitiesOpen;
  }, [activitiesOpen]);
//   #endregion

// Desktop About Menu Functions
// #region
const handleAboutToggle = () => {
    setAboutOpen((prevAboutOpen) => !prevAboutOpen);
  };

  const handleAboutClose = (event) => {
    if (aboutAnchorRef.current && aboutAnchorRef.current.contains(event.target)) {
      return;
    }
    setAboutOpen(false);
  };

  const handleAboutListKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setAboutOpen(false);
    } else if (event.key === 'Escape') {
      setAboutOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    if (prevAboutOpen.current === true && aboutOpen === false) {
        aboutAnchorRef.current.focus();
    }
    prevAboutOpen.current = aboutOpen;
  }, [aboutOpen]);
//   #endregion

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
      <AppBar position="static" color="secondary" sx={{height: '4rem'}}>
        <Container maxWidth="x1">
          <Toolbar sx={{height: '4rem'}}>
            {/* Mobile & tablet navbar */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon style={{ color: "#006E3A" }} />
              </IconButton>
              <Menu
                id="menu-navbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                keepMounted
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
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
                <MenuItem key="Calendar" onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Calendar</Typography>
                </MenuItem>
                <Menu
                  id="junior-menu"
                  key="Juniors"
                  anchorEl={anchorElJuniors}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                  keepMounted
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                >
                  <MenuItem
                    key="Summer_Sailing_Camps"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">
                      Summer Sailing Camps
                    </Typography>
                  </MenuItem>
                </Menu>
              </Menu>
            </Box>
            {/* Desktop navbar */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                height: '100%'
              }}
            >
              <Button
                key="Calendar"
                sx={{ color: "#006E3A", display: "block" }}
              >
                Calendar
              </Button>
              <Button
                key="Racing"
                id="race-button"
                sx={{ color: "#006E3A", display: "block" }}
                onClick={handleRaceToggle}
                ref={raceAnchorRef}
                aria-controls={raceOpen ? 'race-menu' : undefined}
                aria-expanded={raceOpen ? 'true' : undefined}
                aria-haspopup="true"
              >
                Racing
              </Button>
              <Button
                key="Juniors"
                id="junior-button"
                onClick={handleJuniorToggle}
                ref={juniorAnchorRef}
                aria-controls={juniorOpen ? 'junior-menu' : undefined}
                aria-expanded={juniorOpen ? 'true' : undefined}
                aria-haspopup="true"
                sx={{ color: "#006E3A", display: "block" }}
              >
                Juniors
              </Button>
              <Button
                key="Activities"
                id="activities-button"
                onClick={handleActivitiesToggle}
                ref={activitiesAnchorRef}
                aria-controls={activitiesOpen ? 'activities-menu' : undefined}
                aria-expanded={activitiesOpen ? 'true' : undefined}
                aria-haspopup="true"
                sx={{ color: "#006E3A", display: "block" }}
              >
                Activities
              </Button>
              <Button
                key="Private_Events"
                sx={{ color: "#006E3A", display: "block" }}
              >
                Private Events
              </Button>
              <Button
                key="About"
                id="about-button"
                onClick={handleAboutToggle}
                ref={aboutAnchorRef}
                aria-controls={aboutOpen ? 'about-menu' : undefined}
                aria-expanded={aboutOpen ? 'true' : undefined}
                aria-haspopup="true"
                sx={{ color: "#006E3A", display: "block" }}
              >
                About
              </Button>
              <Button
                key="Contact"
                sx={{ color: "#006E3A", display: "block" }}
              >
                Contact
              </Button>
              {/* Race Menu */}
              <Popper
                open={raceOpen}
                anchorEl={raceAnchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleRaceClose}>
                                <MenuList
                                    autoFocusItem={raceOpen}
                                    id="race-menu"
                                    aria-labelledby="race-button"
                                    onKeyDown={handleRaceListKeyDown}
                                >
                                    <MenuItem onClick={handleRaceClose}>Crew Page</MenuItem>
                                    <MenuItem onClick={handleRaceClose}>Course Charts</MenuItem>
                                    <MenuItem onClick={handleRaceClose}>OYC Boat Rental</MenuItem>
                                    <MenuItem onClick={handleRaceClose}>Race Management</MenuItem>
                                    <MenuItem onClick={handleRaceClose}>Deeds of Gifts and Other Docs</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
              </Popper>
              {/* Junior Menu */}
              <Popper
                open={juniorOpen}
                anchorEl={juniorAnchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleJuniorClose}>
                                <MenuList
                                    autoFocusItem={juniorOpen}
                                    id="junior-menu"
                                    aria-labelledby="junior-button"
                                    onKeyDown={handleJuniorListKeyDown}
                                >
                                    <MenuItem onClick={handleJuniorClose}>Summer Sailing Camps</MenuItem>
                                    <MenuItem onClick={handleJuniorClose}>Weekend & After School Sailing</MenuItem>
                                    <MenuItem onClick={handleJuniorClose}>High School Sailing</MenuItem>
                                    <MenuItem onClick={handleJuniorClose}>Recreational Sailing</MenuItem>
                                    <MenuItem onClick={handleJuniorClose}>Jr. Big Boat Sailing</MenuItem>
                                    <MenuItem onClick={handleJuniorClose}>Jr. Night Out</MenuItem>
                                    <MenuItem onClick={handleJuniorClose}>Jr. Learn to Sail</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
              </Popper>
              {/* Activities Menu */}
              <Popper
                open={activitiesOpen}
                anchorEl={activitiesAnchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleActivitiesClose}>
                                <MenuList
                                    autoFocusItem={activitiesOpen}
                                    id="activities-menu"
                                    aria-labelledby="activities-button"
                                    onKeyDown={handleActivitiesListKeyDown}
                                >
                                    <MenuItem onClick={handleActivitiesClose}>Learn to Sail</MenuItem>
                                    <MenuItem onClick={handleActivitiesClose}>Cruising Group</MenuItem>
                                    <MenuItem onClick={handleActivitiesClose}>Boating Education</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
              </Popper>
              {/* About Menu */}
              <Popper
                open={aboutOpen}
                anchorEl={aboutAnchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleAboutClose}>
                                <MenuList
                                    autoFocusItem={aboutOpen}
                                    id="about-menu"
                                    aria-labelledby="about-button"
                                    onKeyDown={handleAboutListKeyDown}
                                >
                                    <MenuItem onClick={handleAboutClose}>Facilities</MenuItem>
                                    <MenuItem onClick={handleAboutClose}>Celebrations, Festivals and Fundraisers</MenuItem>
                                    <MenuItem onClick={handleAboutClose}>OYC Member Events</MenuItem>
                                    <MenuItem onClick={handleAboutClose}>Members</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
              </Popper>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
