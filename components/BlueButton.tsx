import React from "react";
import { Button } from "@mui/material";

interface Props {
  children?: React.ReactNode;
}

const BlueButton = ({ children }: Props) => {
  return (
    <Button
      sx={{
        p: { xs: "15px 30px", sm: "18px 36px", lg: "20px 40px" },
        color: "#FFFFFF",
        background: "#0A72AD",
        fontSize: { xs: "15px", sm: "16px" },
        lineHeight: "24px",
        ":hover": { background: "#0A62AD" },
        borderRadius: "0px",
        boxShadow: "0px 10px 15px rgba(1, 115, 153, 0.2)",
        textTransform: "unset",
        width: "fit-content",
      }}
    >
      {children}
    </Button>
  );
};

export default BlueButton;
