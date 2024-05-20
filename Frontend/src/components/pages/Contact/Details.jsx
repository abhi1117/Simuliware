import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";

const Details = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      phone: data.get("phone"),
    });
  };

  return (
    <Stack
      component="section"
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 6,
        px: 2,
        fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif",
      }}
    >
      <Title text={"Interested to buy simulation"} textAlign={"center"} />
      <Paragraph
        text={
          "If you are interested to buy the simulation service contact us we will call you \
                shortly to fulfill you requirements and service."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />

      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 1,
          py: 2,
          fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif",
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="phone"
          label="Phone Number"
          type="phone"
          id="phone"
          autoComplete="current-phone"
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          size="medium"
          sx={{
            fontSize: "1rem",
            textTransform: "capitalize",
            py: 1.6,
            mt: 3,
            mb: 2,
            borderRadius: 2,
            background:
              "linear-gradient(to right, #8630E8, #8E3FE9, #974EEB, #9E62E0, #A976E2)",
            "&:hover": {
              background:
                "linear-gradient(to left, #8630E8, #8E3FE9, #974EEB, #9E62E0, #A976E2)",
            },
          }}
        >
          send
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
