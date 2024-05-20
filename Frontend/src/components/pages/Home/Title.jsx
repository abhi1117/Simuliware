import { Typography } from '@mui/material'
import React from 'react'
import "./styles.css"

const Title = ({ text, textAlign }) => {
  return (
    <Typography
      variant="h4"
      component="h3"
      sx={{
        fontWeight: "700",
        textAlign: textAlign,
        fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif",
      }}
    >
      {text}
    </Typography>
  );
}

export default Title