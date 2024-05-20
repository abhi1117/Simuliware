import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { red, blue } from "@mui/material/colors";
import admin from "../Pictures/admin.jpg";
import assignment from "../Pictures/assignment.jpg";
import support from "../Pictures/support.jpg";
import "./styles.css";

const Features = () => {
  const fontFamily = "'Plus Jakarta Sans', 'Poppins', sans-serif";

  const ellipsisStyles = {
    position: "relative",
    display: "inline-block",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-70%)",
      width: "25px",
      height: "25px",
      borderRadius: "50%",
      fontFamily: fontFamily,
      fontWeight: 650,
    },
    "&::before": {
      left: "-60px",
      top: "10px",
      backgroundColor: red[500], // Red color for the first ellipsis
    },
    "&::after": {
      right: "-55px",
      top: "80px",
      backgroundColor: blue[500], // Blue color for the second ellipsis
    },
  };

  return (
    <Box sx={{ paddingX: 6 }}>
      {" "}
      {/* Add padding here */}
      <Grid
        container
        spacing={{ xs: 4, sm: 4, md: 0 }}
        sx={{
          py: 0,
          paddingTop: 7,
          paddingBottom: 4,
          borderRadius: 8,
          marginTop: 40,
          background:
            "linear-gradient(to right, #E0C4FF,#E5CFFE,#ECDCFE,#F1E4FF)",
          width: "80%",
          fontFamily: fontFamily,
        }}
      >
        {/* Left side: Content */}
        <Grid item xs={12} sm={8} md={6} component="section">
          <Box
            component="article"
            sx={{
              px: 6,
              py: 9,
              marginBottom: 5,
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                ...ellipsisStyles,
                color: "#8630E8",
                fontWeight: "900",
                lineHeight: "1.45",
              }}
            >
              <span>Best Features</span>
              <br />
              <span
                style={{
                  color: "black",
                  fontFamily: fontFamily,
                }}
              >
                We Can Provide
              </span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: fontFamily,
                color: "#464647",
              }}
            >
              Our platform ensures you're always in the loop with continuous
              simulation possibilities!
            </Typography>
          </Box>
        </Grid>

        {/* Right side: Figma-style Frames */}
        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Frame 1 */}
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "white", // White background color for content
              width: 430,
              marginBottom: 2,
              borderRadius: 3,
              border: `2px solid #8630E8`, // Red border color
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateX(-25px)",
                cursor: "pointer",
              },
              fontFamily: fontFamily,
            }}
          >
            {/* Content inside the frame */}
            <Box p={2} display="flex" alignItems="center">
              <img
                src={admin}
                alt="Admin"
                style={{
                  width: "100%",
                  maxWidth: 60,
                  borderRadius: 3,
                }}
              />
              <Typography
                variant="body2"
                ml={2}
                sx={{ fontFamily: fontFamily }}
              >
                <h4>Cloud Native</h4>
                Random text for frame 1. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </Typography>
            </Box>
          </Paper>

          {/* Frame 2 */}
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "white", // White background color for content
              width: 430,
              marginBottom: 2,
              borderRadius: 3,
              border: `2px solid #0277BD`, // Red border color
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateX(-25px)",
                cursor: "pointer",
              },
              fontFamily: fontFamily,
            }}
          >
            {/* Content inside the frame */}
            <Box p={2} display="flex" alignItems="center">
              <img
                src={assignment}
                alt="Assignment"
                style={{
                  width: "100%",
                  maxWidth: 60,
                  borderRadius: 3,
                }}
              />
              <Typography
                variant="body2"
                ml={2}
                sx={{ fontFamily: fontFamily }}
              >
                <h4>Real-time Collaboration</h4>
                Random text for frame 2. Consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Box>
          </Paper>

          {/* Frame 3 */}
          <Paper
            elevation={3}
            sx={{
              backgroundColor: "white", // White background color for content
              width: 430,
              marginBottom: 2,
              borderRadius: 3,
              border: `2px solid #1A237E`, // Red border color
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateX(-25px)",
                cursor: "pointer",
              },
              fontFamily: fontFamily,
            }}
          >
            {/* Content inside the frame */}
            <Box p={2} display="flex" alignItems="center">
              <img
                src={support}
                alt="Support"
                style={{
                  width: "100%",
                  maxWidth: 60,
                  borderRadius: 3,
                }}
              />
              <Typography
                variant="body2"
                ml={2}
                sx={{ fontFamily: fontFamily }}
              >
                <h4>Any Scale</h4>
                Random text for frame 3. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
