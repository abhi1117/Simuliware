import React from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "../../components/Title";
// img
import imgDetail from "./imagination.jpeg";
import imgDetail2 from "./process.jpg";

const GetStarted = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "justify",
    lineHeight: "1.5",
    color: "#515151",
    marginTop: "1.5rem",
    wordWrap: "break-word",
  });

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 0,
        px: 2,
        backgroundColor: "#E7E9EB",
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 8,
      }}
    >
      <CustomGridItem item xs={14} sm={8} md={6} component="section">
        <Box
          component="article"
          sx={{
            px: 5,
            py: 0,
            marginBottom: 10,
          }}
        >
          <Title text={"We make it easy for our clients"} textAlign={"start"} />
          <CustomTypography>
            Our platform ensures you're always in the loop with continuously
            updated listings, so you never miss the latest simulations hitting
            the market. Whether you're seeking the ideal simulation for product
            development or aiming to stay ahead in your industry, we've got you
            covered. Dive into a diverse array of cutting-edge technologies and
            realistic environments, perfect for refining algorithms, creating
            immersive training scenarios, or simulating complex processes. With
            efficient filtering options, finding the right simulation is a
            breeze. From virtual reality to medical scenarios, our platform
            offers a world of possibilities. Join our community today and
            discover the perfect simulation for your needs! Our platform is
            designed to make your search efficient and effective. From virtual
            reality to computational models, from medical simulations to
            environmental scenarios, the possibilities are endless. Stay
            informed, stay ahead, and find the simulation that aligns perfectly
            with your goals. Join our community today and unlock a world of
            simulation possibilities!
          </CustomTypography>
        </Box>
      </CustomGridItem>

      <Grid item xs={12} sm={4} md={6}>
        <img
          src={imgDetail}
          alt=""
          style={{
            width: "100%",
            height: "85%",
            borderRadius: "30px",
          }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "30px",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 6,
          }}
        >
          <Title
            text={"Match with the best agent as per your requirements"}
            textAlign={"start"}
          />
          <CustomTypography>
            "Match with the best agent as per your requirements" - that's our
            promise. Our platform is designed to seamlessly connect you with the
            ideal agent for your needs. Whether you're buying, selling, or
            renting, finding the perfect match is crucial. With our
            sophisticated matching algorithms, we analyze your preferences,
            budget, location, and more to pair you with an agent who understands
            your unique requirements. Say goodbye to generic searches and hello
            to personalized service. From experienced professionals to local
            experts, we've got you covered. Trust our platform to streamline
            your real estate journey and connect you with the best agent
            tailored just for you.Our platform ensures personalized service by
            analyzing your preferences, budget, and location to match you with
            the perfect real estate agent. Trust us for a seamless experience.
            Trust our platform for personalized service and seamless real estate
            connections.
          </CustomTypography>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};
export default GetStarted;
