import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import "./styles.css";

const Support = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #E8309E, #8630E8)",
        padding: "60px",
        fontFamily: "Plus Jakarta Sans, Poppins, sans-serif",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              fontSize: "45px",
              fontWeight: 600,
              lineHeight: 1.35,
              fontFamily: "Plus Jakarta Sans, Poppins, sans-serif",
              paddingLeft: "75px",
            }}
          >
            Proven in millions of simulations across various industries and
            applications
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", justifyContent: "flex-end" }} // Adjusted to move paragraph to the right
        >
          <Typography
            variant="body1"
            sx={{
              color: "#FFFFFF",
              textAlign: "left",
              paddingRight: "70px",
              maxWidth: "412px",
              fontWeight: 400,
              fontFamily: "Plus Jakarta Sans, Poppins, sans-serif",
            }}
          >
            Industrial asset data helps anticipate performance and behaviour.
            Data allows simulation, optimisation, and analytics. Commercially
            available solutions are very expensive for any company, particularly
            SMEs. IIT Indore is developing Simuliware as a low-cost tool for
            such analysis. Pay-per-use is possible.IIT Indore is developing
            Simuliware as a low-cost tool for such analysis. Pay-per-use is
            possible
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        marginTop={4}
        marginLeft={"65px"}
        marginRight={"65px"}
      >
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 2.4,
              backgroundColor: "transparent",
              borderRadius: 4,
              border: "2px solid #FFFFFF", // Set border to white
              height: "52px",
              width: "150px",
              color: "#FFFFFF",
              cursor: "pointer",
              textAlign: "center",
              fontWeight: 900,
            }}
          >
            <span style={{ fontSize: "25px" }}>
              521
              <br />
            </span>{" "}
            Clients
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 2.4,
              backgroundColor: "transparent",
              borderRadius: 4,
              border: "2px solid #FFFFFF", // Set border to white
              height: "50px",
              width: "150px",
              cursor: "pointer",
              color: "#FFFFFF",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: "25px" }}>
              147 Hr
              <br />
            </span>{" "}
            Support
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 2.4,
              backgroundColor: "transparent",
              borderRadius: 4,
              border: "2px solid #FFFFFF", // Set border to white
              height: "52px",
              width: "150px",
              cursor: "pointer",
              color: "#FFFFFF",
              textAlign: "center",
              fontWeight: 900,
            }}
          >
            <span style={{ fontSize: "25px" }}>
              12
              <br />
            </span>{" "}
            Cities
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 2.4,
              backgroundColor: "transparent",
              borderRadius: 4,
              border: "2px solid #FFFFFF", // Set border to white
              height: "50px",
              width: "150px",
              color: "#FFFFFF",
              cursor: "pointer",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            <span style={{ fontSize: "25px" }}>
              15
              <br />
            </span>{" "}
            Team Members
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Support;
