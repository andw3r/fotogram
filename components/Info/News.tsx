import React from "react";
import { Box, Typography, Container, Grid, Stack } from "@mui/material";
import newsImg from "../../assets/img/news.png";
import Image from "next/image";

interface News {
  id: number;
  title: string;
  desc: string;
}

const News = () => {
  const news: News[] = [
    {
      id: 1,
      title: "Elements of Content in Epoxy Paint",
      desc: "Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin...",
    },

    {
      id: 2,
      title: "Elements of Content in Epoxy Paint",
      desc: "Planning the construction of awarehouse for both industrial, personal and other goods storage must be done carefully. When the planning is done properly, the construction is...",
    },

    {
      id: 3,
      title: "5 Right Steps in Warehouse Planning and Construction",
      desc: "Having a solid home is certainly everyone's dream. How not, the house is a place where the residents can rest and take shelter from the bad weather...",
    },
  ];

  return (
    <Box
      component="section"
      sx={{ pb: { xs: "45px", md: "75px", lg: "95px" } }}
    >
      <Container maxWidth="xl">
        <Typography variant="h2" sx={{ mb: { xs: "18px", md: "38px" } }}>
          News & Update
        </Typography>

        <Grid
          container
          spacing={{ xs: "60px", sm: "30px", lg: "40px" }}
          sx={{ justifyContent: "space-between" }}
        >
          {news.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4}>
              <Box
                sx={{
                  p: { xs: "0", sm: "5px", lg: "14px" },
                  mb: { xs: "12px", md: "21px" },
                  background: "#fff",
                  width: "fit-content",
                  filter:
                    "drop-shadow(0px 10px 15px rgba(151, 151, 151, 0.08))",
                }}
              >
                <Image src={newsImg} alt="news" />
              </Box>

              <Stack direction="row">
                <Box
                  sx={{
                    mr: { xs: "5px", md: "15px" },
                    mb: { xs: "15px", md: "25px" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "28px",
                      lineHeight: "42px",
                      color: "primary.dark",
                    }}
                  >
                    12
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "primary.dark",
                    }}
                  >
                    Jan
                  </Typography>
                </Box>
                <Typography variant="h6" sx={{ mt: "7px" }}>
                  {item.title}
                </Typography>
              </Stack>

              <Typography variant="subtitle1">
                {item.desc}
                <Typography component="span" sx={{ color: "#0A72AD" }}>
                  &nbsp;Read more
                </Typography>
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default News;
