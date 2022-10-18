import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import {
  IoBriefcaseOutline,
  IoPricetagOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import { AiOutlineFieldTime } from "react-icons/ai";
import DifferenceItem from "./DifferenceItem";

const Difference = () => {
  return (
    <Box
      component="section"
      sx={{
        pt: { xs: "60px", sm: "90px", lg: "123px" },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          ":before": {
            top: { xs: "-20px", sm: "-30px", lg: "-40px" },
            position: "absolute",
            content: `""`,
            width: { xs: "75px", sm: "85px", lg: "90px" },
            height: { xs: "7px", sm: "8px", lg: "9px" },
            background: `linear-gradient(90deg, #60BBEE -2.22%, #2387C0 67.22%)`,
          },
        }}
      >
        <Grid
          container
          sx={{
            justifyContent: "space-between",
            mb: { xs: "25px", md: "40px", lg: "60px" },
          }}
        >
          <Grid item xs={12} md={4}>
            <Typography
              variant="h2"
              sx={{
                pb: { xs: "10px", md: "0" },
              }}
            >
              What Make Us Different?
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

        <Box>
          <Grid container spacing={5}>
            <DifferenceItem
              // eslint-disable-next-line react/no-children-prop
              children={<IoBriefcaseOutline size={24} color="#FFFFFF" />}
              title="Experienced"
              desc="Our experience of 25 years of building and making achievements in the world of development"
            />

            <DifferenceItem
              // eslint-disable-next-line react/no-children-prop
              children={<IoPricetagOutline size={24} color="#FFFFFF" />}
              title="Competitive price"
              desc="The prices we offer you are very competitive without reducing the quality of the company's work in the slightest"
            />

            <DifferenceItem
              // eslint-disable-next-line react/no-children-prop
              children={<AiOutlineFieldTime size={24} color="#FFFFFF" />}
              title="On Time"
              desc="We prioritize the quality of our work and finish it on time"
            />

            <DifferenceItem
              // eslint-disable-next-line react/no-children-prop
              children={<IoShieldCheckmarkOutline size={24} color="#FFFFFF" />}
              title="Best Materials"
              desc="The material determines the building itself so we recommend that you use the best & quality materials in its class."
            />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Difference;
