import { Paper, Box, Card, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import imgSer from "../assets/img/services.png";

interface Props {
  title: string;
  desc: string;
}

const ServicesCard = ({ title, desc }: Props) => {
  return (
    <Box component="article">
      <Paper
        elevation={0}
        sx={{
          p: { xs: "5px", sm: "10px", lg: "15px" },
        }}
      >
        <Image src={imgSer} alt="img" layout="responsive" />
      </Paper>
      <Typography
        variant="h4"
        sx={{
          py: { lg: "28px" },
        }}
      >
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{ pr: "35px" }}>
        {desc}
      </Typography>
    </Box>
  );
};

export default ServicesCard;
