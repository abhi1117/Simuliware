import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import fourthImage from "./photos/reliabilityestimation.jpg";
import fifthImage from "./photos/availability.jpg";
import sixthImage from "./photos/reliability.jpg";

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
          Reliability Availability Estimation
        </span>
      </h6>
      <Grid container spacing={3}>
        {/* First Card */}
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
                height="280"
                width="450"
                image={fourthImage}
                alt="green"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Reliability Estimation
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Second Card */}
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
                height="280"
                image={fifthImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Availability Estimation
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Third Card */}
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
                height="280"
                image={sixthImage}
                alt="green igu"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Reliability
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
