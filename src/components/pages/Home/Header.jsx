import React from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import headerImg from "./backgroundimage.jpg";

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(2),
    paddingTop: theme.spacing(5),
    backgroundColor: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
    flex: "2",
    alignSelf: "flex-end",
    marginRight: theme.spacing(3), // Adjusted margin for the gap from the right
    [theme.breakpoints.down("md")]: {
      flex: "1",
      paddingTop: "30px",
      alignSelf: "center",
      marginRight: 0, // Remove margin on smaller screens
    },
  }));

  const Image = styled("img")({
    width: "100%",
    marginBottom: 90,
    height: "20%",
    borderRadius: "20px",
  });

  return (
    <CustomBox component="header">
      <BoxText component="section">
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#000000",
            marginTop: "60px",
          }}
        >
          Simulation and{" "}
          <span className="opt" style={{ color: "#FF0000" }}>
            Optimization
          </span>{" "}
          as a Service
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
              px: 3,
              py: 1,
              fontSize: "0.9rem",
              borderRadius: 1,
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#FF0000",
              "&&:hover": {
                backgroundColor: "#343a55",
              },
              "&&:focus": {
                backgroundColor: "#DA3C0A",
              },
            }}
          >
            Watch Now
          </Button>
          <Button
            component={Link}
            to={"/about"}
            variant="outlined"
            sx={{
              mr: 2,
              px: 3,
              py: 0.9,
              fontSize: "0.9rem",
              borderRadius: 1,
              color: "#000000",
              backgroundColor: "transparent",
              borderColor: "#000000",
              "&&:hover": {
                color: "#FFFFFF",
                backgroundColor: "#343a55",
                borderColor: "#343a55",
              },
              "&&:focus": {
                color: "#000000",
                borderColor: "#FFFFFF",
              },
            }}
          >
            Explore
          </Button>
        </Box>
      </BoxText>

      <ImageBox>
        <Image src={headerImg} alt="Background_Image" />
      </ImageBox>
    </CustomBox>
  );
};

export default Header;
