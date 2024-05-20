import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import fourthImage from "./photos/4.jpg";
import fifthImage from "./photos/5.jpg";
import sixthImage from "./photos/6.jpg";

export default function Reliabilitycard() {
  return (
    <div
      style={{
        textAlign: "center",
        marginRight: "100px",
        paddingTop: "0px",
        marginLeft: "150px",
      }}
    >
      <h6
        style={{
          paddingBottom: "30px",
          paddingRight: "100px",
          fontSize: "24px",
        }}
      >
        <span
          style={{
            background: "linear-gradient(to right, #E8309E, #8630E8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Shop Floor Layout Simulation
        </span>
      </h6>
      {/* First Card*/}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 480,
              borderRadius: "15px",
              marginBottom: "40px",
              boxShadow: "1.5px 2px 6px 0 rgba(0.1,0.1,0.1,1)",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.07)" },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={fourthImage}
                alt="green"
                style={{ maxHeight: 300, maxWidth: "100%", objectFit: "fill" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Reliability vs Sample Size for Single R Value
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 480,
              borderRadius: "15px",
              marginBottom: "40px",
              boxShadow: "1.5px 2px 6px 0 rgba(0.1,0.1,0.1,1)",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.07)" },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={fifthImage}
                alt="green iguana"
                style={{ maxHeight: 300, maxWidth: "100%", objectFit: "fill" }}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  paddingBottom="35px"
                >
                  Confidence Level vs Sample Size
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 480,
              borderRadius: "15px",
              marginBottom: "40px",
              boxShadow: "1.5px 2px 6px 0 rgba(0.1,0.1,0.1,1)",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.07)" },
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                image={sixthImage}
                alt="green igu"
                style={{ maxHeight: 300, maxWidth: "100%", objectFit: "fill" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Reliability vs Sample Size for Multiple R Values
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
