import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import BlueButton from "../BlueButton";
import Image from "next/image";
import storyImg from "../../assets/img/story.png";

const Story = () => {
  return (
    <Box component="section">
      <Container
        maxWidth="xl"
        sx={{ mb: { xs: "50px", md: "80px", lg: "120px" } }}
      >
        <Grid container spacing={{ xs: "44px", md: "44px", xl: "74px" }}>
          <Grid
            item
            xs={12}
            md={5}
            xl={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "space-between" },
            }}
          >
            <Typography variant="h2">Our Story Who we are</Typography>
            <Typography variant="subtitle1" sx={{ py: "20px" }}>
              Established in 1992, PT. Wahana Cipta operates as a General
              Contracting company with a footprint that we have planted
              throughout Indonesia. Initially, we focused on construction in the
              field of residential housing development in Jakarta. As the
              company grows, now we are present as a reliable...
            </Typography>
            <BlueButton>See More</BlueButton>
          </Grid>
          <Grid item xs={12} md={7} xl={6}>
            <Box
              sx={{
                p: { xs: "15px", sm: "25px" },
                background: "#fff",
                filter: "drop-shadow(0px 10px 15px rgba(151, 151, 151, 0.12))",
                width: "fit-content",
              }}
            >
              <Image src={storyImg} alt="our story" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Story;
