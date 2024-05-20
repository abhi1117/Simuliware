import React from "react";
import { Button, Stack } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";
import "./styles.css";

const GetInTouch = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 6.1,
        mx: 2,
        background: "#fff",
        borderRadius: 2,
        marginTop: 1,
        fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif",
        color: "black",
      }}
    >
      <Title
        text={"Contact us for simuliware details"}
        textAlign={"center"}
        fontFamily="'Plus Jakarta Sans', 'Poppins', sans-serif" // Applying font family directly here
      />
      <Paragraph
        text={
          "It is our steadfast commitment to ensure a seamless, professional, and enjoyable experience throughout your journey of acquiring simuliware. From expert guidance to personalized assistance, we're dedicated to making your purchasing process hassle-free and rewarding. Click the button below to explore our range of simuliware solutions tailored to your needs."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
        sx={{ fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif" }}
      />
      <Button
        component={Link}
        to={"/Contact"}
        variant="contained"
        type="submit"
        size="medium"
        sx={{
          fontSize: "1rem",
          py: 1.6,
          px: 16,
          mt: 3,
          mb: 2,
          borderRadius: 2,
          textTransform: "none",
          background:
            "linear-gradient(to right, #8630E8, #8E3FE9, #974EEB, #9E62E0, #A976E2)",
          "&:hover": {
            background: "linear-gradient(to right, #A974E7, #8630E8)",
          },
          fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif",
        }}
      >
        Get In Touch
      </Button>
    </Stack>
  );
};

export default GetInTouch;
