import React from "react";
import { Box, Container, Stack, Typography, Grid, Link } from "@mui/material";
import Image from "next/image";
import architecturebuilding from "../../assets/img/architecturebuilding.png";
import DianneRussell from "../../assets/img/DianneRussell.png";
import BlueButton from "../BlueButton";
import { HiArrowNarrowRight } from "react-icons/hi";

const Architecture = () => {
  return (
    <Box
      component="section"
      sx={{ my: { xs: "65px", sm: "95px", lg: "132px" } }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 1, sm: 3, md: 5, xl: 0 }}
          sx={{ justifyContent: "space-between", alignItems: "end" }}
        >
          <Grid item xs={12} xl={5}>
            <Box
              sx={{
                width: "fit-content",
                position: "relative",
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Image src={architecturebuilding} alt="building" />
              </Box>
              <Box
                sx={{
                  position: { xs: "static", sm: "absolute" },
                  top: "50%",
                  left: { md: "33%", xl: "30%" },
                  transform: {
                    xs: "translate(0%, 0%)",
                    sm: "translate(30%, -50%)",
                    md: "translate(58%, -50%)",
                  },
                  background:
                    "linear-gradient(119.84deg, #474747 4.14%, #222222 44.22%)",
                  boxShadow: "0px 10px 15px rgba(151, 151, 151, 0.12)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  px: { xs: "22px", sm: "30px" },
                  pt: "33px",
                  pb: { xs: "25px", sm: "42px" },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                <Image src={DianneRussell} alt="Dianne Russell" />
                <Typography
                  sx={{
                    fontSize: "22px",
                    lineHeight: "33px",
                    fontWeight: 600,
                    color: "#fff",
                    pt: "28px",
                    pb: "13px",
                  }}
                >
                  Dianne Russell
                </Typography>
                <Typography
                  sx={{
                    color: "#E5E5E5",
                    fontSize: "15px",
                    lineHeight: "21px",
                    fontWeight: 400,
                    width: "253px",
                  }}
                >
                  More than 20 years of experience in the field architecture and
                  has worked on project up to 100+
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            xl={5}
            sx={{ mt: { xs: "30px", sm: "0" }, mb: { xs: "0", sm: "15px" } }}
          >
            <Typography variant="h2">
              Meet and talk with our best architecture
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ my: { xs: "15px", sm: "30px", lg: "45px" } }}
            >
              All our teams are professional and competent in their fields and
              will help you realize your dream building with the excellent
              result.
            </Typography>

            <Stack
              direction="row"
              spacing={"5px"}
              sx={{
                alignItems: "center",
                justifyContent: { xs: "space-between", sm: "normal" },
              }}
            >
              <BlueButton>See all team</BlueButton>
              <Link
                sx={{
                  p: { xs: "5px", sm: "18px 36px", lg: "20px 40px" },
                  display: "flex",
                  alignItems: "center",
                  color: "#000",
                  fontWeight: 600,
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                <Box component="span">How it works</Box>
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    ml: { xs: "7px", sm: "17px" },
                  }}
                >
                  <HiArrowNarrowRight />
                </Box>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Architecture;
