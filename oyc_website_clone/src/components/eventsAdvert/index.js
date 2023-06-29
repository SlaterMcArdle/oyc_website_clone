import { Box, Typography, Stack, List, ListItem } from "@mui/material";
import "./style.css";

let EventsAdvert = () => {
  return (
    <div className="eventsBackground">
      <Box className="eventsContainer">
        <Box className="eventsContent">
          <Typography
            variant="h4"
            color="secondary"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Private Events
          </Typography>
          <Typography
            variant="h5"
            color="secondary"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Experience Your Next Lifetime Moments
          </Typography>
          <Typography
            variant="h6"
            color="secondary"
            sx={{ textAlign: "center", mb: 2 }}
          >
            At the Oceanside Yacht Club Banquet Room with spectacular views of
            the harbor, palms trees and the beautiful pacific ocean with it's
            marvelous scenery.
          </Typography>
          <Typography
            variant="h6"
            color="secondary"
            sx={{ textAlign: "center", mb: 2 }}
          >
            Our friendly, creative and talented team is ready to make your next
            event a success.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            <List
              sx={{
                listStyleType: "disc",
              }}
              spacing={{xs: 2, sm: 0}}
            >
              <ListItem className="eventItem">
                <Typography variant="h6" color="secondary">
                  Wedding Receptions
                </Typography>
              </ListItem>
              <ListItem className="eventItem">
                <Typography variant="h6" color="secondary">
                  Bridal Showers
                </Typography>
              </ListItem>
              <ListItem className="eventItem">
                <Typography variant="h6" color="secondary">
                  Birthday Celebrations
                </Typography>
              </ListItem>
            </List>
            <List
              sx={{
                listStyleType: "disc",
              }}
            >
              <ListItem className="eventItem">
                <Typography variant="h6" color="secondary">
                  Graduations
                </Typography>
              </ListItem>
              <ListItem className="eventItem">
                <Typography variant="h6" color="secondary">
                  Business Meetings
                </Typography>
              </ListItem>
              <ListItem className="eventItem">
                <Typography variant="h6" color="secondary">
                  Corporate Events
                </Typography>
              </ListItem>
            </List>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default EventsAdvert;
