import React from "react";
import { Card, CardContent, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bhupeshsir from "./Pictures/Bhupesh_Sir.png";
import Adarsh from "./Pictures/Adarsh.png";
import Kulkarnisir from "./Pictures/Kulkarni_Sir.jpg";
import Manash from "./Pictures/Manas.png";
import Sherwin from "./Pictures/Sherwin.png";
import Suraj from "./Pictures/Suraj.png";
import "./Team.css";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const Team = () => {
  // Define settings for the Slider component
  const teamMembers = [
    {
      name: "Adarsh",
      location: "IIT-Indore",
      bio: "Adarsh Singh Baghel is a Project intern at Indian Institute of Technology Indore, working under prof. Bhupesh Kumar Lad having knowledge of cloud and database and his keen interest in learning new technologies.",
      image: Adarsh,
      linkedin: "https://www.linkedin.com/in/johndoe/",
      facebook: "https://www.facebook.com/johndoe/",
      twitter: "https://twitter.com/johndoe/",
      instagram: "https://instagram.com/johndoe/",
    },
    {
      name: "Prof. Bhupesh K. Lad",
      location: "IIT-Indore",
      bio: "Professor in discipline of Mechanical Engineering at Indian Institute of Technology Indore. His research interests include Smart Manufacturing, Reliability Engineering and Prognostics.",
      image: Bhupeshsir,
      linkedin: "https://www.linkedin.com/in/johndoe/",
      facebook: "https://www.facebook.com/johndoe/",
      twitter: "https://twitter.com/johndoe/",
      instagram: "https://instagram.com/johndoe/",
    },
    {
      name: "Prof. Makrand Kulkarni",
      location: "IIT-Bombay",
      bio: "Professor in discipline of Mechanical Engineering at IIT Bombay. His research areas liability Engineering, Digital Twins for industry 4.0, Maintenance Planning and Manufacturing Analytics.",
      image: Kulkarnisir,
      linkedin: "https://www.linkedin.com/in/johndoe/",
      facebook: "https://www.facebook.com/johndoe/",
      twitter: "https://twitter.com/johndoe/",
      instagram: "https://instagram.com/johndoe/",
    },
    {
      name: "Manash",
      location: "IIT-Indore",
      bio: "Manas Sohgaura is project engineer working under the guidance of Prof. Bhupesh Kumar Lad at the Indian Institute of Technology Indore , with a background in Industrial Engineering.",
      image: Manash,
      linkedin: "https://www.linkedin.com/in/johndoe/",
      facebook: "https://www.facebook.com/johndoe/",
      twitter: "https://twitter.com/johndoe/",
      instagram: "https://instagram.com/johndoe/",
    },
    {
      name: "Serwin",
      location: "IIT-Indore",
      bio: "Sherwin is a project engineer at Indian Institute of technology Indore, working under prof. Bhupesh Kumar Lad having expertise in industrial engineering and Python. ",
      image: Sherwin,
      linkedin: "https://www.linkedin.com/in/johndoe/",
      facebook: "https://www.facebook.com/johndoe/",
      twitter: "https://twitter.com/johndoe/",
      instagram: "https://instagram.com/johndoe/",
    },
    {
      name: "Suraj",
      location: "IIT-Indore",
      bio: "Suraj Yadav is a 4th year student at Indian Institute of Technology Indore, working under Prof. Bhupesh Kumar Lad for his BTP project. He has keen interest in programming and robotics.",
      image: Suraj,
      linkedin: "https://www.linkedin.com/in/johndoe/",
      facebook: "https://www.facebook.com/johndoe/",
      twitter: "https://twitter.com/johndoe/",
      instagram: "https://instagram.com/johndoe/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    paddingBottom: "80px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    prevArrow: <NavigateBefore />, // Previous arrow icon
    nextArrow: <NavigateNext />, // Next arrow icon
  };

  return (
    <>
      <h2
        className="team-heading"
        style={{ color: "#E8309E", textAlign: "center", marginTop: "0px" }}
      >
        <span style={{ fontSize: "18px" }}>
          <span style={{ color: "#8630E8" }}>OUR </span>TEAM
        </span>
      </h2>
      <div className="team-container">
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <Card>
                <CardContent>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="member-image"
                  />
                  <Typography variant="h6" gutterBottom>
                    {member.name}
                  </Typography>
                  <Typography variant="overline" gutterBottom>
                    {member.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {member.bio}
                  </Typography>
                  <div className="social-icons">
                    <IconButton
                      aria-label="facebook"
                      component="a"
                      href={member.facebook}
                      target="_blank"
                      className="facebook-icon"
                    >
                      <Facebook />
                    </IconButton>
                    <IconButton
                      aria-label="twitter"
                      component="a"
                      href={member.twitter}
                      target="_blank"
                      className="twitter-icon"
                    >
                      <Twitter />
                    </IconButton>
                    <IconButton
                      aria-label="linkedin"
                      component="a"
                      href={member.linkedin}
                      target="_blank"
                      className="linkedin-icon"
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      aria-label="instagram"
                      component="a"
                      href={member.instagram}
                      target="_blank"
                      className="instagram-icon"
                    >
                      <Instagram />
                    </IconButton>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Team;
