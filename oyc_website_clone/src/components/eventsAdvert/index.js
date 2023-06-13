import { Box, Typography, Stack, List, ListItem } from "@mui/material";
import "./style.css";

let EventsAdvert = () => {
  return (
    <Box class="eventsContainer">
      <Typography varant="h4" color="secondary" sx={{ textAlign: "center" }}>
        Private Events
      </Typography>
      <Typography varant="h5" color="secondary" sx={{ textAlign: "center" }}>
        Experience Your Next Lifetime Moments
      </Typography>
      <Typography varant="h6" color="secondary" sx={{ textAlign: "center" }}>
        At the Oceanside Yacht Club Banquet Room with spectacular views of the
        harbor, palms trees and the beautiful pacific ocean with it's marvelous
        scenery.
      </Typography>
      <Typography varant="h6" color="secondary" sx={{ textAlign: "center" }}>
        Our friendly, creative and talented team is ready to make your next
        event a success.
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <List
          sx={{
            listStyleType: "disc",
          }}
        >
          <ListItem>
            <Typography variant="h6" color="secondary">
              Wedding Receptions
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="h6" color="secondary">
              Bridal Showers
            </Typography>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default EventsAdvert;
