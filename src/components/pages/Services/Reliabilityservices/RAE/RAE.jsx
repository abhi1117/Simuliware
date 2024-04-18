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
        paddingTop: "20px",
        marginLeft: "150px",
      }}
    >
      <h2
        style={{
          color: "#BC1E1E",
          paddingBottom: "10px",
          textAlign: "center",
          fontSize: "30px",
        }}
      >
        Reliability Solutions
      </h2>
      <h6
        style={{
          paddingBottom: "40px",
          color: "#d14a3b",
          paddingTop: "15px",
          textDecoration: "underline",
          fontSize: "24px",
        }}
      >
        Reliability Availability Estimation
      </h6>
      <Grid container spacing={3}>
        {/* First Card */}
        <Grid item xs={4}>
          <Card
            sx={{
              maxWidth: 480,
              borderRadius: "15px",
              marginBottom: "40px",
              boxShadow: "2px 6px 8px 0 rgba(0.5,0.5,0.5,2)",
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
              boxShadow: "2px 6px 8px 0 rgba(0.5,0.5,0.5,2)",
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
              boxShadow: "2px 6px 8px 0 rgba(0.5,0.5,0.5,2)",
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
