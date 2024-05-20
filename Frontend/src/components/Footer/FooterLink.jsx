import { Link } from '@mui/material'
import React from 'react'


const FooterLink = ({ text, to }) => {
  return (
    <Link
      to={to}
      variant="p"
      component="a"
      sx={{
        fontSize: "0.9rem",
        fontWeight: "400",
        textDecoration: "none",
        color: "#FFFFFF",
        "&:hover": {
          color: "#FFFFFF",
        },
      }}
    >
      {text}
    </Link>
  );
}

export default FooterLink