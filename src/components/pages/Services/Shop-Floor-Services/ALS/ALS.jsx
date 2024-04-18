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
        Shop Floor Planning Solutions
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
        Assembly Line Simulation
      </h6>
      {/* First Card*/}
      <Grid container spacing={3}>
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
              boxShadow: "2px 6px 8px 0 rgba(0.5,0.5,0.5,2)",
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
              boxShadow: "2px 6px 8px 0 rgba(0.5,0.5,0.5,2)",
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
