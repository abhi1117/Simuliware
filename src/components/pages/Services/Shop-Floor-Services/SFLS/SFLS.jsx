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
        Shop Floor Layout Simulation
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
              boxShadow: "2px 6px 8px 0 rgba(0.5,0.5,0.5,2)",
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
              boxShadow: "2px 6px 8px 0 rgba(0.5,0.5,0.5,2)",
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
