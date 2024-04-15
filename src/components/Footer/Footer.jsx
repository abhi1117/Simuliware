import React from 'react'
import {
  Box,
  Stack,
  styled,
  Typography,
  IconButton,
} from '@mui/material'
import Link from '@mui/material/Link';
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./Footer.css";

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      backgroundColor: '#FF0000'
    });
  };

  const StackColumn = styled(Stack)(() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#2D3054",
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component="footer"
      sx={{
        py: 4,
        px: 3,
      }}
    >
      <StackColumn>
        <FooterTitle
          text={
            <span style={{ color: "#FFFFFF", fontFamily: "Inter"}}>
              Address
            </span>
          }
        />
        <span>
          <HomeIcon
            style={{ fontSize: 20, marginTop: "0px", color: "#FFFFFF" }}
          />
          <FooterLink
            text={" 4th Floor LRC, IIT Indore"}
            text2={"Madhya Pradesh"}
          />
        </span>
        <span
          sx={{
            color: "#FFFFFF",
            "&:hover": {
              color: "#FFFFFF",
            },
          }}
        ></span>
        <span>
          <PhoneInTalkIcon
            style={{ fontSize: 20, marginTop: "0px", color: "#FFFFFF" }}
          />
          <FooterLink text={"  +91-7316603372"} />
        </span>
        <span>
          <MailOutlineIcon
            style={{ fontSize: 20, marginTop: "0px", color: "#FFFFFF" }}
          />
          <FooterLink text={" officedrishti@iiti.ac.in"} />
        </span>
      </StackColumn>
      <StackColumn>
        <FooterTitle
          text={
            <span style={{ color: "#FFFFFF", fontFamily: "Inter" }}>
              Our Services
            </span>
          }
        />
        <FooterLink text={"Buy Simulation1"} />
        <FooterLink text={"Buy Simulation2"} />
        <FooterLink text={"Buy Simulation3"} />
        <FooterLink text={"Buy Simulation4"} />
      </StackColumn>
      <StackColumn>
        <FooterTitle
          text={
            <span style={{ color: "#FFFFFF", fontFamily: "Inter" }}>
              Our Company
            </span>
          }
        />
        <FooterLink text={"Contact Us"} />
        <FooterLink text={"Get in touch"} />
        <FooterLink text={"Management"} />
      </StackColumn>
      <StackColumn>
        <FooterTitle
          text={
            <span style={{ color: "#FFFFFF", fontFamily: "Inter" }}>
              Simuliware
            </span>
          }
        />
        <Stack
          direction="row"
          width="100px"
          maxWidth="100%"
          justifyContent="space-between"
          gap={1}
        >
          <Link
            href="https://www.instagram.com/p/CmQNQmXo-nI/"
            variant="body2"
            sx={{
              color: "#FFFFFF",
              "&:hover": {
                color: "#cd486b",
              },
            }}
            target="blank" // Added target="_blank" attribute to open in new tab
          >
            <InstagramIcon />
          </Link>
          <Link
            href="https://www.facebook.com/DrishtiCPS/"
            variant="body2"
            sx={{
              color: "#FFFFFF",
              "&:hover": {
                color: "#1877F2",
              },
            }}
            target="blank" // Added target="_blank" attribute to open in new tab
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
            target="blank" // Added target="_blank" attribute to open in new tab
          >
            <TwitterIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=false&heroEntityKey=urn%3Ali%3Aorganization%3A78678565&keywords=iiti%20drishti%20cps%20foundation&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=d2056e5f-fd8f-4f00-87bf-733bed1250cd&sid=qb)"
            variant="body2"
            sx={{
              color: "#FFFFFF",
              "&:hover": {
                color: "#0077b5",
              },
            }}
            target="blank" // Added target="_blank" attribute to open in new tab
          >
            <LinkedInIcon />
          </Link>
        </Stack>
        <Stack
          direction="row"
          width="100px"
          maxWidth="100%"
          justifyContent="space-between"
        >
          <Typography
            variant="caption"
            component="p"
            style={{ color: "#FFFFFF" }}
          >
            &copy;2024 Simuliware
          </Typography>
        </Stack>
      </StackColumn>
      {/* Move to top button */}
      <IconButton
        aria-label="move-to-top"
        onClick={handleScrollToTop}
        sx={{
          position: "fixed",
          bottom: 10,
          right: 20,
          backgroundColor: "transparent",
          color: "#7C7C7C",
          borderColor: "#FF0000",
          "&:hover": {
            backgroundColor: "#FF0000",
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
    </BoxRow>
  );
}

export default Footer;
