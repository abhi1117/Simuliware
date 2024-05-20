import React from "react";
import { Box, Stack, styled, Typography, IconButton } from "@mui/material";
import Link from "@mui/material/Link";
import FooterTitle from "./FooterTitle";
import FooterLink from "./FooterLink";
import HomeIcon from "@mui/icons-material/Home";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./Footer.css";
import Contact from "../pages/Contact/Contact";

const BoxRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#8630E8",
  justifyContent: "space-evenly",
  alignItems: "stretch",
  overflowX: "hidden",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 10, // Adjusted gap for smaller screens
  },
}));

const StackColumn = styled(Stack)(({ theme }) => ({
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: 7,
  textAlign: "left",
  flex: 1,
  padding: "0 50px",
}));

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <BoxRow
        component="footer"
        sx={{
          py: 4,
          px: 14,
        }}
      >
        <StackColumn>
          <FooterTitle
            text={
              <span
                style={{
                  color: "#FFFFFF",
                }}
              >
                Simuliware
              </span>
            }
          />
          <Typography
            variant="caption"
            component="p"
            style={{ color: "#FFFFFF", fontSize: "14px" }}
          >
            DrishtiCPS&copy;2024 Simuliware- Turns Imagination to reality
          </Typography>
          <Stack
            direction="row"
            width="100px"
            maxWidth="100%"
            justifyContent="space-between"
            gap={0.7}
          >
            <Link
              href="https://www.instagram.com/p/CmQNQmXo-nI/"
              variant="body2"
              sx={{
                color: "#FFFFFF",
                "&:hover": {
                  color: "#CA5574",
                },
              }}
              target="_blank"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://www.facebook.com/DrishtiCPS/"
              variant="body2"
              sx={{
                color: "#FFFFFF",
                "&:hover": {
                  color: "#467FFA",
                },
              }}
              target="_blank"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FDRISHTICPS"
              variant="body2"
              sx={{
                color: "#FFFFFF",
                "&:hover": {
                  color: "#1DA1F2",
                },
              }}
              target="_blank"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A78678565&keywords=iiti%20drishti%20cps%20foundation&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=d2056e5f-fd8f-4f00-87bf-733bed1250cd&sid=qb"
              variant="body2"
              sx={{
                color: "#FFFFFF",
                "&:hover": {
                  color: "#3387F4",
                },
              }}
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </Stack>
          <Stack
            direction="row"
            width="100px"
            maxWidth="100%"
            justifyContent="space-between"
          ></Stack>
        </StackColumn>

        <StackColumn>
          <FooterTitle
            text={<span style={{ color: "#FFFFFF" }}>Contact Us</span>}
          />
          <span style={{ display: "flex", alignItems: "center" }}>
            <HomeIcon
              style={{ fontSize: 20, color: "#FFFFFF", marginRight: 8 }}
            />
            <FooterLink text="4th Floor LRC, IIT Indore" />
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <PhoneInTalkIcon
              style={{ fontSize: 20, color: "#FFFFFF", marginRight: 8 }}
            />
            <FooterLink text="+91-731 6603372" />
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <MailOutlineIcon
              style={{ fontSize: 20, color: "#FFFFFF", marginRight: 8 }}
            />
            <FooterLink text="officedrishti@iiti.ac.in" />
          </span>
        </StackColumn>
        <StackColumn>
          <FooterTitle
            text={<span style={{ color: "#FFFFFF" }}>Resources</span>}
          />
          <FooterLink text="Blog" />
          <FooterLink text="Careers" />
          <FooterLink text="Press Releases" />
          <FooterLink text="Documentation" />
        </StackColumn>
        <StackColumn>
          <FooterTitle
            text={<span style={{ color: "#FFFFFF" }}>Quick Links</span>}
          />
          <FooterLink text="About Us" to={Contact} />
          <FooterLink text="Get in touch" to={Contact} />
          <FooterLink text="Get in touch" to={Contact} />
          <FooterLink text="Management" to={Contact} />
        </StackColumn>

        {/* Opening Hours Column */}
        <StackColumn>
          <FooterTitle
            text={<span style={{ color: "#FFFFFF" }}>Working Hours</span>}
          />
          <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
            Monday - Friday: 9am - 6pm
          </Typography>
          <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
            Saturday: 10am - 4pm
          </Typography>
          <Typography variant="body2" sx={{ color: "#FFFFFF" }}>
            Sunday: Closed
          </Typography>
        </StackColumn>
        {/* Move to top button */}
        <IconButton
          aria-label="move-to-top"
          onClick={handleScrollToTop}
          sx={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "#BA68C8",
            backgroundColor: "rgba(216, 169, 224, 0.4)", // Adjust the alpha value for transparency
            borderColor: "transparent",
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: "50%",
            padding: 0.5,
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#BA68C8",
            },
          }}
        >
          <KeyboardArrowUpIcon sx={{ color: "#000000", fontSize: 24 }} />
        </IconButton>
      </BoxRow>
    </footer>
  );
};

export default Footer;
