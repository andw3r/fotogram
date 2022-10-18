import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
  desc: string;
}

const DifferenceItem = ({ children, title, desc }: Props) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Box
        sx={{
          p: 1,
          background: `rgba(35, 135, 192, 0.3)`,
          borderRadius: "100px",
          width: "fit-content",
        }}
      >
        <Box
          sx={{
            px: "12px",
            pb: "8px",
            pt: "10px",
            background: "#2387C0",
            borderRadius: "100px",
          }}
        >
          {children}
        </Box>
      </Box>
      <Typography variant="h5" sx={{ pt: "26px", pb: "24px" }}>
        {title}
      </Typography>
      <Typography variant="subtitle1">{desc}</Typography>
    </Grid>
  );
};

export default DifferenceItem;
