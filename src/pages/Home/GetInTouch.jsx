import React from "react";
import { Button, Stack } from "@mui/material";
import Title from "../../components/Title";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 10,
        mx: 6,
      }}
    >
      <Title text={"Contact us for simuliware details"} textAlign={"center"} />
      <Paragraph
        text={
          "It is our steadfast commitment to ensure a seamless, professional, and enjoyable experience throughout your journey of acquiring simuliware. From expert guidance to personalized assistance, we're dedicated to making your purchasing process hassle-free and rewarding. Click the button below to explore our range of simuliware solutions tailored to your needs."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      <Button
        component={Link}
        to={"/contact"}
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
          backgroundColor: "#14192d",
          "&:hover": {
            backgroundColor: "#FF0000",
          },
        }}
      >
        Get In Touch
      </Button>
    </Stack>
  );
};

export default GetInTouch;
