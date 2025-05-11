import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E3A5F",
        color: "white",
        textAlign: "center",
        padding: "1em 0",
      }}
    >
      <Typography variant="body2">
        &copy; 2025 Municipalidad de Cholchol. Todos los derechos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;