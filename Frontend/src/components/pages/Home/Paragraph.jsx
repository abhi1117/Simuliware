import { Typography } from '@mui/material'
import React from 'react'
import "./styles.css"

const Paragraph = ({ text, maxWidth, mx, textAlign }) => {
  return (
    <Typography
      sx={{
        maxWidth: maxWidth,
        mx: mx,
        textAlign: textAlign,
        py: 2,
        color: "#363636",
        fontFamily: "'Plus Jakarta Sans', 'Poppins', sans-serif",
      }}
    >
      {text}
    </Typography>
  );
}

export default Paragraph