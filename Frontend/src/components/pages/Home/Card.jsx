import * as React from "react";
import { Grid, styled } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import fourthImage from "./Pictures/3.jpg";
import fifthImage from "./Pictures/1.jpg";
import sixthImage from "./Pictures/2.jpg";
import SeventhImage from "./Pictures/4..jpg";
import "./styles.css";

// Styled card with gradient
const GradientCard = styled(Card)({
  position: "relative",
  borderRadius: "15px",
  overflow: "hidden",
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "5px",
    background: "linear-gradient(to right, #303F9F, #E53935, #03A9F4, #9575CD)",
    zIndex: 1,
  },
});

export default function Cards() {
  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        fontFamily: "Plus Jakarta Sans, Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#1A237E",
          fontSize: "30px",
          marginBottom: "20px",
          marginTop: "40px",
          textAlign: "center",
        }}
      >
        Run end-to-end engineering simulations in your{" "}
        <span style={{ color: "#FF0000" }}>Browser</span>
      </h2>

      {/* Additional text below the header */}
      <Typography
        variant="body1"
        style={{
          textAlign: "center",
          marginBottom: "140px",
          fontFamily: "Plus Jakarta Sans, Poppins, sans-serif",
        }}
      >
        Li Europan lingues es membres del sam familie. Lor separat existentie es
        un myth. Por scientie, musica, sport etc, litot Europa usa li sam
        vocabular.
      </Typography>

      {/* Grid of cards */}
      <Grid container spacing={3}>
        {/* First Card */}
        <Grid item xs={3}>
          <CardComponent
            title={<h4>CAD Import</h4>}
            image={fourthImage}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Grid>
        {/* Second Card - shifted up by 50px */}
        <Grid item xs={3} style={{ marginTop: "-80px" }}>
          <CardComponent
            title={<h4>Simulation Setup</h4>}
            image={fifthImage}
            text="Praesent non justo vel eros congue eleifend."
          />
        </Grid>
        {/* Third Card */}
        <Grid item xs={3}>
          <CardComponent
            title={<h4>Design Decision</h4>}
            image={sixthImage}
            text="Aenean eget est nec orci dapibus tristique."
          />
        </Grid>
        {/* Fourth Card - shifted up by 50px */}
        <Grid item xs={3} style={{ marginTop: "-80px" }}>
          <CardComponent
            title={<h4>Ready to Go</h4>}
            image={SeventhImage}
            text="Sed volutpat purus eget sem varius, id sollicitudin risus auctor."
          />
        </Grid>
      </Grid>
    </div>
  );
}

// CardComponent function component
const CardComponent = ({ image, title, text }) => {
  return (
    <GradientCard
      sx={{
        boxShadow: "2px 6px 8px 0 rgba(0.5, 0.5, 0.5, 0.2)",
        marginBottom: 4,
        transition: "transform 0.3s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            style={{ marginBottom: 10, fontFamily: "inherit" }}
          >
            {title}
          </Typography>
          <hr
            style={{
              margin: "8px 0",
              fontFamily: "Plus Jakarta Sans, Poppins, sans-serif",
            }}
          />{" "}
          {/* Horizontal line */}
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontFamily: "inherit" }}
          >
            {text}
          </Typography>
          <CardMedia
            component="img"
            image={image}
            alt="Card Image"
            style={{
              height: 250,
              objectFit: "cover",
              marginTop: 10,
              borderRadius: 13,
            }}
          />
        </CardContent>
      </CardActionArea>
    </GradientCard>
  );
};
