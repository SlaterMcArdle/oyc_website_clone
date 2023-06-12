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
        "https://oceansideyc.net/wp-content/uploads/2023/06/2023-06-02_Bingo_Night.jpg",
      description: "Oceanside Yacht club Bingo Night",
    },
  ];

  return (
    <Grid container className="slideShowContainer">
        <Grid xs></Grid>
        <Grid xs={10} md={6} xl={5}>
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
    <div style={{ height: "400px", position: "relative" }}>
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
              style={{ objectFit: "contain", maxHeight: "400px", maxWidth: "100%" }}
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
  );
};

export default Slideshow;
