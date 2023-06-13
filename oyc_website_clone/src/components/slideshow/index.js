import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Grid } from "@mui/material";
import "./style.css";

let Slideshow = (props) => {
  let items = [
    {
      image:
        "https://oceansideyc.net/wp-content/uploads/2023/06/2023-06-02_Bingo_Night.jpg",
      description: "Oceanside Yacht club Bingo Night",
    },
    {
      image:
        "https://oceansideyc.net/wp-content/uploads/2023/06/2023-06-02_Taco_Thursday.jpg",
      description: "Oceanside Yacht club Taco Night",
    },
    {
      image:
        "https://oceansideyc.net/wp-content/uploads/2023/05/2023-05-16_Flag_Day.jpg",
      description: "National Flag Day",
    },
  ];

  return (
    <Grid container className="slideShowContainer">
      <Grid xs></Grid>
      <Grid xs={10} md={8} lg={11}>
        <Carousel height="400px" sx={{ maxWidth: "100vw" }}>
          {items.map((item, i) => (
            <Slide key={i} item={item} />
          ))}
        </Carousel>
      </Grid>
      <Grid xs></Grid>
    </Grid>
  );
};

let Slide = (props) => {
  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center" }}>Upcoming Events</Typography>
      <div class="slideShow" style={{ height: "400px", position: "relative" }}>
        <Paper>
          <Grid container spacing={0}>
            <Grid item xs>
              <div className="blurContainer">
                <img
                  className="blurredLeft"
                  src={props.item.image}
                  alt={props.item.description}
                  style={{ objectFit: "fill", maxHeight: "400px" }}
                />
              </div>
            </Grid>
            <Grid item xs="auto">
              <img
                src={props.item.image}
                alt={props.item.description}
                style={{
                  objectFit: "contain",
                  maxHeight: "400px",
                  maxWidth: "100%",
                }}
              />
            </Grid>
            <Grid item xs>
              <div className="blurContainer">
                <img
                  className="blurredRight"
                  src={props.item.image}
                  alt={props.item.description}
                  style={{ objectFit: "fill", maxHeight: "400px" }}
                />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Slideshow;
