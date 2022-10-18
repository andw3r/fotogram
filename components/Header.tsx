import {
  Typography,
  Box,
  Container,
  AppBar,
  Stack,
  Link,
  Button,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import building from "../assets/img/build.png";
import { Squeeze as Hamburger } from "hamburger-react";

interface HeaderStatisticsProps {
  id: number;
  quantity: number;
  text: string;
}

const Header = () => {
  const links = [
    "Home",
    "Services",
    "Find a Team",
    "About Us",
    "Articles",
    "Portofolio",
    "Contact us",
  ];

  const headerStatistics: HeaderStatisticsProps[] = [
    { id: 1, quantity: 300, text: "Happy Client" },
    { id: 2, quantity: 900, text: "Amazing Projects" },
    { id: 3, quantity: 20, text: "Awards Winning" },
  ];

  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [isOpen]);

  return (
    <Box
      component="header"
      sx={{
        position: "relative",
        minHeight: { lg: "100vh" },

        height: "100%",
        width: "100%",
        background: `linear-gradient(139.84deg, #474747 4.14%, #222222 44.22%)`,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            zIndex: 2,
            position: "absolute",
            background: "#000",
            minHeight: "100%",
            width: "100%",
            left: 0,
            height: "100vh",
            transition: "all 0.25s ease",
            opacity: isOpen ? 0.6 : 0,
            visibility: isOpen ? "visible" : "hidden",
            display: { xs: "block", xl: "none" },
          }}
          onClick={() => {
            setOpen(false);
          }}
        ></Box>
        <AppBar
          position="static"
          sx={{
            background: "none",
            boxShadow: "none",
            pt: "48px",
            mb: "36px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Image src="/logo.svg" width="87" height="66" alt="logo" />
            </Box>
            <Stack
              direction={{ xs: "column", xl: "row" }}
              spacing={{ xs: 2, xl: 6 }}
              sx={{
                overflow: "auto",
                position: { xs: "absolute", xl: "static" },
                zIndex: 10,
                left: isOpen ? 0 : "-100%",
                top: 0,
                background: { xs: "#fff", xl: "none" },
                width: { xs: "70%", xl: "auto" },
                height: { xs: "100%", xl: "auto" },
                minHeight: { xs: "100vh", xl: "auto" },
                transition: "all 0.5s ease-out",
              }}
            >
              {links.map((link) => (
                <Link
                  key={link}
                  sx={{
                    color: { xs: "#000", xl: "primary.light" },
                    p: { xs: "15px" },
                    fontWeight: 500,
                    cursor: "pointer",
                    textDecoration: "none",
                    height: "fit-content",
                    transition: "all 0.25s",
                    fontSize: { xs: "18px", sm: "24px", xl: "16px" },
                    ":hover": { xs: "#000", xl: "#fff" },
                  }}
                >
                  {link}
                </Link>
              ))}
            </Stack>
            <Box sx={{ display: { xl: "none" }, zIndex: 3 }}>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </Box>
          </Box>
        </AppBar>

        <Box>
          <Typography
            variant="h1"
            sx={{ color: "#fff", maxWidth: "654px", mb: "24px" }}
          >
            We Provide Architectural design and Construction
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: "580px",
              mb: { xs: "16px", sm: "32px", lg: "62px" },
            }}
          >
            ​More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because
            our work is different
          </Typography>

          <Button
            sx={{
              p: { xs: "15px 30px", sm: "18px 36px", lg: "20px 40px" },
              color: "#FFFFFF",
              fontSize: { xs: "15px", sm: "16px" },
              lineHeight: "24px",
              mb: "43px",
              borderRadius: "0px",
              boxShadow: `0px 10px 15px rgba(1, 115, 153, 0.2)`,
              background: `linear-gradient(97.65deg, #60BBEE 0.33%, #0A72AD 93.35%)`,
            }}
          >
            Discover More
          </Button>

          <Stack direction="row" spacing="50px" sx={{ pb: "30px" }}>
            {headerStatistics.map((item) => (
              <Stack direction="column" key={item.id}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "24px", md: "36px" },
                    lineHeight: { xs: "28px", md: "54px" },
                    color: "#fff",
                  }}
                >
                  {item.quantity}
                  <Box component="span" sx={{ color: "#2387C0" }}>
                    +
                  </Box>
                </Typography>

                <Typography
                  sx={{
                    color: "primary.light",
                    fontSize: { xs: "16px", md: "18px" },
                    lineHeight: "27px",
                    fontWeight: 600,
                    width: 0,
                  }}
                >
                  {item.text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            right: 0,
            display: { xs: "none", xl: "block" },
          }}
        >
          <Image src={building} alt="building" />
        </Box>

        <Box
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(97.73deg, #399FD8 -6.96%, #0775B4 23.5%, #003756 92.79%)",
            boxShadow: "0px 10px 15px rgba(1, 115, 153, 0.2)",
            display: { xs: "none", lg: "block" },
          }}
        >
          <Stack
            direction={{ lg: "column", xl: "row" }}
            spacing={{ lg: "25px", xl: "45px" }}
            sx={{
              alignItems: "center",
              textAlign: { lg: "center", xl: "start" },
              py: { lg: "10px", xl: "36px" },
              pl: { lg: "10px", xl: "32px" },
              pr: { lg: "10px", xl: "82px" },
            }}
          >
            <Stack direction="column" sx={{ color: "#fff" }}>
              <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                General
              </Typography>
              <Typography sx={{ fontSize: "27px", fontWeight: 600 }}>
                Project
              </Typography>
            </Stack>

            <Stack direction="column" sx={{ color: "#fff" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "36px",
                  lineHeight: "54px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                25
                <Box
                  component="span"
                  sx={{
                    fontSize: "18px",
                    lineHeight: "27px",
                    fontWeight: 500,
                    ml: "18px",
                  }}
                >
                  Years
                </Box>
              </Typography>
              <Typography
                sx={{ fontSize: "24px", lineHeight: "36px", fontWeight: 600 }}
              >
                Operated
              </Typography>
            </Stack>

            <Stack>
              <Typography
                sx={{
                  maxWidth: "333px",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "31px",
                }}
              >
                As a trusted general project that has been operating for 25
                years, our commitment is always to prioritize our client
                satisfaction
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
