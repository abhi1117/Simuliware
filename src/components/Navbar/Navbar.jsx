import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import DrawerItem from "./DrawerItem";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const Navbar = () => {
  const [anchorElAbout, setAnchorElAbout] = useState(null);
  const [anchorElServices, setAnchorElServices] = useState(null);
  const openAbout = Boolean(anchorElAbout);
  const openServices = Boolean(anchorElServices);

  const handleClickAbout = (event) => {
    setAnchorElAbout(event.currentTarget);
  };

  const handleClickServices = (event) => {
    setAnchorElServices(event.currentTarget);
  };

  const handleCloseAbout = () => {
    setAnchorElAbout(null);
  };

  const handleCloseServices = () => {
    setAnchorElServices(null);
  };

  const aboutDropdownItems = [
    { text: "Team", to: "/about/team" },
    { text: "Overview", to: "/about/overview" },
  ];

  const serviceDropdownItems = [
    { text: "Reliability Services", to: "/services/reliabilityservices" },
    { text: "Shop Floor Services", to: "/services/shopfloorservices" },
  ];

  // Remaining items after "About" and "Services"
  const remainingItems = [
    {
      text: "Gallery",
      to: "/gallery",
    },
    {
      text: "Contact",
      to: "/contact",
    },
    {
      text: "Login",
      to: "/login",
    },
    {
      text: "Register",
      to: "/register",
    },
  ];

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "#2D3054",
        fontSize: "28px",
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          onClick={scrollToTop}
          sx={{
            marginLeft: "52px",
            textDecoration: "none",
            fontSize: "28px",
            color: "#fff",
            "&:hover": { color: "#FF0000" }, // Change color to red on hover
          }}
        >
          Simuliware
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {/* Home */}
          <ListItem sx={{ mr: -2 }}>
            <ListItemButton
              component={Link}
              to="/"
              onClick={scrollToTop}
              sx={{
                color: "#fff",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#FF0000",
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontSize: "15px" }}>
                    Home
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
          {/* About Dropdown */}
          <ListItem sx={{ mr: -2 }}>
            <ListItemButton
              sx={{
                color: "#fff",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#FF0000",
                },
              }}
              onClick={handleClickAbout}
            >
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontSize: "15px" }}>
                    About
                  </Typography>
                }
              />
            </ListItemButton>
            <Menu
              anchorEl={anchorElAbout}
              open={openAbout}
              onClose={handleCloseAbout}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {aboutDropdownItems.map((subItem) => (
                <MenuItem
                  key={subItem.text}
                  component={Link}
                  to={subItem.to}
                  onClick={handleCloseAbout}
                  sx={{ color: "#000" }}
                >
                  {subItem.text}
                </MenuItem>
              ))}
            </Menu>
          </ListItem>
          {/* Services Dropdown */}
          <ListItem sx={{ mr: -2 }}>
            <ListItemButton
              sx={{
                color: "#fff",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#FF0000",
                },
              }}
              onClick={handleClickServices}
            >
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ fontSize: "15px" }}>
                    Services
                  </Typography>
                }
              />
            </ListItemButton>
            <Menu
              anchorEl={anchorElServices}
              open={openServices}
              onClose={handleCloseServices}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {serviceDropdownItems.map((subItem) => (
                <MenuItem
                  key={subItem.text}
                  component={Link}
                  to={subItem.to}
                  onClick={handleCloseServices}
                  sx={{ color: "#000" }}
                >
                  {subItem.text}
                </MenuItem>
              ))}
            </Menu>
          </ListItem>
          {/* Remaining Items */}
          {remainingItems.map((item) => (
            <ListItem key={item.text} sx={{ mr: -2 }}>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={scrollToTop}
                sx={{
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "#FF0000",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ fontSize: "15px" }}>
                      {item.text}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
