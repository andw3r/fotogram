import React from "react";
import { Box, Container, Stack, Typography, Link, Grid } from "@mui/material";
import {
  IoLogoGoogle,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(119.84deg, #474747 4.14%, #222222 44.22%)",
        pt: { xs: "120px", sm: "160px", md: "280px", lg: "380px", xl: "420px" },
        pb: { xs: "45px", sm: "50px", md: "60px", lg: "70px", xl: "75px" },
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: "75px", md: "85px", lg: "135px" }}>
          <Grid item xs={12} md={6}>
            <Stack direction="column">
              <Typography variant="h6" sx={{ color: "#fff" }}>
                General Project
              </Typography>

              <Typography
                sx={{
                  my: "32px",
                  fontWeight: 400,
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  lineHeight: "28px",
                  maxWidth: "547px",
                  color: "#fff",
                }}
              >
                is a general contractor company based in Jakarta. More than 25
                years of experience in building and carving out
                Indonesia&rsquo;s development.
              </Typography>

              <Stack direction="row" spacing="6px">
                <Link
                  sx={{
                    cursor: "pointer",
                    px: "12px",
                    pt: "10px",
                    pb: "7px",
                    borderRadius: "20px",
                    background: "rgba(35, 135, 192, 0.1)",
                  }}
                  href="#"
                >
                  <IoLogoGoogle color="#fff" />
                </Link>

                <Link
                  sx={{
                    cursor: "pointer",
                    px: "12px",
                    pt: "10px",
                    pb: "7px",
                    borderRadius: "20px",
                    background: "rgba(35, 135, 192, 0.1)",
                  }}
                  href="#"
                >
                  <IoLogoTwitter color="#fff" />
                </Link>

                <Link
                  sx={{
                    cursor: "pointer",
                    px: "12px",
                    pt: "10px",
                    pb: "7px",
                    borderRadius: "20px",
                    background: "rgba(35, 135, 192, 0.1)",
                  }}
                  href="#"
                >
                  <IoLogoInstagram color="#fff" />
                </Link>

                <Link
                  sx={{
                    cursor: "pointer",
                    px: "12px",
                    pt: "10px",
                    pb: "7px",
                    borderRadius: "20px",
                    background: "rgba(35, 135, 192, 0.1)",
                  }}
                  href="#"
                >
                  <IoLogoLinkedin color="#fff" />
                </Link>
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack direction="row" spacing={{ xs: "75px", sm: "93px" }}>
              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "DM Sans",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "23px",
                    mb: "33px",
                  }}
                >
                  Company
                </Typography>

                <Stack direction="column" spacing="25px">
                  {["About", "How It Works", "Term", "Privacy Policy"].map(
                    (item) => (
                      <Link
                        key={item}
                        sx={{
                          fontFamily: "DM Sans",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "21px",
                          color: "#FFFFFF",
                          cursor: "pointer",
                          textDecoration: "none",
                        }}
                      >
                        {item}
                      </Link>
                    )
                  )}
                </Stack>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "DM Sans",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "23px",
                    mb: "33px",
                  }}
                >
                  More
                </Typography>

                <Stack direction="column" spacing="25px">
                  {["Documentation", "License"].map((item) => (
                    <Link
                      key={item}
                      sx={{
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "21px",
                        color: "#FFFFFF",
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
