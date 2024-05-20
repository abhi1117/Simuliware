import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import firstImage from "./photos/first.jpg";
import secondImage from "./photos/second.jpg";
import thirdImage from "./photos/third.jpg";
import "./Lifedata.css";
import { Gradient } from "@mui/icons-material";

export default function Lifedatacard() {
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
          Life Data Analysis
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
                image={firstImage}
                alt="green"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Reliability vs Time
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
                image={secondImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Probability Density Function
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
                image={thirdImage}
                alt="green igu"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Unreliability vs Time
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
