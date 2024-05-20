import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import headerImg from "./Pictures/backgroundimage.jpg";
import { red, blue} from "@mui/material/colors";

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    minWidth: "120vh",
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(0),
    paddingTop: theme.spacing(0),
    backgroundColor: "#FFFFFF",
    position: "relative", // Position relative to enable absolute positioning of ellipses

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1.5",
    paddingTop: "10px",
    paddingLeft: theme.spacing(20),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
    flex: "2",
    alignSelf: "flex-end",
    marginLeft: theme.spacing(15), // Adjusted margin to move the image horizontally
    borderRadius: "10%", // Add border-radius for ellipse
    overflow: "hidden", // Hide overflow content (to ensure ellipse)
    position: "relative", // Position relative to enable absolute positioning of ellipses
    [theme.breakpoints.down("md")]: {
      flex: "1",
      alignSelf: "center",
      marginRight: 0, // Remove margin on smaller screens
    },
  }));

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

  const Image = styled("img")({
    width: "95%",
    marginBottom: 40,
    height: "100%",
    borderRadius: "10px",
    paddingBottom: "20px",
    alignSelf: "center",
    justifyContent: "center",
    position: "relative", // Position relative to enable absolute positioning of ellipses
    zIndex: 1, // Ensure it stays above the ellipses
  });

  return (
    <CustomBox component="header">
      <BoxText component="section">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            ...ellipsisStyles,
            fontWeight: 600,
            color: "#000000",
            marginTop: "55px",
            fontSize: "48px",
            fontStyle: "italic",
          }}
        >
          Simulation and Optimization as a{" "}
          <h2
            className="opt"
            style={{
              color: "#8630E8",
              fontWeight: "900",
              fontSize: "62px",
              fontStyle: "italic",
            }}
          >
            Service
          </h2>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 500,
            fontSize: "17px",
            color: "#8F8F8F",
            display: "inline-block", // Ensures the Typography behaves like an inline-block element
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10px", // Increase this value to increase the gap between text and underline
              left: 0,
              width: "100%", // Set the width of the underline to match the width of the text
              borderBottom: "2px solid #8F8F8F",
            },
          }}
        >
          The Future of Business Technology
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "#000000",
          }}
        >
          Jointly developed by IIT Indore and IITI DRISHTI CPS Foundation, with
          leading industry makers.
        </Typography>

        <Box>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              px: 4.5,
              py: 1.4,
              fontSize: "0.95rem",
              borderRadius: 8,
              textTransform: "capitalize",
              color: "#fff",
              backgroundImage:
                "linear-gradient(to right, #BA68C8,#AB47BC, #8630E8)",
              border: "none",
              "&&:hover": {
                backgroundImage:
                  "linear-gradient(to left, #BA68C8,#AB47BC, #8630E8)",
              },
              "&&:focus": {
                backgroundImage:
                  "linear-gradient(to right, #BA68C8,#AB47BC, #8630E8)",
              },
            }}
          >
            Watch now
          </Button>
          <Button
            component={Link}
            to="/about"
            variant="outlined"
            sx={{
              mr: 2,
              px: 3,
              py: 1.4,
              fontSize: "0.95rem",
              borderRadius: 8,
              color: "#4A148C",
              textTransform: "capitalize",
              backgroundColor: "#FFFFFF", // Initial background color (white)
              borderColor: "#000000",
              transition: "background-color 0.3s ease", // Smooth transition for background color change
              "&:hover": {
                background:
                  "linear-gradient(to right, #D8B9FA,#C28FFA,#BE88FA)",
                color: "#FFFFFF",
                borderColor: "#343a55",
              },
              "&:focus": {
                background:
                  "linear-gradient(to left, #E7D1FE,#E5D0FC,#D8B9FA,#D1ABFB)",
              },
            }}
          >
            Explore
          </Button>
        </Box>
      </BoxText>

      <ImageBox>
        <ellipsisStyles />
        <ellipsisStyles
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <Image src={headerImg} alt="Background_Image" />
      </ImageBox>
    </CustomBox>
  );
};

export default Header;
