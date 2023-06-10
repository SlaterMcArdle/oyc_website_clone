import * as React from "react";
import { NavLink } from "react-router-dom";
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
  Link,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
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
  // Variable Declarations
  // #region
  const navAnchorRef = React.useRef(null);

  const [navOpen, setNavOpen] = React.useState(false);
  const prevNavOpen = React.useRef(navOpen);
  const [raceDropOpen, setRaceDropOpen] = React.useState(false);
  const [juniorDropOpen, setJuniorDropOpen] = React.useState(false);
  const [activitiesDropOpen, setActivitiesDropOpen] = React.useState(false);
  const [aboutDropOpen, setAboutDropOpen] = React.useState(false);

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
  // #endregion

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
    if (event.key === "Tab") {
      event.preventDefault();
      setRaceOpen(false);
    } else if (event.key === "Escape") {
      setRaceOpen(false);
    }
  };

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
    if (
      juniorAnchorRef.current &&
      juniorAnchorRef.current.contains(event.target)
    ) {
      return;
    }
    setJuniorOpen(false);
  };

  const handleJuniorListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setJuniorOpen(false);
    } else if (event.key === "Escape") {
      setJuniorOpen(false);
    }
  };

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
    if (
      activitiesAnchorRef.current &&
      activitiesAnchorRef.current.contains(event.target)
    ) {
      return;
    }
    setActivitiesOpen(false);
  };

  const handleActivitiesListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setActivitiesOpen(false);
    } else if (event.key === "Escape") {
      setActivitiesOpen(false);
    }
  };

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
    if (
      aboutAnchorRef.current &&
      aboutAnchorRef.current.contains(event.target)
    ) {
      return;
    }
    setAboutOpen(false);
  };

  const handleAboutListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setAboutOpen(false);
    } else if (event.key === "Escape") {
      setAboutOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  React.useEffect(() => {
    if (prevAboutOpen.current === true && aboutOpen === false) {
      aboutAnchorRef.current.focus();
    }
    prevAboutOpen.current = aboutOpen;
  }, [aboutOpen]);
  //   #endregion

  const handleNavToggle = (event) => {
    setRaceDropOpen(false);
    setJuniorDropOpen(false);
    setActivitiesDropOpen(false);
    setAboutDropOpen(false);
    setNavOpen((prevNavOpen) => !prevNavOpen);
  };

  const handleNavClose = (event) => {
    if (
      navAnchorRef.current &&
      navAnchorRef.current.contains(event.target)
    ) {
      return;
    }
    setNavOpen(false);
  };

  const handleNavListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      setNavOpen(false);
    } else if (event.key === "Escape") {
      setNavOpen(false);
    }
  };

  const handleRaceDropToggle = () => {
    setJuniorDropOpen(false);
    setActivitiesDropOpen(false);
    setAboutDropOpen(false);
    setRaceDropOpen((prevRaceDropOpen) => !prevRaceDropOpen);
  };

  const handleJuniorDropToggle = () => {
    setRaceDropOpen(false);
    setActivitiesDropOpen(false);
    setAboutDropOpen(false);
    setJuniorDropOpen((prevJuniorDropOpen) => !prevJuniorDropOpen);
  };

  const handleActivitiesDropToggle = () => {
    setRaceDropOpen(false);
    setJuniorDropOpen(false);
    setAboutDropOpen(false);
    setActivitiesDropOpen((prevActivitiesDropOpen) => !prevActivitiesDropOpen);
  };

  const handleAboutDropToggle = () => {
    setRaceDropOpen(false);
    setJuniorDropOpen(false);
    setActivitiesDropOpen(false);
    setAboutDropOpen((prevAboutDropOpen) => !prevAboutDropOpen);
  };

  return (
    <ThemeProvider theme={navTheme}>
      <AppBar position="static" color="secondary" sx={{ height: "4rem" }}>
        <Container maxWidth="x1">
          <Toolbar sx={{ height: "4rem" }}>
            {/* Mobile & tablet navbar */}
            <Box sx={{ 
                flexGrow: 1, 
                display: { xs: "flex", md: "none" },
                height: "100%"
              }}
            >
              <IconButton
                size="large"
                aria-controls={raceOpen ? "nav-menu" : undefined}
                aria-expanded={raceOpen ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleNavToggle}
                ref = {navAnchorRef}
              >
                <MenuIcon style={{ color: "#006E3A" }} />
              </IconButton>
              <Popper
              open={navOpen}
              anchorEl={navAnchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              sx={{minWidth: "325px", maxWidth: "100vw !important", zIndex: 10}}
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleNavClose}>
                        <MenuList
                          autoFocusItem={navOpen}
                          id="nav-menu"
                          aria-labelledby="race-button"
                          onKeyDown={handleNavListKeyDown}
                          sx={{ display: { xs: "block", md: "none" } }}
                        >
                          <MenuItem key="Calendar" onClick={handleNavClose}>
                            <Typography textAlign="center">Calendar</Typography>
                          </MenuItem>
                          <MenuItem onClick={handleRaceDropToggle}>
                            Racing
                            {raceDropOpen ? <ExpandLess /> : <ExpandMore />}
                          </MenuItem>
                          <Collapse
                            in={raceDropOpen}
                            timeout="auto"
                            unmountOnExit
                            sx={{backgroundColor: "#EFEFEF"}}
                          >
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Crew Page
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Course Charts
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              OYC Boat Rental
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Race Management
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Deeds of Gifts and Other Docs
                            </MenuItem>
                          </Collapse>
                          <MenuItem onClick={handleJuniorDropToggle}>
                            Juniors
                            {juniorDropOpen ? <ExpandLess /> : <ExpandMore />}
                          </MenuItem>
                          <Collapse
                            in={juniorDropOpen}
                            timeout="auto"
                            unmountOnExit
                            sx={{backgroundColor: "#EFEFEF"}}
                          >
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Summer Sailing Camps
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Weekend & After School Sailing
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              High School Sailing
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Recreational Sailing
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Jr. Big Boat Sailing
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Jr. Night Out
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Jr. Learn to Sail
                            </MenuItem>
                          </Collapse>
                          <MenuItem onClick={handleActivitiesDropToggle}>
                            Activities
                            {activitiesDropOpen ? (
                              <ExpandLess />
                            ) : (
                              <ExpandMore />
                            )}
                          </MenuItem>
                          <Collapse
                            in={activitiesDropOpen}
                            timeout="auto"
                            unmountOnExit
                            sx={{backgroundColor: "#EFEFEF"}}
                          >
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Learn to Sail
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Cruising Group
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Boating Education
                            </MenuItem>
                          </Collapse>
                          <MenuItem onClick={handleNavClose}>
                            Private Events
                          </MenuItem>
                          <MenuItem onClick={handleAboutDropToggle}>
                            About
                            {aboutDropOpen ? <ExpandLess /> : <ExpandMore />}
                          </MenuItem>
                          <Collapse
                            in={aboutDropOpen}
                            timeout="auto"
                            unmountOnExit
                            sx={{backgroundColor: "#EFEFEF"}}
                          >
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Facilities
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Celebrations, Festivals and Fundraisers
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              OYC Member Events
                            </MenuItem>
                            <MenuItem
                              component={Link}
                              href="/activities"
                              onClick={handleNavClose}
                            >
                              Members
                            </MenuItem>
                          </Collapse>
                          <MenuItem onClick={handleNavClose}>
                            Contact
                          </MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </Box>
            {/* Desktop navbar */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                height: "100%",
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
                aria-controls={raceOpen ? "race-menu" : undefined}
                aria-expanded={raceOpen ? "true" : undefined}
                aria-haspopup="true"
              >
                Racing
              </Button>
              <Button
                key="Juniors"
                id="junior-button"
                onClick={handleJuniorToggle}
                ref={juniorAnchorRef}
                aria-controls={juniorOpen ? "junior-menu" : undefined}
                aria-expanded={juniorOpen ? "true" : undefined}
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
                aria-controls={activitiesOpen ? "activities-menu" : undefined}
                aria-expanded={activitiesOpen ? "true" : undefined}
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
                aria-controls={aboutOpen ? "about-menu" : undefined}
                aria-expanded={aboutOpen ? "true" : undefined}
                aria-haspopup="true"
                sx={{ color: "#006E3A", display: "block" }}
              >
                About
              </Button>
              <Button key="Contact" sx={{ color: "#006E3A", display: "block" }}>
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
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
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
                          <MenuItem onClick={handleRaceClose}>
                            Crew Page
                          </MenuItem>
                          <MenuItem onClick={handleRaceClose}>
                            Course Charts
                          </MenuItem>
                          <MenuItem onClick={handleRaceClose}>
                            OYC Boat Rental
                          </MenuItem>
                          <MenuItem onClick={handleRaceClose}>
                            Race Management
                          </MenuItem>
                          <MenuItem onClick={handleRaceClose}>
                            Deeds of Gifts and Other Docs
                          </MenuItem>
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
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
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
                          <MenuItem onClick={handleJuniorClose}>
                            Summer Sailing Camps
                          </MenuItem>
                          <MenuItem onClick={handleJuniorClose}>
                            Weekend & After School Sailing
                          </MenuItem>
                          <MenuItem onClick={handleJuniorClose}>
                            High School Sailing
                          </MenuItem>
                          <MenuItem onClick={handleJuniorClose}>
                            Recreational Sailing
                          </MenuItem>
                          <MenuItem onClick={handleJuniorClose}>
                            Jr. Big Boat Sailing
                          </MenuItem>
                          <MenuItem onClick={handleJuniorClose}>
                            Jr. Night Out
                          </MenuItem>
                          <MenuItem onClick={handleJuniorClose}>
                            Jr. Learn to Sail
                          </MenuItem>
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
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
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
                          <MenuItem
                            component={Link}
                            href="/activities"
                            onClick={handleActivitiesClose}
                          >
                            Learn to Sail
                          </MenuItem>
                          <MenuItem onClick={handleActivitiesClose}>
                            Cruising Group
                          </MenuItem>
                          <MenuItem onClick={handleActivitiesClose}>
                            Boating Education
                          </MenuItem>
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
                        placement === "bottom-start"
                          ? "left top"
                          : "left bottom",
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
                          <MenuItem onClick={handleAboutClose}>
                            Facilities
                          </MenuItem>
                          <MenuItem onClick={handleAboutClose}>
                            Celebrations, Festivals and Fundraisers
                          </MenuItem>
                          <MenuItem onClick={handleAboutClose}>
                            OYC Member Events
                          </MenuItem>
                          <MenuItem onClick={handleAboutClose}>
                            Members
                          </MenuItem>
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
