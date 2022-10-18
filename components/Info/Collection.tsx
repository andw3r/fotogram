import React, { useState } from "react";
import { Box, Container, Typography, Grid, Stack, Button } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import { FaQuoteLeft } from "react-icons/fa";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

interface Customers {
  id: number;
  name: string;
  someWords: string;
  title: string;
  desc: string;
  img: string;
}

const Collection = () => {
  const swiperSlide = useSwiperSlide();

  const imgs = [
    { id: 1, image: "collection.png" },
    { id: 2, image: "collection.png" },
    { id: 3, image: "collection.png" },
    { id: 4, image: "collection.png" },
  ];

  const customersData: Customers[] = [
    {
      id: 1,
      name: "Jacob Molen",
      someWords:
        "We like the final result this project, in extraordinary and also provides the best service to the client",
      title: "What we have done  & what our Customers say",
      desc: "We are to help you build a excellent build, with us nothing is impossible. See what we have done and what they have to say about our work perform",
      img: "jacob.png",
    },
  ];

  const [isLastSlideReached, setIsLastSlideReached] = useState<boolean>(true);

  return (
    <Box component="section" sx={{ position: "reletive" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          sx={{ mb: { xs: "15px", sm: "24px", lg: "38px" } }}
        >
          Our collection best project
        </Typography>

        <Grid container spacing={{ xs: "15px", md: "30px" }}>
          {imgs.map((item) => (
            <Grid item xs={6} md={3} key={item.id}>
              <Box
                sx={{
                  height: {
                    xs: "250px",
                    sm: "300px",
                    md: "360px",
                    lg: "478px",
                  },
                  position: "relative",
                }}
              >
                <Image
                  src={require(`../../assets/img/${item.image}`)}
                  alt="project"
                  height="100%"
                  width="100%"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mx: { xs: 0, md: "15px", lg: "30px", xl: "70px" },
            background:
              "linear-gradient(119.84deg, #474747 4.14%, #222222 44.22%)",
            boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.08)",
            position: "relative",
            bottom: { xs: "-80px", sm: "-120px", md: "-200px", lg: "-300px" },
          }}
        >
          <Swiper

          // if (customersData.length - 1) {
          //   setIsLastSlideReached(!isLastSlideReached);
          // }
          >
            {customersData.map((item) => (
              <SwiperSlide key={item.id}>
                <Stack
                  direction={{ xs: "column", lg: "row" }}
                  component="article"
                  spacing={{ xs: 2, sm: 3, md: 5, lg: 0 }}
                  sx={{
                    justifyContent: "space-between",

                    pt: {
                      xs: "15px",
                      sm: "30px",
                      md: "45px",
                      lg: "50px",
                      xl: "65px",
                    },
                    pb: {
                      xs: "75px",
                      sm: "97px",
                      md: "137px",
                      lg: "147px",
                      xl: "157px",
                    },
                    pl: {
                      xs: "10px",
                      sm: "20px",
                      md: "40px",
                      lg: "45px",
                      xl: "58px",
                    },
                    pr: {
                      xs: "10px",
                      sm: "20px",
                      md: "40px",
                      lg: "45px",
                      xl: "68px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: { sm: "344px" },
                      minHeight: { sm: "fit-content" },
                      width: { xs: "268px", md: "269px" },
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        height: "344px",
                        minHeight: "fit-content",
                        width: { xs: "268px", sm: "269px" },
                      }}
                    >
                      <Image
                        src={require(`../../assets/img/${item.img}`)}
                        alt="jacob"
                        layout="fill"
                        objectFit="cover"
                      />
                    </Box>

                    <Box
                      sx={{
                        position: { xs: "relative", sm: "absolute" },
                        background: "#fff",
                        left: { sm: "100%", lg: "50%" },
                        bottom: { sm: "0%", lg: "-24%" },
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <Box
                          sx={{
                            width: "fit-content",
                            height: "fit-content",
                            background: "#fff",
                            boxShadow: "0px 10px 15px rgba(35, 135, 192, 0.15)",
                            px: "25px",
                            py: "20px",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            borderRadius: "100%",
                            position: "absolute",
                          }}
                        >
                          <FaQuoteLeft color="#0A72AD" />
                        </Box>

                        <Box sx={{ px: "20px", pt: "40px", pb: "16px" }}>
                          <Typography
                            sx={{
                              textAlign: "center",
                              color: "#000",
                              lineHeight: "33px",
                              fontWeight: 600,
                              fontSize: "22px",
                              pb: "7px",
                            }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: 400,
                              fontSize: "13px",
                              lineHeight: "30px",
                              color: "#939393",
                              width: "222px",
                            }}
                          >
                            {item.someWords}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Stack
                    spacing={{ xs: "15px", md: "18px", lg: "44px" }}
                    sx={{ maxWidth: { md: "100%", lg: "380px", xl: "465px" } }}
                  >
                    <Typography variant="h3">{item.title}</Typography>
                    <Typography variant="subtitle1">{item.desc}</Typography>
                  </Stack>
                </Stack>
              </SwiperSlide>
            ))}

            {customersData.length > 1 && (
              <Stack
                spacing="5px"
                direction="row"
                sx={{
                  position: "absolute",
                  right: "5%",
                  bottom: { xs: "1%", sm: "5%", lg: "13%" },
                  zIndex: 1,
                }}
              >
                <Box
                  sx={{
                    cursor: "pointer",
                    width: "fit-content",
                    height: "fit-content",
                    px: { xs: "12px", sm: "15px" },
                    pt: { xs: "12px", sm: "15px" },
                    pb: { xs: "8px", sm: "11px" },
                    borderRadius: 0,
                  }}
                >
                  <ImArrowLeft2 color="#fff" size={25} />
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    width: "fit-content",
                    height: "fit-content",
                    px: { xs: "10px", sm: "15px" },
                    pt: { xs: "10px", sm: "15px" },
                    pb: { xs: "6px", sm: "11px" },
                    borderRadius: 0,
                    background: isLastSlideReached ? "#0A72AD" : "none",
                  }}
                >
                  <ImArrowRight2 color="#fff" size={25} />
                </Box>
              </Stack>
            )}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Collection;
