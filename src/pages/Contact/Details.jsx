import React from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import Title from "../../components/Title";
import Paragraph from "../Home/Paragraph";

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
        py: 10,
        px: 2,
      }}
    >
      <Title text={"Get In Touch"} textAlign={"center"} />
      <Paragraph
        text={
          "If you have any query drop your details here, we will get back to you."
        }
        maxWidth={"sm"}
        mx={0}
        textAlign={"center"}
      />
      {/* Form */}
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{
          mt: 0,
          py: 0,
          width: "100%",
          maxWidth: "400px", // Optional: Limit form width
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
          type="tel"
          id="phone"
          autoComplete="tel"
        />
        <Button
          variant="contained"
          fullWidth
          type="submit"
          size="medium"
          sx={{
            fontSize: "1rem",
            py: 1.6,
            mt: 2,
            borderRadius: 2,
            textTransform: "none",
            backgroundColor: "#14192d",
            "&:hover": {
              backgroundColor: "#FF0000",
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Stack>
  );
};

export default Details;
