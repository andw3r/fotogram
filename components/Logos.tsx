import { Box, Container, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import logoImg from "../assets/img/adiralogo.png";

const Logos = () => {
  return (
    <Box component="section" sx={{ py: { xs: "35px", md: "55px" } }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={{ xs: "45px", md: "68px", lg: "96px" }}
          sx={{ flexWrap: "wrap" }}
        >
          <Box>
            <Image src={logoImg} alt="logo" layout="fixed" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Logos;
