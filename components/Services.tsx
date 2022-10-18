import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ServicesCard from "./ServicesCard";

const servicesData = [
  {
    id: 1,
    title: "Industrial",
    desc: "Industrial development is our main line of business. We do Factory Construction, Warehouse and others",
  },

  {
    id: 2,
    title: "Commercial",
    desc: "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings",
  },

  {
    id: 3,
    title: "Resedential",
    desc: "Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments",
  },
];

const Services = () => {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: "45px", sm: "65px", lg: "80px" },
        pb: { xs: "40px", sm: "55px", lg: "70px" },
        background: "#F6F6F6",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            pb: { xs: "30px", sm: "45px", md: "80px" },
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              sx={{
                pb: { xs: "10px", md: "0" },
              }}
            >
              Our Excellent Services
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="subtitle1">
              Check out our best service you can possibly orders in building
              your company and don&apos;t forget to ask via our email or our
              customer service if you are interested in using our services
            </Typography>
          </Grid>
        </Grid>

        <Grid container sx={{ flexWrap: "wrap" }} spacing={5}>
          {servicesData.map((cardItem) => (
            <Grid item key={cardItem.id} lg={4} sm={6} xs={12}>
              <ServicesCard title={cardItem.title} desc={cardItem.desc} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
