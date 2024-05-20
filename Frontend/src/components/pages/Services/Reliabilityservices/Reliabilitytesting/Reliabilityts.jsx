import * as React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import seventhImage from "./photos/rss.jpg";
import eighthImage from "./photos/confidence.jpg";
import ninthImage from "./photos/variation.jpg";

export default function ReliabilityTesting() {
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
          Reliability Testing
        </span>
      </h6>

      <Grid container spacing={3}>
        {/* First card */}
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
                style={{
                  maxHeight: 300,
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  Reliability vs Sample Size for Single R Value
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
                image={eighthImage}
                alt="green iguana"
                style={{
                  maxHeight: 330,
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
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
                image={ninthImage}
                alt="green igu"
                style={{
                  maxHeight: 300,
                  maxWidth: "100%",
                  objectFit: "cover",
                }}
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
