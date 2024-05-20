import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import seventhImage from "./photos/7.jpg";
import eighthImage from "./photos/8.jpg";
import ninthImage from "./photos/9.jpg";

export default function ALS() {
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
          Assembly Line Simulation
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
                image={seventhImage}
                alt="green"
                style={{ height: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Textile Manufacturing Layout
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
                image={eighthImage}
                alt="green iguana"
                style={{ height: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Furniture Manufacturing Layout
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
                image={ninthImage}
                alt="green igu"
                style={{ height: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Conveyor-based Manufacturing Layout
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
